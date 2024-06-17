import { Flex, Grid, GridItem, List, ListIcon, ListItem, Text } from "@chakra-ui/react"
import { BsCheck } from "react-icons/bs"
import { useInView } from "react-intersection-observer"
export default function Experience() {
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
	const { ref: refThree, inView: threeInView } = useInView({
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
			id="experience"
			scrollMarginTop={"30px"}
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
				p="30px 30px 30px 30px"
				fontFamily={"Sono, sans-serif"}
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Text
					right={containerInView ? 0 : "50px"}
					transition="right 1000ms ease-out"
					position={"relative"}
					boxSizing="border-box"
					p={["0", , , "0 0 5px 10px"]}
					w={"100%"}
					h="fit-content"
					color={"#0f1f11"}
					fontWeight="500"
					fontSize={"2.8em"}
				>
					Experience
				</Text>
				<Grid gridTemplateRows={"auto auto auto"} gridTemplateColumns={"1fr"} autoFlow="column">
					<GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(15,31,17,0.3)"]}>
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="500"
							fontSize={"1.15em"}
							ref={refOne}
							opacity={oneInView ? 1 : 0}
							right={oneInView ? 0 : "50px"}
							position="relative"
							transition={"1000ms"}
							transitionTimingFunction={"ease-out"}
							transitionProperty={"right, opacity"}
						>
							<Text fontWeight={"600"} color={"#0f1f11"} m="0">
								Solutions Consultant - <i>Holocentric</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00bb00"} fontSize="0.7em">
								AUG 2023 - PRESENT
							</Text>
							<List color={"#0f1f11"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>
											Designed, developed, and implemented web applications using Agile methodologies, adhering to best practices in
											coding standards, security, and performance optimization.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>
											Created/Updated client configurations in the company’s tool using its proprietary programming language to create
											Scripts/Classes/Data Models & Schemas which provided the content for their web applications.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>
											Provided support during configuration releases into production at Westpac Banking Corporation, and was subsequently
											requested to be the primary contact during content releases.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>
											Provided technical support and troubleshooting expertise to resolve various issues, ensuring minimal disruption to
											client operations.
										</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Documented and improved various day to day processes undertaken by the solutions team.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>
											Conducted meetings to understand client requirements and business objectives in order to deliver customised software
											solutions to fit business needs.
										</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					<GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(15,31,17,0.3)"]}>
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="500"
							fontSize={"1.15em"}
							ref={refOne}
							opacity={oneInView ? 1 : 0}
							right={oneInView ? 0 : "50px"}
							position="relative"
							transition={"1000ms"}
							transitionTimingFunction={"ease-out"}
							transitionProperty={"right, opacity"}
						>
							<Text fontWeight={"600"} color={"#0f1f11"} m="0">
								Software Engineering Instructor Associate - <i>General Assembly</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00bb00"} fontSize="0.7em">
								FEB 2023 - MAY 2023
							</Text>
							<List color={"#0f1f11"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
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
											<BsCheck color={"00bb00"} />
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
											<BsCheck color={"00bb00"} />
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
											<BsCheck color={"00bb00"} />
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
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Demonstrated a strong commitment to student success and continuous improvement.</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					{/* <GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(15,31,17,0.3)"]}>
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="500"
							fontSize={"1.15em"}
							ref={refTwo}
							opacity={twoInView ? 1 : 0}
							right={twoInView ? 0 : "50px"}
							position={"relative"}
							transition={"1000ms"}
							transitionTimingFunction={"ease-out"}
							transitionProperty={"right, opacity"}
						>
							<Text fontWeight={"600"} color={"#0f1f11"} m="0">
								Team Lead - <i>Be Cool Refrigerated Courier Group</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00bb00"} fontSize="0.7em">
								DEC 2019 - JULY 2022
							</Text>
							<List color={"#0f1f11"} fontSize="0.7em" spacing={"5px"}>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Leading a team of 8-12 people, and stepping into floor management duties on occasion leading teams of 20+.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
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
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Worked closely with other supervisors and senior management to ensure the efficient delegation of tasks.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Implemented new floor layouts to increase workflow.</Text>
									</Flex>
								</ListItem>
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>Demonstrated a strong commitment to student success and continuous improvement.</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem>
					<GridItem p="5px 15px 5px 0" borderRight={["unset", , , "1px solid rgba(15,31,17,0.3)"]}>
						<Flex
							flexFlow={"column nowrap"}
							boxSizing="border-box"
							p={["0", , , "0 0 15px 15px"]}
							w={"100%"}
							h="fit-content"
							fontWeight="500"
							fontSize={"1.15em"}
							ref={refThree}
							opacity={threeInView ? 1 : 0}
							right={threeInView ? 0 : "50px"}
							position={"relative"}
							transition={"1000ms"}
							transitionTimingFunction={"ease-out"}
							transitionProperty={"right, opacity"}
						>
							<Text fontWeight={"600"} color={"#0f1f11"} m="0">
								Team Member - <i>Be Cool Refrigerated Courier Group</i>
							</Text>
							<Text m="0 0 5px 0" color={"#00bb00"} fontSize="0.7em">
								OCT 2018 - DEC 2019
							</Text>
							<List color={"#0f1f11"} fontSize="0.7em" spacing="5px">
								<ListItem>
									<Flex alignItems={"center"} gap="7px">
										<Text fontSize="1.2em">
											<BsCheck color={"00bb00"} />
										</Text>
										<Text>
											Contributed to the completion of tasks around the facility, working as both a store worker and forklift operator.
										</Text>
									</Flex>
								</ListItem>
							</List>
						</Flex>
					</GridItem> */}
				</Grid>
			</Flex>
		</Flex>
	)
}
