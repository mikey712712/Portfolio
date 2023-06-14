import { Flex, Grid, GridItem, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import { useInView } from "react-intersection-observer"
export default function Education() {
	const { ref: containerRef, inView: containerInView } = useInView({
		threshold: 0.2,
	})
	const { ref: refOne, inView: oneInView } = useInView({
		threshold: 0.2,
	})
	const { ref: refTwo, inView: twoInView } = useInView({
		threshold: 0.2,
	})

	return (
		<Flex
			ref={containerRef}
			opacity={containerInView ? 1 : 0}
			transition={"800ms"}
			position={"relative"}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			id="education"
			scrollMarginTop={"30px"}
			zIndex={"100"}
			bgColor={"#212428"}
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderRadius={"5px"}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="10px 30px 30px 30px"
				fontFamily={"Sono, sans-serif"}
				// color="white"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Text
					right={containerInView ? 0 : "50px"}
					transition="1000ms"
					position={"relative"}
					boxSizing="border-box"
					p={["0", , , "0 0 5px 15px"]}
					w={"100%"}
					h="fit-content"
					color={"#f6f7f9"}
					fontWeight="400"
					fontSize={"2.8em"}
				>
					Education
				</Text>
				<Grid gridTemplateRows={"1fr"} gridTemplateColumns={"1fr 1fr"} autoFlow="column">
					<GridItem p="5px 10px 5px 0" borderRight={"1px solid rgba(246,247,249,0.3)"}>
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="400"
							fontSize={"1.2em"}
							ref={refOne}
							opacity={oneInView ? 1 : 0}
							right={oneInView ? 0 : "50px"}
							position="relative"
							transition={"1000ms"}
						>
							<Text fontWeight={"600"} color={"#f6f7f9"} m="0">
								Software Engineering Immersive Bootcamp - <i>General Assembly</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00ff00"} fontSize="0.7em">
								SEP 2022 - NOV 2022
							</Text>
							<List color={"#f6f7f9"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>Developed and deployed full-stack applications utilising various technologies learnt throughout the course.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>All major projects completed are detailed below</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					<GridItem p="5px 0 5px 10px">
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="400"
							fontSize={"1.2em"}
							ref={refTwo}
							opacity={twoInView ? 1 : 0}
							left={twoInView ? 0 : "50px"}
							position={"relative"}
							transition={"1000ms"}
						>
							<Text fontWeight={"600"} color={"#f6f7f9"} m="0">
								Bachelor of Aerospace Engineering - <i>UNSW</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00ff00"} fontSize="0.7em">
								JAN 2019 - JULY 2022
							</Text>
							<List color={"#f6f7f9"} fontSize="0.7em" spacing={"5px"}>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>WAM: 77.64 (3rd Year).</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
				</Grid>
			</Flex>
		</Flex>
	)
}
