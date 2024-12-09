import { useStore } from '@/app/store/store'
import { cn } from '@/lib/utils'

export const TopBar = () => {
	const { activeTab, setActiveTab } = useStore()

	return (
		<div className='border-2 flex border-[#212153] w-full max-w-[1200px] rounded-[8px] overflow-hidden '>
			{[
				'Student Information',
				'Academic Performance',
				'Directions',
				'Statistics',
			].map(tab => (
				<button
					key={tab}
					className={cn(
						'w-[300px] p-1 text-center ', // flex-1 для равномерного распределения ширины
						activeTab === tab
							? 'bg-[#212153] text-white overflow-auto'
							: 'border-[1px] border-x-[#212153] font-medium text-[#212153] '
					)}
					onClick={() => setActiveTab(tab)}
				>
					{tab}
				</button>
			))}
		</div>
	)
}
