import { Flex, Grid, GridItem, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import { useInView } from "react-intersection-observer"
export default function Experience() {
	const { ref: containerRef, inView: containerInView } = useInView({
		threshold: 0,
	})
	const { ref: refOne, inView: oneInView } = useInView({
		threshold: 0.2,
	})
	const { ref: refTwo, inView: twoInView } = useInView({
		threshold: 0.2,
	})
	const { ref: refThree, inView: threeInView } = useInView({
		threshold: 0.2,
	})
	return (
		<Flex
			ref={containerRef}
			opacity={containerInView ? 1 : 0}
			transition={"1000ms"}
			position={"relative"}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			id="experience"
			scrollMarginTop={"30px"}
			zIndex={"100"}
			bgColor={"#212428"}
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderTop={[, , , "1px solid #f6f7f9"]}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px 30px 30px 30px"
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
					Experience
				</Text>
				<Grid gridTemplateRows={"auto auto auto"} gridTemplateColumns={"1fr"} autoFlow="column">
					<GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(246,247,249,0.3)"]}>
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
								Software Engineering Instructor Associate - <i>General Assembly</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00ff00"} fontSize="0.7em">
								FEB 2023 - MAY 2023
							</Text>
							<List color={"#f6f7f9"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>
											Taught software development concepts to students of various skill levels, focusing on fundamental concepts and
											practical skills.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>
											Developed and updated course materials, assignments, and assessments to ensure effective instruction and alignment
											with industry standards.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>
											Collaborated with other instructors and program managers to deliver high-quality instruction and support for
											students.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>
											Provided feedback and guidance to students on their code and projects, using a supportive and growth-oriented
											approach.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>Demonstrated a strong commitment to student success and continuous improvement.</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					<GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(246,247,249,0.3)"]}>
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
							right={twoInView ? 0 : "50px"}
							position={"relative"}
							transition={"1000ms"}
						>
							<Text fontWeight={"600"} color={"#f6f7f9"} m="0">
								Team Lead - <i>Be Cool Refrigerated Courier Group</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00ff00"} fontSize="0.7em">
								DEC 2019 - JULY 2022
							</Text>
							<List color={"#f6f7f9"} fontSize="0.7em" spacing={"5px"}>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>Leading a team of 8-12 people, and stepping into floor management duties on occasion leading teams of 20+.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>
											Responsible for training new employees on process, procedure and compliance as well as establishing cultural values
											of the organisation.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>Worked closely with other supervisors and senior management to ensure the efficient delegation of tasks.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>Implemented new floor layouts to increase workflow.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>Demonstrated a strong commitment to student success and continuous improvement.</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					<GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(246,247,249,0.3)"]}>
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="400"
							fontSize={"1.2em"}
							ref={refThree}
							opacity={threeInView ? 1 : 0}
							right={threeInView ? 0 : "50px"}
							position={"relative"}
							transition={"1000ms"}
						>
							<Text fontWeight={"600"} color={"#f6f7f9"} m="0">
								Team Member - <i>Be Cool Refrigerated Courier Group</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00ff00"} fontSize="0.7em">
								OCT 2018 - DEC 2019
							</Text>
							<List color={"#f6f7f9"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00ff00"} />
										</Text>
										<Text>
											Contributed to the completion of tasks around the facility, working as both a store worker and forklift operator.
										</Text>
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
