import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function Projects() {
	return (
		<Flex position={"relative"} m="150px 0" w={"100%"} h={"fit-content"} boxSizing={"border-box"}>
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
				fontSize={["0.8em", , , "1.05em"]}
			>
				<Text boxSizing="border-box" p={"0 0 15px 15px"} w={"100%"} h="fit-content" fontWeight="400" fontSize={"2.8em"}>
					Projects
				</Text>
				<Flex p={"0 0 0 15px"} m="0 0 65px 0" h="300px">
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/quickchat.png"}
						w="30%"
						h="100%"
						objectFit={"cover"}
						filter={"brightness(70%) blur(1px)"}
					/>
					<Box p={"0 0 0 25px"}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							QuickChat
						</Text>
					</Box>
				</Flex>
				<Flex p={"0 0 0 15px"} m="0 0 65px 0" h="300px">
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/projecttracker.png"}
						w="30%"
						h="100%"
						objectFit={"cover"}
						filter={"brightness(70%) blur(1px)"}
					/>
					<Box p={"0 0 0 25px"}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							Project Tracker
						</Text>
						<Text>wowowowowoo</Text>
					</Box>
				</Flex>
				<Flex p={"0 0 0 15px"} h="300px">
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/tictactoe.png"}
						w="30%"
						h="100%"
						objectFit={"cover"}
						filter={"brightness(70%) blur(1px)"}
					/>
					<Box p={"0 0 0 25px"}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							Tic-Tac-Toe/Connect 4
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}
