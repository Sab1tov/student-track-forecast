import { Container } from '@/components/index'
import Image from 'next/image'

export default function Statistics() {
	return (
		<>
			<div className='w-full h-screen bg-[#F5F5F5]'>
				<Container className=' bg-[#F5F5F5]'>
					<Image
						src='/statistics.png'
						width={4048}
						height={2000}
						alt='statistics'
					/>
				</Container>
			</div>
		</>
	)
}
