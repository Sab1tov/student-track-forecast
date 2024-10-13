import { Card, Container, Footer, NavBar } from '@/components/index'
import {
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'

export default function TeacherProfile() {
	return (
		<>
			<NavBar />
			<Container className='w-full h-full flex px-20 my-5 gap-10'>
				<Card className='w-[380px]'>
					<CardHeader className='gap-3 border-2 border-[#D9D9D9] border-x-0 border-t-0'>
						<Image
							src='/Student-Profile.png'
							alt='teacher-profile'
							width={250}
							height={250}
						/>
						<CardTitle className='text-[#212153] text-[24px]'>
							Shapay Nurshapagat
						</CardTitle>
						<CardDescription className='text-[#212153] font-medium text-lg'>
							Senior Lecturer
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
						<button className='w-[130px] h-[40px] bg-[#212153] text-white py-2 px-4 rounded-[5px]'>
							Sign In
						</button>
					</div>
				</div>
			</Container>
			<Footer />
		</>
	)
}
