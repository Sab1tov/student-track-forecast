import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import React from 'react'
import { Container } from '../container'

const inter = Inter({ subsets: ['latin'] })

interface Props {
	className?: string
}
export const AboutSection: React.FC<Props> = ({ className }) => {
	return (
		<Container
			className={cn(
				className,
				'px-24 py-20 flex gap-48 h-auto w-full bg-[#003567]'
			)}
		>
			<div className='space-y-5'>
				<div className={cn(inter.className, 'w-[555px]')}>
					<h1 className='text-white text-[24px] underline mb-5'>Our Mission</h1>
					<p className='text-white text-[16px]'>
						At Student Track App, we are dedicated to empowering students and
						educators with data-driven insights that guide academic and career
						success. Our mission is to help students discover their potential
						career paths based on their academic performance and equip teachers
						with the tools to better support their students in reaching their
						goals.
					</p>
				</div>
				<div className={cn(inter.className, 'w-[555px] h-[275px]')}>
					<h1 className='text-white text-[24px] underline mb-5'>
						What We Offer?
					</h1>
					<ul className='text-white text-[16px]  list-disc'>
						<li>
							Accurate Career Predictions: Our system uses advanced algorithms
							to align academic performance with career possibilities.
						</li>
						<li>
							Detailed Insights: We provide students with information on
							potential careers, including required skills, salary expectations,
							and industry growth.
						</li>
						<li>
							Academic Progress Tracking: Both students and teachers can monitor
							academic performance over time and see how it aligns with career
							goals.
						</li>
						<li>
							Personalized Recommendations: Tailored learning resources and
							goals to help students achieve their academic and career
							aspirations.
						</li>
					</ul>
				</div>
				<div className={cn(inter.className, 'w-[555px]')}>
					<h1 className='text-white text-[24px] underline mb-5'>Our Vision</h1>
					<p className='text-white text-[16px]'>
						We envision a world where every student is equipped with the
						knowledge and resources to pursue a fulfilling career that matches
						their talents and interests. By providing personalized academic and
						career insights, we hope to inspire and guide students as they
						navigate their educational journeys and beyond.
					</p>
				</div>
			</div>
			<div className='space-y-5'>
				<div className={cn(inter.className, 'w-[555px]')}>
					<h1 className='text-white text-[24px] underline mb-5'>Who We Are?</h1>
					<p className='text-white text-[16px]'>
						We are a passionate team of educators, data scientists, and
						technology experts who believe in the power of personalized
						education. By harnessing the latest in data analysis and machine
						learning, we provide career predictions that are tailored to each
						students strengths and interests, allowing them to make informed
						decisions about their future.
					</p>
				</div>
				<div className={cn(inter.className, 'w-[555px] h-[275px]')}>
					<h1 className='text-white text-[24px] underline mb-5'>
						Why It Matters?
					</h1>
					<p className='text-white text-[16px]'>
						In today’s fast-changing job market, finding the right career path
						can be overwhelming. By offering personalized guidance based on real
						academic data, we help students take the guesswork out of their
						future. Teachers also benefit from tools that allow them to provide
						better feedback and tailored advice to their students.
					</p>
				</div>
				<div className={cn(inter.className, 'w-[555px]')}>
					<h1 className='text-white text-[24px] underline mb-5'>
						Join Us on the Journey
					</h1>
					<p className='text-white text-[16px]'>
						Whether you're a student looking for guidance or a teacher wanting
						to support your students in new ways, Student Track App is here to
						help you every step of the way. Let’s work together to unlock new
						opportunities and create a future filled with success.
					</p>
				</div>
			</div>
		</Container>
	)
}
