'use client'
import { cn } from '@/lib/utils'
import { CircleCheck, X } from 'lucide-react'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

interface Props {
	className?: string
	isVisible: boolean
}

const inter = Inter({ subsets: ['latin'] })
export const SuccessModal: React.FC<Props> = ({ isVisible }) => {
	const [visible, setVisible] = useState(isVisible)
	useEffect(() => {
		const handleKeydown = (event: KeyboardEvent) => {
			// Check if the Ctrl+Z (Undo) combination is pressed
			if (event.ctrlKey && event.key === 'z') {
				event.preventDefault() // Block the default behavior (undo)
			}
		}

		if (visible) {
			document.body.style.overflow = 'hidden'
			document.addEventListener('keydown', handleKeydown)
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
			document.removeEventListener('keydown', handleKeydown)
		}
	}, [visible])
	if (!visible) return null
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
					onClick={() => setVisible(false)}
				/>
				<h2 className='text-center text-xl font-bold'>Success</h2>
				<CircleCheck className='w-28 h-28 text-green-600 text-5xl my-4' />
				<p className='text-center'>
					A recovery link has been sent to your email.
				</p>
				<button
					className='w-40 h-10 mt-6 px-6 py-2 bg-[#212153] text-white rounded-[5px]'
					onClick={() => setVisible(false)}
				>
					OK
				</button>
			</div>
		</div>
	)
}
