import { Button, Container } from '@/components/index'
import { MainInfo } from '@/components/shared/info-cards/main-info'
import { ChevronLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
export default function StudentInformation() {
	return (
		<>
			<div className='w-full h-screen bg-[#F5F5F5]'>
				<Container className=' w-[1200px] bg-[#F5F5F5] flex flex-col gap-1'>
					<Link href='/'>
						<Button className='bg-transparent text-[#212153] shadow-none rounded-[5px] hover:bg-[#212153] hover:text-white text-center'>
							<ChevronLeft /> Back
						</Button>
					</Link>
					<Container className='w-full bg-[#F5F5F5] flex gap-1'>
						<div className='w-[380px] flex flex-col gap-4 p-5'>
							<Image
								src='/image.png'
								width={260}
								height={260}
								alt='Profile Picture'
								className='rounded-[5px]'
							/>
							<h1 className='font-bold text-[24px] w-full text-[#212153]'>
								Mason Gallagher
							</h1>
							<p className='text-[18px] text-[#212153]'>1.33 GPA</p>
						</div>
						<MainInfo
							id={'210103001'}
							university={'SDU university'}
							faculty={'Engineering and Natural Sciences'}
							major={'Information Systems'}
							course={4}
							birthday={'2001-01-01'}
						/>
						<div></div>
					</Container>
				</Container>
			</div>
		</>
	)
}
