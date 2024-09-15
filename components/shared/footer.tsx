import { cn } from '@/lib/utils'
import { Globe, Mail, Phone } from 'lucide-react'
import { Inter } from 'next/font/google'
import { Container } from './container'
import { Title } from './title'

interface Props {
	className?: string
}

const inter = Inter({ subsets: ['latin'] })
export const Footer: React.FC<Props> = ({ className }) => {
	return (
		<Container
			className={cn(
				className,
				inter.className,
				'h-36 flex justify-center items-center font-semibold '
			)}
		>
			<div className='flex flex-col justify-center items-center gap-7'>
				<div className='flex justify-center items-center gap-10'>
					<div className='flex gap-2 text-[#212153]'>
						<Globe />
						Student Track App
					</div>
					<div className='flex gap-2 text-[#212153]'>
						<Phone />
						+7 700 370 55 25
					</div>
					<div className='flex gap-2 text-[#212153]'>
						<Mail />
						bestplayer0202@gmail.com
					</div>
				</div>
				<Title
					text='Copyright © All right reserved Student Track App.'
					className={cn(
						inter.className,
						'text-[16px] font-sans font-bold text-[#212153]'
					)}
				/>
			</div>
		</Container>
	)
}
