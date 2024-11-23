'use client'

import {
	Button,
	Container,
	Footer,
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
	Input,
	NavBar,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SuccessModal,
	Title,
} from '@/components/index'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectValue } from '@radix-ui/react-select'
import { LockKeyhole, Mail } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

// Валидация с использованием zod
const formSchema = z
	.object({
		emailAddress: z.string().email(),
		password: z.string().min(8, 'Password must be at least 8 characters long'),
		passwordConfirm: z.string(),
		accountType: z.enum(['student', 'teacher'], {
			errorMap: () => ({ message: 'Please select an account type' }),
		}),
	})
	.refine(
		data => {
			return data.password === data.passwordConfirm
		},
		{
			message: "Passwords don't match",
			path: ['passwordConfirm'],
		}
	)

const inter = Inter({ subsets: ['latin'] })

export default function SignUp() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			emailAddress: '',
			password: '',
			passwordConfirm: '',
			accountType: '', // Значение по умолчанию пустое
		},
	})

	// Состояние для отображения модального окна
	const [showModal, setShowModal] = useState(false)

	// Обработчик отправки формы
	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		console.log('Form data:', data) // Лог данных формы
		setShowModal(true) // Показать модальное окно
	}

	// Обработчик закрытия модального окна
	const handleCloseModal = () => {
		setShowModal(false) // Закрыть модальное окно
	}

	return (
		<>
			<NavBar />
			<Container className='flex flex-col h-screen justify-center items-center bg-[#F5F5F5]'>
				<div className='h-[653px] flex flex-col justify-center items-center border-2 border-[#D9D9D9] bg-white p-8 rounded-[10px] gap-5'>
					<div>
						<Title
							text='Sign Up'
							size='md'
							className={cn(inter.className, 'font-extrabold my-5')}
						/>
						<Form {...form}>
							<form
								className='flex flex-col justify-center gap-8'
								onSubmit={form.handleSubmit(handleSubmit)}
							>
								<FormField
									control={form.control}
									name='emailAddress'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-bold text-base'>
												Mail
											</FormLabel>
											<FormControl>
												<div className='relative'>
													<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
														<Mail className='h-5 w-5 text-gray-400' />
													</div>
													<Input
														className='w-[350px] h-10 bg-white text-lg text-black border-2 border-[#D9D9D9] rounded-[9px] pl-10 placeholder:text-[#D9D9D9] placeholder:text-[16px] placeholder:font-bold'
														placeholder='Email Address'
														type='email'
														{...field}
													/>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-bold text-base'>
												Password
											</FormLabel>
											<FormControl>
												<div className='relative'>
													<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
														<LockKeyhole className='h-5 w-5 text-gray-400' />
													</div>
													<Input
														className='w-[350px] h-10 bg-white text-lg text-black border-2 border-[#D9D9D9] rounded-[9px] pl-10 placeholder:text-[#D9D9D9] placeholder:text-[16px] placeholder:font-bold'
														placeholder='Password'
														type='password'
														{...field}
													/>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='passwordConfirm'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-bold text-base'>
												Confirm Password
											</FormLabel>
											<FormControl>
												<div className='relative'>
													<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
														<LockKeyhole className='h-5 w-5 text-gray-400' />
													</div>
													<Input
														className='w-[350px] h-10 bg-white text-lg text-black border-2 border-[#D9D9D9] rounded-[9px] pl-10 placeholder:text-[#D9D9D9] placeholder:text-[16px] placeholder:font-bold'
														placeholder='Confirm Password'
														type='password'
														{...field}
													/>
												</div>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name='accountType'
									render={({ field }) => (
										<FormItem>
											<FormLabel className='font-bold text-base'>
												Account type
											</FormLabel>
											<Select onValueChange={field.onChange}>
												<FormControl>
													<SelectTrigger className='w-[350px] h-10 bg-white text-lg text-black border-2 border-[#D9D9D9] rounded-[9px]'>
														<SelectValue placeholder='Select an account type' />
													</SelectTrigger>
												</FormControl>
												<SelectContent>
													<SelectItem
														className='w-[350px] h-10 bg-white text-lg text-black'
														value='student'
													>
														Student
													</SelectItem>
													<SelectItem
														className='w-[350px] h-10 bg-white text-lg text-black'
														value='teacher'
													>
														Teacher
													</SelectItem>
												</SelectContent>
											</Select>
											<FormMessage />
										</FormItem>
									)}
								/>
								<Button
									type='submit'
									className='w-[350px] bg-[#212153] text-white rounded-[9px] text-base font-bold hover:bg-white hover:text-[#212153] hover:border-2 hover:border-[#212153] hover:shadow-lg'
								>
									Registration
								</Button>
							</form>
						</Form>
					</div>
					<h1 className='text-black text-[12px] font-semibold'>
						Already have an account?{' '}
						<Link href='/login' className='text-[#212153]'>
							Sign In
						</Link>
					</h1>
				</div>
			</Container>
			<Footer />
			<SuccessModal isVisible={showModal} onClose={handleCloseModal} />
		</>
	)
}
