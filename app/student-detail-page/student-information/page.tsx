import { Container, Footer, NavBar } from '@/components/index'
import Image from 'next/image'

export default function StudentInformation() {
	return (
		<>
			<div className='w-full h-screen bg-[#F5F5F5]'>
				<NavBar />
				<Container className=' bg-[#F5F5F5]'>
					<Image src='/student-information.png' width={4048} height={2000} />
				</Container>
				<Footer />
			</div>
		</>
	)
}
