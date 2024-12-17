import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Container } from './container'
import Image from 'next/image'
interface Props {
	className?: string
}
export const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn(
				'w-full sticky top-0 bg-white py-5 px-12 z-10 border-[#212153] border-[1px] border-x-0 border-t-0',
				className
			)}
		>
			<Container className='flex items-center justify-between '>
				<Image src={'Vector.svg'} width={40} height={40} alt='Logo'/>
				<div className='flex gap-3'>
					<Link href='/'>
						<Button
							size={'lg'}
							className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
						>
							Home
						</Button>
					</Link>
					<Link href='about/'>
						<Button
							size={'lg'}
							className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
						>
							About
						</Button>
					</Link>
					<Link href='student-detail-page/'>
						<Button
							size={'lg'}
							className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
						>
							Career Exploration
						</Button>
					</Link>
					<Link href='/career-prediction'>
						<Button
							size={'lg'}
							className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
						>
							Prediction Tool
						</Button>
					</Link>
					<Link href='login/'>
						<Button
							size={'lg'}
							className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
						>
							Login
						</Button>
					</Link>
					<Link href='sign-up/'>
						<Button
							size={'lg'}
							className='bg-[#212153] hover:bg-white hover:text-[#212153] text-white rounded-[5px] text-sm font-semibold hover:outline hover:outline-[#212153] shadow-none'
						>
							Sign Up
						</Button>
					</Link>
				</div>
			</Container>
		</div>
	)
}
