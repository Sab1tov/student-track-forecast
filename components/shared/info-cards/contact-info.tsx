import { CardContent, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { Inter } from 'next/font/google'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

interface Props {
	phone: string
	mail: string
}

export const ContactInfo: React.FC<Props> = ({
	phone,
	mail
}) => {
	return (
		<CardContent
			className={cn(inter.className, 'py-5 gap-5  border-[#D9D9D9] border-0')}
		>
			<CardTitle className='text-[#212153] text-[24px] mb-5'>
				Contact Information
			</CardTitle>
			<ul className=' flex gap-5'>
				<div>
					<li>
						<strong>Phone:</strong>
					</li>
					<li>
						<strong>Mail:</strong>
					</li>
				</div>
				<div>
					<li>{phone}</li>
					<li>{mail}</li>
				</div>
			</ul>
		</CardContent>
	)
}
