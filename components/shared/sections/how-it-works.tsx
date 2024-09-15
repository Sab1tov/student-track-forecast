import { cn } from '@/lib/utils'
import { MoveRight } from 'lucide-react'
import { Inter } from 'next/font/google'
import React from 'react'
import { Container } from '../container'
import { Title } from '../title'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

interface Props {
	className?: string
}
export const HowItWorks: React.FC<Props> = ({ className }) => {
	return (
		<Container
			className={cn(
				className,
				'flex flex-col gap-10 h-[400px] w-full bg-white items-center justify-center'
			)}
		>
			<Title
				text='How It Works'
				className={cn(
					inter.className,
					'text-[42px] font-sans font-semibold font'
				)}
			/>
			<div className='flex gap-4 items-center justify-center'>
				<div className='rounded-[5px] w-80 h-40 bg-[#212153] flex items-center justify-center hover:scale-110 transition-transform'>
					<Title
						text='Input Academic Data'
						className={cn(
							inter.className,
							'text-[16px] text-white font-sans font-semibold font'
						)}
					/>
				</div>
				<MoveRight size={40} className='text-[#212153]' />
				<div className='rounded-[5px] w-80 h-40 bg-[#212153] flex items-center justify-center hover:scale-110 transition-transform'>
					<Title
						text='Get Predictions'
						className={cn(
							inter.className,
							'text-[16px] text-white font-sans font-semibold font'
						)}
					/>
				</div>
				<MoveRight size={40} className='text-[#212153]' />
				<div className='rounded-[5px] w-80 h-40 bg-[#212153] flex items-center justify-center hover:scale-110 transition-transform'>
					<Title
						text='Explore Careers'
						className={cn(
							inter.className,
							'text-[16px] text-white font-sans font-semibold font'
						)}
					/>
				</div>
			</div>
		</Container>
	)
}
