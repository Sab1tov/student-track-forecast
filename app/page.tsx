import {
	Footer,
	HeroSection,
	HowItWorks,
	KeyFeaturesSection,
	NavBar,
} from '../components/index'

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<HowItWorks />
			<KeyFeaturesSection />
			<Footer />
		</>
	)
}
