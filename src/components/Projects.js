import { Box, Flex, Image, Text } from "@chakra-ui/react"

export default function Projects({ scrollLevel }) {
	return (
		<Flex
			opacity={scrollLevel > window.innerHeight * 1 ? 1 : 0}
			top={scrollLevel > window.innerHeight * 1 ? "80px" : "0"}
			transition={"800ms"}
			position={"relative"}
			m="150px 0"
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
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
				fontSize={["0.8em", , , "1.05em"]}
			>
				<Text boxSizing="border-box" p={"0 0 15px 15px"} w={"100%"} h="fit-content" fontWeight="400" fontSize={"2.8em"}>
					Projects
				</Text>
				<Flex p={[, , , "0 0 0 15px"]} m="0 0 65px 0" h="300px" flexFlow={["column nowrap", , "row nowrap"]}>
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/quickchat.png"}
						w={["100%", , "30%"]}
						h={[, , , "100%"]}
						objectFit={"cover"}
						filter={"brightness(70%) blur(1px)"}
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							QuickChat
						</Text>
						<Text m={[, , , "0 0 25px 0"]}>
							<strong>Description:</strong> QuickChat is a full-stack single-page web application created over a time span of 4 days through the
							collaboration of one of my peers and myself. It features video call and text messaging capabilities between users of the app, all
							friend requests, online statuses, messages, and incoming/outgoing calls are updated and displayed for all current users in real
							time. The messaging component also supports the sending of images/gifs and features a built in emoji picker.
						</Text>
						<Text>
							<strong>Technologies:</strong> The frontend was created using React/Vite employing Chakra-UI for styling, with Firebase acting as
							the backend, the backend to frontend communication functionality was written in JavaScript. The real time updating was achieved
							using Web Real-Time Communication (WebRTC) to store peer connection info into Firebase's RealtimeDB. User authentication was
							implemented through FirebaseAuth. All other non-sensitive data was stored in Firebase's FireStore.
						</Text>
					</Box>
				</Flex>
				<Flex p={[, , , "0 0 0 15px"]} m="0 0 65px 0" h="300px" flexFlow={["column nowrap", , "row nowrap"]}>
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/projecttracker.png"}
						w={["100%", , "30%"]}
						h={[, , , "100%"]}
						objectFit={"cover"}
						filter={"brightness(70%) blur(1px)"}
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							Project Tracker
						</Text>
						<Text>wowowowowoo</Text>
					</Box>
				</Flex>
				<Flex p={[, , , "0 0 0 15px"]} h="300px" flexFlow={["column nowrap", , "row nowrap"]}>
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/tictactoe.png"}
						w={["100%", , "30%"]}
						h={[, , , "100%"]}
						objectFit={"cover"}
						filter={"brightness(70%) blur(1px)"}
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							Tic-Tac-Toe/Connect 4
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}
