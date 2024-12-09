import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../../ui/button'
import { Container } from '../container'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

interface Props {
	className?: string
}
export const HeroSection: React.FC<Props> = ({ className }) => {
	return (
		<Container
			className={cn(
				className,
				'px-24 py-20 flex gap-48 h-[600px] w-full bg-[#212153]'
			)}
		>
			<div>
				<p
					className={cn(
						inter.className,
						'mb-7 font-sans text-[48px] font-extrabold text-white'
					)}
				>
					Discover Your <span className='text-[#00B7F3]'>Ideal</span>
					<br />
					Career Path Based
					<br />
					on Your Academic
					<br />
					Performance.
				</p>
				<p className={cn(inter.className, 'text-white text-[16px] mb-7')}>
					Unlock your potential by discovering career paths tailored
					<br />
					to your academic strengths. Find the best option of your
					<br />
					career path with us!
				</p>
				<div className='flex gap-8'>
					<Button
						size={'lg'}
						className='bg-[#00B7F3] hover:bg-white hover:text-[#00B7F3] text-white rounded-[5px] text-sm font-semibold shadow-none'
					>
						<Link href='sign-up/'>Get Started</Link>
					</Button>

					<Button
						size={'lg'}
						className='bg-[#212153] border-2 hover:bg-white hover:text-[#212153] text-white rounded-[5px] text-sm font-semibold shadow-none'
					>
						<Link href='about/'>Learn More</Link>
					</Button>
				</div>
			</div>
			<Image src='/info-board.svg' alt='info-board' width={650} height={800} />
		</Container>
	)
}
