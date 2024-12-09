import { Container } from '@/components/index'
import Image from 'next/image'

export default function Directions() {
	return (
		<>
			<div className='w-full h-screen bg-[#F5F5F5]'>
				<Container className=' bg-[#F5F5F5]'>
					<Image
						src='/directions.png'
						width={4048}
						height={2000}
						alt='directions'
					/>
				</Container>
			</div>
		</>
	)
}
