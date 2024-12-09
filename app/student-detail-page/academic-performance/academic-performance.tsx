import { Container } from '@/components/index'
import Image from 'next/image'

export default function AcademicPerformance() {
	return (
		<>
			<div className='w-screen h-screen bg-[#F5F5F5]'>
				<Container className='w-screen h-full flex px-20  gap-10 bg-[#F5F5F5]'>
					<Image
						src='/academic-preformance.png'
						width={3000}
						height={1500}
						alt='academic-performance'
					/>
				</Container>
			</div>
		</>
	)
}
