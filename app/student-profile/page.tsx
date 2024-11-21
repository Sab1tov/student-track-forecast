import { Card, Container, Footer, NavBar } from '@/components/index'
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function StudentProfile() {
	return (
		<>
			<NavBar />
			<Container className='w-full h-full flex px-20 my-5 gap-10'>
				<Card className='w-[380px]'>
					<CardHeader className='gap-3 border-2 border-[#D9D9D9] border-x-0 border-t-0'>
						<Image
							src='/Student-Profile.png'
							alt='student-profile'
							width={250}
							height={250}
						/>
						<CardTitle className='text-[#212153] text-[24px]'>
							Yasin Sabitov
						</CardTitle>
						<CardDescription className='text-[#212153] font-medium text-lg'>
							2.76 GPA
						</CardDescription>
					</CardHeader>
					<CardContent className='py-5 gap-5 border-2 border-[#D9D9D9] border-x-0 border-t-0'>
						<CardTitle className='text-[#212153] text-[24px]'>
							Main Information
						</CardTitle>
						<ul className='space-y-2 my-5'>
							<li>
								<strong>ID:</strong> 210103001
							</li>
							<li>
								<strong>University:</strong> SDU University
							</li>
							<li>
								<strong>Faculty:</strong> Engineering and Natural Sciences
							</li>
							<li>
								<strong>Major:</strong> Information Systems
							</li>
							<li>
								<strong>Course:</strong> 4th grade
							</li>
							<li>
								<strong>Birthday:</strong> 01.01.2004 (20 yrs.)
							</li>
						</ul>
					</CardContent>
					<CardContent className='py-5 gap-5 border-2 border-[#D9D9D9] border-x-0 border-t-0'>
						<CardTitle className='text-[#212153] text-[24px]'>
							Contact Information
						</CardTitle>

						<ul className='space-y-2 my-5'>
							<li>
								<strong>Phone:</strong> +77003705525
							</li>
							<li>
								<strong>Mail:</strong> 210103050@stu.sdu.edu.kz
							</li>
						</ul>
					</CardContent>
				</Card>
				<div className='flex flex-col items-center w-full h-screen'>
					<h2 className='text-[24px] font-bold text-[#212153]'>
						Academic Performance
					</h2>
					<div className='flex flex-col h-full items-center justify-center gap-5'>
						<p className='text-center text-[32px] font-bold text-[#212153]'>
							Insert from SDU University Portal
						</p>
						<div className='flex gap-5'>
							<button
								className='py-2 w-[130px] bg-[#212153] text-white rounded-[9px] text-base font-bold
									hover:bg-white hover:text-[#212153] hover:outline hover:outline-[#212153] hover:shadow-lg'
							>
								Sign In
							</button>

							<button
								className='py-2 w-[130px] bg-[#212153] text-white rounded-[9px] text-base font-bold
									hover:bg-white hover:text-[#212153] hover:outline hover:outline-[#212153] hover:shadow-lg'
							>
								Upload
							</button>
						</div>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	)
}
