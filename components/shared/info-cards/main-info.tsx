import { CardContent, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

interface Props {
	id: string
	university: string
	faculty: string
	major: string
	course: number
	birthday: string
}

export const MainInfo: React.FC<Props> = ({
	id,
	university,
	faculty,
	major,
	course,
	birthday,
}) => {
	const getCourse = (course: number) => {
		switch (course) {
			case 1:
				return '1st grade'
			case 2:
				return '2nd grade'
			case 3:
				return '3rd grade'
			case 4:
				return '4th grade'
			default:
				return 'Not a student'
		}
	}
	return (
		<CardContent
			className={cn(inter.className, 'py-5 gap-5  border-[#D9D9D9] border-0')}
		>
			<CardTitle className='text-[#212153] text-[24px] mb-5'>
				Main Information
			</CardTitle>
			<ul className=' flex gap-5'>
				<div>
					<li>
						<strong>ID:</strong>
					</li>
					<li>
						<strong>University:</strong>
					</li>
					<li>
						<strong>Faculty:</strong>
					</li>
					<li>
						<strong>Major:</strong>
					</li>
					<li>
						<strong>Course:</strong>
					</li>
					<li>
						<strong>Birthday:</strong>
					</li>
				</div>
				<div>
					<li>{id}</li>
					<li>{university}</li>
					<li>{faculty}</li>
					<li>{major}</li>
					<li>{getCourse(course)}</li>
					<li>{birthday}</li>
				</div>
			</ul>
		</CardContent>
	)
}
