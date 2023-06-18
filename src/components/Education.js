import { Flex, Grid, GridItem, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import { useInView } from "react-intersection-observer"
export default function Education() {
	const { ref: containerRef, inView: containerInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	const { ref: refOne, inView: oneInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	const { ref: refTwo, inView: twoInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})

	return (
		<Flex
			ref={containerRef}
			opacity={containerInView ? 1 : 0}
			transition={"opacity 800ms ease-out"}
			position={"relative"}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			id="education"
			zIndex={"100"}
			bgColor={"#e3f2e6"}
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderTop={[, , , "1px solid #0f1f11"]}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p={["30px 30px 30px 30px", , , "30px 30px 0 0"]}
				fontFamily={"Sono, sans-serif"}
				// color="white"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Text
					left={containerInView ? 0 : "50px"}
					transition="left 1000ms ease-out"
					position={"relative"}
					boxSizing="border-box"
					p={["0", , , "0 0 5px 0px"]}
					w={"100%"}
					h="fit-content"
					color={"#0f1f11"}
					fontWeight="500"
					fontSize={"2.8em"}
				>
					Education
				</Text>
				<Grid gridTemplateRows={"auto auto"} gridTemplateColumns={"1fr"} autoFlow="column">
					<GridItem p="5px 10px 5px 0">
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 5px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="500"
							fontSize={"1.15em"}
							ref={refOne}
							opacity={oneInView ? 1 : 0}
							left={oneInView ? 0 : "50px"}
							position="relative"
							transition={"1000ms"}
							transitionTimingFunction={"ease-out"}
							transitionProperty={"opacity, left"}
						>
							<Text fontWeight={"600"} color={"#0f1f11"} m="0">
								SE Immersive Bootcamp - <i>General Assembly</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00bb00"} fontSize="0.7em">
								SEP 2022 - NOV 2022
							</Text>
							<List color={"#0f1f11"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Developed and deployed full-stack applications utilising various technologies learnt throughout the course.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>All major projects completed are detailed below</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					<GridItem p="5px 10px 5px 0">
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 5px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="500"
							fontSize={"1.15em"}
							ref={refTwo}
							opacity={twoInView ? 1 : 0}
							left={twoInView ? 0 : "50px"}
							position={"relative"}
							transition={"1000ms"}
							transitionTimingFunction={"ease-out"}
							transitionProperty={"opacity, left"}
						>
							<Text fontWeight={"600"} color={"#0f1f11"} m="0">
								Bachelor of Aerospace Engineering - <i>UNSW</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00bb00"} fontSize="0.7em">
								JAN 2019 - JULY 2022
							</Text>
							<List color={"#0f1f11"} fontSize="0.7em" spacing={"5px"}>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
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
