import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Skills from "./components/Skills"
import "./App.css"
import Projects from "./components/Projects"
import { useEffect, useState } from "react"

function App() {
	const [tabWidth, setTabWidth] = useState(window.innerWidth)
	const setResize = () => {
		setTabWidth(window.innerWidth)
	}
	useEffect(() => {
		function watchWidth() {
			window.addEventListener("resize", setResize)
		}
		watchWidth()
		return () => {
			window.removeEventListener("resize", setResize)
		}
	})
	return (
		<ChakraProvider>
			<Box h={"100%"} w={"100vw"} className="App">
				<Header tabWidth={tabWidth} />
				<Welcome tabWidth={tabWidth} />
				<Skills />
				<Projects />
			</Box>
		</ChakraProvider>
	)
}

export default App
