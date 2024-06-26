import { Box, ChakraProvider, Flex, Grid, GridItem } from "@chakra-ui/react"
import Header from "./components/Header"
import Welcome from "./components/Welcome"
import Skills from "./components/Skills"
import "./App.css"
import Projects from "./components/Projects"
import { useEffect, useState } from "react"
import Contact from "./components/Contact"
import { extendTheme } from "@chakra-ui/react"
import Background from "./components/Background"
import Experience from "./components/Experience"
import Education from "./components/Education"
import Resume from "./components/Resume"

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

				<Grid maxW={"100%"} gridTemplateColumns={["1fr", , , "2.1fr 1fr"]} gridTemplateRows={["auto auto", , , "auto"]} overflow="hidden">
					<GridItem>
						<Experience />
					</GridItem>
					<GridItem>
						<Education />
						<Resume />
					</GridItem>
				</Grid>
				<Skills />
				<Projects tabWidth={tabWidth} />
				<Contact />
			</Box>
		</ChakraProvider>
	)
}

export default App
