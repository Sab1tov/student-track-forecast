import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../../ui/card'
import { Container } from '../container'
import { Title } from '../title'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ['latin'] })

interface Props {
	className?: string
}
export const KeyFeaturesSection: React.FC<Props> = ({ className }) => {
	return (
		<Container className={cn(className, 'pt-16 h-[600px] w-full bg-[#212153]')}>
			<Title
				text='Key Features'
				className={cn(
					inter.className,
					'text-white -mb-10 flex justify-center text-[42px] font-sans font-semibold'
				)}
			/>
			<div className='w-full h-full flex justify-center items-center gap-20'>
				<Card className='w-[350px] h-[350px] hover:scale-110 transition-transform'>
					<CardHeader className='flex flex-row'>
						<CardTitle className='text[#212153] text-[24px]'>
							Accurate Career Predictions
						</CardTitle>
						<Image
							src='/Na__August_22 1.svg'
							alt='info-board'
							width={200}
							height={200}
						/>
					</CardHeader>
					<CardContent>
						<p className='text-[#003567] font-sans font-semibold'>
							Using advanced data analysis, our platform predicts careers based
							on your unique academic performance, ensuring high relevance and
							accuracy.
						</p>
					</CardContent>
				</Card>
				<Card className='w-[350px] h-[350px] hover:scale-110 transition-transform'>
					<CardHeader className='flex flex-row'>
						<CardTitle className='text[#212153] text-[24px]'>
							Detailed Career Insights
						</CardTitle>
						<Image
							src='/19197304 1.svg'
							alt='info-board'
							width={200}
							height={200}
						/>
					</CardHeader>
					<CardContent>
						<p className='text-[#003567] font-sans font-semibold'>
							Understand potential careers with insights into required skills,
							job responsibilities, average salaries, and industry growth
							trends.
						</p>
					</CardContent>
				</Card>
				<Card className='w-[350px] h-[350px] hover:scale-110 transition-transform'>
					<CardHeader className='flex flex-row'>
						<CardTitle className='text[#212153] text-[24px]'>
							Academic Performance Tracking
						</CardTitle>
						<Image
							src='/20944338 1.svg'
							alt='info-board'
							width={200}
							height={200}
						/>
					</CardHeader>
					<CardContent>
						<p className='text-[#003567] font-sans font-semibold'>
							Using advanced data analysis, our platform predicts careers based
							on your unique academic performance, ensuring high relevance and
							accuracy.
						</p>
					</CardContent>
				</Card>{' '}
			</div>
		</Container>
	)
}
