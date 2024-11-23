'use client'
import { cn } from '@/lib/utils'
import { CircleCheck, X } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useEffect } from 'react'

interface Props {
	className?: string
	isVisible: boolean
	onClose: () => void // Добавляем обработчик для закрытия
}

const inter = Inter({ subsets: ['latin'] })

export const SuccessModal: React.FC<Props> = ({ isVisible, onClose }) => {
	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				// Закрыть модал по нажатию Escape
				onClose()
			}
		}

		if (isVisible) {
			// Сохраняем скролл, но блокируем взаимодействие
			const body = document.body
			const scrollPosition = window.scrollY
			body.style.overflow = 'hidden'
			body.style.position = 'fixed'
			body.style.top = `-${scrollPosition}px`
			body.style.width = '100%'

			document.addEventListener('keydown', handleKeydown)
		} else {
			// Возвращаем страницу в исходное состояние
			const body = document.body
			const scrollY = parseInt(body.style.top || '0', 10)
			body.style.overflow = ''
			body.style.position = ''
			body.style.top = ''
			body.style.width = ''
			window.scrollTo(0, -scrollY)
		}

		return () => {
			// Убираем стили при размонтировании
			const body = document.body
			const scrollY = parseInt(body.style.top || '0', 10)
			body.style.overflow = ''
			body.style.position = ''
			body.style.top = ''
			body.style.width = ''
			window.scrollTo(0, -scrollY)

			document.removeEventListener('keydown', handleKeydown)
		}
	}, [isVisible, onClose])

	if (!isVisible) return null

	return (
		<div
			className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
			aria-modal='true'
			role='dialog'
		>
			<div
				className={cn(
					inter.className,
					'bg-white rounded-lg p-6 z-50 shadow-lg w-[486px] h-auto flex flex-col items-center justify-between relative'
				)}
			>
				<X
					className='absolute w-6 h-6 right-4 top-4 cursor-pointer'
					onClick={onClose} // Закрыть модал при клике
				/>
				<h2 className='text-center text-xl font-bold'>Success</h2>
				<CircleCheck className='w-28 h-28 text-green-600 text-5xl my-4' />
				<p className='text-center'>
					A recovery link has been sent to your email.
				</p>
				<Link href='/login'>
					<button
						className='w-40 h-10 mt-6 px-6 py-2 bg-[#212153] text-white rounded-[5px]'
						onClick={onClose} // Закрыть модал при клике
					>
						OK
					</button>
				</Link>
			</div>
		</div>
	)
}
