import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"

export default function Contact({ scrollLevel }) {
	return (
		<Flex
			opacity={scrollLevel > window.innerHeight * 1 ? 1 : 0}
			top={scrollLevel > window.innerHeight * 1 ? "80px" : "0"}
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
				<Text boxSizing="border-box" p={["0", , , "0 0 15px 15px"]} w={"100%"} h="fit-content" fontWeight="400" fontSize={"2.8em"}>
					Contact
				</Text>
			</Flex>
		</Flex>
	)
}
