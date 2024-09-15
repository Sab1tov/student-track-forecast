'use client'

import {
	Button,
	Container,
	Footer,
	Form,
	Input,
	NavBar,
	Title,
} from '@/components/index'
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { LockKeyhole, Mail } from 'lucide-react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z
	.object({
		emailAddress: z.string().email(),
		password: z.string().min(8),
		passwordConfirm: z.string(),
		accountType: z.enum(['student', 'teacher']),
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
export default function SignIn() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			emailAddress: '',
			password: '',
		},
	})
	const handleSubmit = () => {}
	return (
		<>
			<NavBar />
			<Container className='flex flex-col h-screen justify-center items-center bg-[#F5F5F5]'>
				<div className='{//h-[653px]} flex flex-col justify-center items-center border-2 border-[#D9D9D9] bg-white p-8 rounded-[10px] gap-5'>
					<div>
						<Title
							text='Sign In'
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
									render={({ field }) => {
										return (
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
										)
									}}
								/>
								<FormField
									control={form.control}
									name='password'
									render={({ field }) => {
										return (
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
										)
									}}
								/>
								<Link href='/login'>
									<Button
										type='submit'
										className='w-[350px] bg-[#212153] text-white rounded-[9px] text-base font-bold
									hover:bg-white hover:text-[#212153] hover:border-2 hover:border-[#212153] hover:shadow-lg'
									>
										Login
									</Button>
								</Link>
							</form>
						</Form>
					</div>
					<h1 className='text-black text-[12px] font-medium pl-56'>
						<Link href='/login'>Forgot your password ?</Link>
					</h1>
					<h1 className='text-black text-[12px] font-semibold'>
						{`Don't have an account? `}
						<Link href='/login' className='text-[#212153]'>
							Sign Up
						</Link>
					</h1>
					{/* <div className='flex items-center justify-center my-3 gap-3'>
						<div className='w-[115px] border-t border-gray-300 flex-grow'></div>
						<span className='mx-4 text-black text-[12px]'>OR</span>
						<div className='w-[115px] border-t border-gray-300 flex-grow'></div>
					</div> */}
				</div>
			</Container>
			<Footer />
		</>
	)
}
