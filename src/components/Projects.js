import { Box, Flex, Image, Link, Text } from "@chakra-ui/react"

export default function Projects({ scrollLevel }) {
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
			id="projects"
			scrollMarginTop={"30px"}
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
					Projects
				</Text>
				<Flex p={[, , , "0 0 0 15px"]} m="0 0 65px 0" h="fit-content" flexFlow={["column-reverse nowrap", , , "row nowrap"]}>
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/quickchat.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "0"]}
						alignSelf="center"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							QuickChat
						</Text>
						<Text m="0 0 15px 0">
							<strong>Description:</strong> QuickChat is a full-stack single-page web application created over a time span of 4 days through the
							collaboration of one of my peers and myself. It features video call and text messaging capabilities between users of the app, all
							friend requests, online statuses, messages, and incoming/outgoing calls are updated and displayed for all current users in real
							time. The messaging component also supports the sending of images/gifs and features a built in emoji picker.
						</Text>
						<Text m="0 0 15px 0">
							<strong>Technologies:</strong> The frontend was created using React/Vite employing Chakra-UI for styling, with Firebase acting as
							the backend, the backend to frontend communication functionality was written in JavaScript. Real time updates were implemented using
							Web Real-Time Communication (WebRTC) to store peer connection info into Firebase's RealtimeDB. User authentication was implemented
							through FirebaseAuth. All other non-sensitive data was stored in Firebase's FireStore. The app is deployed through Netlify.
						</Text>
						<Text>
							<strong>Deployed Site: </strong>
							<Link
								_hover={{
									color: "#12cc53",
								}}
								href="https://quickchat-video.netlify.app"
								isExternal
							>
								https://quickchat-video.netlify.app
							</Link>
						</Text>
						<Text>
							<strong>Github Repository: </strong>
							<Link
								_hover={{
									color: "#12cc53",
								}}
								href="https://github.com/mikey712712/Video-Chat-App"
								isExternal
							>
								https://github.com/mikey712712/Video-Chat-App
							</Link>
						</Text>
					</Box>
				</Flex>
				<Flex p={[, , , "0 0 0 15px"]} m="0 0 65px 0" h="fit-content" flexFlow={["column-reverse nowrap", , , "row nowrap"]}>
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/projecttracker.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "0"]}
						alignSelf="center"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							CRUD Project Tracker
						</Text>
						<Text m="0 0 15px 0">
							<strong>Description:</strong> This is a full-stack multi-page application I created in a 4 day timeframe that allows users to track
							individual and collaborative work. Users are able to upload files and save notes to collaborate with their team or to stay on top of
							their own work. Deadlines are implemented to prevent missing a project's due date, and users are able to access information shared
							to them by any other users on their team.
						</Text>
						<Text m="0 0 15px 0">
							<strong>Technologies:</strong> The frontend was created using server rendered Embedded JavaScript (EJS) templates styled using
							Bootstap. The backend CRUD routes are set up using Node.js with Express.js, and communicates with MongoDB Atlas and Cloudinary for
							database storage. The app is deployed through Heroku.
						</Text>
						<Text>
							<strong>Deployed Site: </strong>
							<Link
								_hover={{
									color: "#12cc53",
								}}
								href="https://obscure-ocean-78390.herokuapp.com/"
								isExternal
							>
								https://obscure-ocean-78390.herokuapp.com/
							</Link>
						</Text>
						<Text>
							<strong>Github Repository: </strong>
							<Link
								_hover={{
									color: "#12cc53",
								}}
								href="https://github.com/mikey712712/project-tracker"
								isExternal
							>
								https://github.com/mikey712712/project-tracker
							</Link>
						</Text>
					</Box>
				</Flex>
				<Flex p={[, , , "0 0 0 15px"]} m="0 0 65px 0" h="fit-content" flexFlow={["column-reverse nowrap", , , "row nowrap"]}>
					<Image
						border={"2px solid rgba(255,255,255,0.7)"}
						borderRadius={"15px"}
						src={"./images/tictactoe.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "0"]}
						alignSelf="center"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#12cc53"} fontSize={"1.7em"}>
							Tic-Tac-Toe/Connect-4
						</Text>
						<Text m="0 0 15px 0">
							<strong>Description:</strong> This is a front-end web application which features the widely recognised board games Tic-Tac-Toe and
							Connect-4, allowing the user to play against another person locally or an AI designed to prevent the player from winning while
							setting up winning combinations of it's own. Tic-Tac-Toe also features a variable grid size up to 5x5 to make the game more
							interesting.
						</Text>
						<Text m="0 0 15px 0">
							<strong>Technologies:</strong> This app was created using HTML5, CSS3 and JavaScript and deployed through Github Pages.
						</Text>
						<Text>
							<strong>Deployed Site: </strong>
							<Link
								_hover={{
									color: "#12cc53",
								}}
								href="https://mikey712712.github.io/Tic-Tac-Toe/"
								isExternal
							>
								https://mikey712712.github.io/Tic-Tac-Toe/
							</Link>
						</Text>
						<Text>
							<strong>Github Repository: </strong>
							<Link
								_hover={{
									color: "#12cc53",
								}}
								href="https://github.com/mikey712712/Tic-Tac-Toe"
								isExternal
							>
								https://github.com/mikey712712/Tic-Tac-Toe
							</Link>
						</Text>
					</Box>
				</Flex>
			</Flex>
		</Flex>
	)
}
