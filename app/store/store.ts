import { create } from 'zustand'

type Store = {
	activeTab: string
	setActiveTab: (tab: string) => void
}

export const useStore = create<Store>(set => ({
	activeTab: 'Student Information', // начальная активная вкладка
	setActiveTab: (tab: string) => set({ activeTab: tab }),
}))
