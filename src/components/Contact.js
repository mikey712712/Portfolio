import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"

export default function Contact({ scrollLevel }) {
	return (
		<Flex
			opacity={scrollLevel > document.querySelector("#root").scrollHeight - 1.2 * window.innerHeight ? 1 : 0}
			// top={scrollLevel > document.querySelector("#root").scrollHeight - 1.4 * window.innerHeight ? "80px" : "0"}
			transition={"800ms"}
			position={"relative"}
			m={["0", , , "150px 0"]}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			id="contact"
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderRadius={"5px"}
				borderTop={[, , , "2px solid white"]}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px 30px 20px 30px"
				fontFamily={"Sono, sans-serif"}
				color="white"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Flex flexFlow={"column nowrap"} p={["0", , , "0 0 15px 15px"]}>
					<Text boxSizing="border-box" w={"100%"} h="fit-content" fontWeight="400" fontSize={"2.8em"}>
						Contact
					</Text>
					<Text m={"0 0 15px 0"} fontSize={"1.5em"}>
						Looking for a self-driven and capable software engineer? Get in contact with me via email or LinkedIn!
					</Text>
					<Link href="mailto:michaelholton712@gmail.com" p={["0", , , "0 0 0 15px"]} _hover={{ color: "#12cc53" }} fontSize={"1.5em"}>
						Email
					</Link>
					<Link
						href="https://www.linkedin.com/in/michaelholton-dev/"
						isExternal
						p={["0", , , "0 0 0 15px"]}
						_hover={{ color: "#12cc53" }}
						fontSize={"1.5em"}
					>
						LinkedIn
					</Link>
					<Link href="https://github.com/mikey712712/" isExternal p={["0", , , "0 0 0 15px"]} _hover={{ color: "#12cc53" }} fontSize={"1.5em"}>
						Github
					</Link>
				</Flex>
			</Flex>
		</Flex>
	)
}
