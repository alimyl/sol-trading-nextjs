import React, { useEffect } from "react"

// next - router
import { useRouter } from 'next/router'

// main function
function Home() {
	const router = useRouter()

	// on page load redirecting to the homepage
	useEffect(() => {
		router.push('/home')
	}, [])

	return (
		<React.Fragment>
			{/* root of the page */}
		</React.Fragment>
	)
}

export default Home