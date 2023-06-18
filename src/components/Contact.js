import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
	const { ref, inView } = useInView({
		threshold: 0.5,
		triggerOnce: true,
	})
	return (
		<Flex
			ref={ref}
			opacity={inView ? 1 : 0}
			transition={"opacity 800ms ease-out"}
			position={"relative"}
			// m={["0", , , "150px 0"]}
			p={["0", , , "0 0 100px 0"]}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			zIndex={"100"}
			id="contact"
			bgColor={"#212428"}
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderTop={[, , , "1px solid #f6f7f9"]}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px 30px 20px 30px"
				fontFamily={"Sono, sans-serif"}
				color="#f6f7f9"
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
					<Link href="mailto:michaelholton712@gmail.com" p={["0", , , "0 0 0 15px"]} _hover={{ color: "#00ff00" }} fontSize={"1.5em"}>
						Email
					</Link>
					<Link
						href="https://www.linkedin.com/in/michaelholton-dev/"
						isExternal
						p={["0", , , "0 0 0 15px"]}
						_hover={{ color: "#00ff00" }}
						fontSize={"1.5em"}
					>
						LinkedIn
					</Link>
					<Link href="https://github.com/mikey712712/" isExternal p={["0", , , "0 0 0 15px"]} _hover={{ color: "#00ff00" }} fontSize={"1.5em"}>
						Github
					</Link>
				</Flex>
			</Flex>
		</Flex>
	)
}
