import { Box, ChakraProvider } from "@chakra-ui/react"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Skills from "./components/Skills"
import "./App.css"
import Projects from "./components/Projects"
import { useEffect, useState } from "react"
import Contact from "./components/Contact"
import { extendTheme } from "@chakra-ui/react"
import Background from "./components/Background"

const theme = extendTheme({
	colors: {
		tech: "#0ec24d",
	},
})

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
		<ChakraProvider theme={theme}>
			<Background />
			<Box h={"100%"} maxW={"1600px"} m="0 auto" w={"100vw"} className="App">
				<Header tabWidth={tabWidth} />
				<Welcome tabWidth={tabWidth} />
				<Skills />
				<Projects tabWidth={tabWidth} />
				<Contact />
			</Box>
		</ChakraProvider>
	)
}

export default App
