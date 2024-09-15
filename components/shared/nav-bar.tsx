import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { Container } from './container'

interface Props {
	className?: string
}
export const NavBar: React.FC<Props> = ({ className }) => {
	return (
		<div
			className={cn('w-full sticky top-0 bg-white py-5 px-12 z-10', className)}
		>
			<Container className='flex items-center justify-between'>
				<div className='w-[40px] h-[40px] bg-[#212153]' />
				<div className='flex gap-3'>
					<Link href='/'>
						<Button
							size={'lg'}
							className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
						>
							Home
						</Button>
					</Link>
					<Button
						size={'lg'}
						className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
					>
						<Link href='/'>About</Link>
					</Button>
					<Button
						size={'lg'}
						className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
					>
						<Link href='/'>Career Exploration</Link>
					</Button>
					<Button
						size={'lg'}
						className='bg-white text-[#212153] hover:bg-[#212153] hover:text-white rounded-[5px] text-sm font-semibold shadow-none'
					>
						<Link href='/'>Prediction Tool</Link>
					</Button>
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
