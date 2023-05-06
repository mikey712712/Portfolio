import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
	const { ref, inView } = useInView({
		threshold: 0,
	})
	return (
		<Flex
			ref={ref}
			opacity={inView ? 1 : 0}
			top={inView ? "0" : "-40px"}
			transition={"800ms"}
			position={"relative"}
			// m={["0", , , "150px 0"]}
			p={["0", , , "0 0 100px 0"]}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			zIndex={"100"}
			id="contact"
			bgColor={"#191414"}
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderRadius={"5px"}
				borderTop={[, , , "1px solid white"]}
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
