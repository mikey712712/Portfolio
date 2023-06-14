import { Flex, Text } from "@chakra-ui/react"

export default function Experience() {
	return (
		<Flex
			// ref={containerRef}
			// opacity={containerInView ? 1 : 0}
			transition={"800ms"}
			position={"relative"}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			id="projects"
			scrollMarginTop={"30px"}
			zIndex={"100"}
			bgColor={"#212428"}
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
				// color="white"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Text boxSizing="border-box" p={["0", , , "0 0 15px 15px"]} w={"100%"} h="fit-content" color={"#f6f7f9"} fontWeight="400" fontSize={"2.8em"}>
					Experience
				</Text>
				<Flex>
					<Flex
						boxSizing="border-box"
						p={["0", , , "0 0 15px 15px"]}
						color={"#00ff00"}
						w={"100%"}
						h="fit-content"
						fontWeight="400"
						fontSize={"1.2em"}
					>
						<Text>
							Software Engineering Instructor Associate - <i>General Assembly</i>
						</Text>
					</Flex>
					<Flex>
						<Text></Text>
					</Flex>
					<Flex>
						<Text></Text>
					</Flex>
					<Flex>
						<Text></Text>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
