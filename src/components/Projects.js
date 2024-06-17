import { Box, Button, Flex, grid, Image, Link, Text } from "@chakra-ui/react"
import { RiExternalLinkLine } from "react-icons/ri"
import { useInView } from "react-intersection-observer"

export default function Projects() {
	const { ref: containerRef, inView: containerInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	const { ref: quickchatRef, inView: quickchatInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	const { ref: gridfightRef, inView: gridfightInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	const { ref: crudRef, inView: crudInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})
	const { ref: tictactoeRef, inView: tictactoeInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})

	const openTab = (url) => {
		window.open(url, "_blank")
	}
	return (
		<Flex
			ref={containerRef}
			opacity={containerInView ? 1 : 0}
			transition={"opacity 800ms ease-out"}
			position={"relative"}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			id="projects"
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
				p="30px 30px 20px 30px"
				fontFamily={"Sono, sans-serif"}
				color="#0f1f11"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Text
					right={containerInView ? 0 : "50px"}
					transition="right 1000ms ease-out"
					position={"relative"}
					boxSizing="border-box"
					p={["0", , , "0 0 5px 15px"]}
					w={"100%"}
					h="fit-content"
					fontWeight="500"
					fontSize={"2.8em"}
				>
					Projects
				</Text>
				<Flex
					ref={quickchatRef}
					opacity={quickchatInView ? 1 : 0}
					right={quickchatInView ? 0 : "50px"}
					position={"relative"}
					transition={"1000ms"}
					transitionProperty={"opacity, right"}
					transitionTimingFunction={"ease-out"}
					p={[, , , "0 0 0 15px"]}
					m="10px 0 50px 0"
					h="fit-content"
					flexFlow={["column-reverse nowrap", , , "row nowrap"]}
				>
					<Image
						zIndex={"150"}
						border={"2px solid rgba(15,31,17,0.7)"}
						borderRadius={"15px"}
						src={"./images/quickchat.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "15px 0 15px 0"]}
						alignSelf="flex-start"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#00bb00"} fontSize={"1.7em"}>
							QuickChat
						</Text>
						<Text m="0 0 15px 0">
							<strong>Description:</strong> QuickChat is a full-stack single-page web application featuring video call and text messaging
							capabilities between users of the app, all friend requests, online statuses, messages, and incoming/outgoing calls are updated and
							displayed for all current users in real time. The messaging component also supports the sending of images/gifs and features a built
							in emoji picker.
						</Text>
						<Text m="0 0 15px 0">
							<strong>Technologies:</strong> The frontend was created using React/Vite employing Chakra-UI for styling, with Firebase acting as
							the backend, the backend to frontend communication functionality was written in JavaScript. Real time updates were implemented using
							Web Real-Time Communication (WebRTC) to store peer connection info into Firebase's RealtimeDB. User authentication was implemented
							through FirebaseAuth. All other non-sensitive data was stored in Firebase's FireStore. The app is deployed through Netlify.
						</Text>
						<Flex gap={"10px"}>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://quickchat-video.netlify.app")
								}}
							>
								<Text>Deployed Site</Text>
								<RiExternalLinkLine />
							</Button>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://github.com/mikey712712/Video-Chat-App")
								}}
							>
								<Text>Github Repository</Text>
								<RiExternalLinkLine />
							</Button>
						</Flex>
					</Box>
				</Flex>
				<Flex
					ref={gridfightRef}
					opacity={gridfightInView ? 1 : 0}
					right={gridfightInView ? 0 : "50px"}
					position={"relative"}
					transition={"1000ms"}
					transitionProperty={"opacity, right"}
					transitionTimingFunction={"ease-out"}
					p={[, , , "0 0 0 15px"]}
					m="0 0 50px 0"
					h="fit-content"
					flexFlow={["column-reverse nowrap", , , "row nowrap"]}
				>
					<Image
						zIndex={"150"}
						border={"2px solid rgba(15,31,17,0.7)"}
						borderRadius={"15px"}
						src={"./images/gridfight.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "15px 0 15px 0"]}
						alignSelf="flex-start"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#00bb00"} fontSize={"1.7em"}>
							Grid Fight
						</Text>
						<Text m="0 0 15px 0">
							<strong>Description:</strong> Grid Fight is a full-stack single-page web game where two players fight on a checkered board using
							different characters and abilities. Users can play against each other either locally or online.
						</Text>
						<Text m="0 0 15px 0">
							<strong>Technologies:</strong> The frontend of the game was created using ReactJS, using Chakra-UI for CSS. All of the data is
							stored as React states which stay synchronised during online play through the use of Firebase's Realtime Database. Users can create
							lobbies which generate collections in the database, their opponent can then join using the room ID to initiate the game. When it's a
							user's turn, their actions write which functions are called to the database, the opponent's client listens for changes in the
							database and runs the same functions on their end. The app is deployed through Netlify.
						</Text>
						<Flex gap={"10px"}>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://grid-fight-2022.netlify.app/")
								}}
							>
								<Text>Deployed Site</Text>
								<RiExternalLinkLine />
							</Button>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://github.com/mikey712712/Grid-Fight")
								}}
							>
								<Text>Github Repository</Text>
								<RiExternalLinkLine />
							</Button>
						</Flex>
					</Box>
				</Flex>
				<Flex
					ref={crudRef}
					opacity={crudInView ? 1 : 0}
					right={crudInView ? 0 : "50px"}
					position={"relative"}
					transition={"1000ms"}
					transitionProperty={"opacity, right"}
					transitionTimingFunction={"ease-out"}
					p={[, , , "0 0 0 15px"]}
					m={"0 0 50px 0"}
					h={"fit-content"}
					flexFlow={["column-reverse nowrap", , , "row nowrap"]}
				>
					<Image
						zIndex={"150"}
						border={"2px solid rgba(15,31,17,0.7)"}
						borderRadius={"15px"}
						src={"./images/projecttracker.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "15px 0 15px 0"]}
						alignSelf="flex-start"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#00bb00"} fontSize={"1.7em"}>
							Project Tracker
						</Text>
						<Text m="0 0 15px 0">
							<strong>Description:</strong> This is a full-stack multi-page CRUD app that allows users to track individual and collaborative work.
							Users are able to upload files and save notes to collaborate with their team or to stay on top of their own work. Deadlines are
							implemented to prevent missing a project's due date, and users are able to access information shared to them by any other users on
							their team.
						</Text>
						<Text m="0 0 15px 0">
							<strong>Technologies:</strong> The frontend was created using server rendered Embedded JavaScript (EJS) templates styled using
							Bootstap. The backend CRUD routes are set up using Node.js with Express.js, and communicates with MongoDB Atlas and Cloudinary for
							database storage. The app is deployed through Render.
						</Text>
						<Flex gap={"10px"}>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://project-tracker-f433.onrender.com/")
								}}
							>
								<Text>Deployed Site</Text>
								<RiExternalLinkLine />
							</Button>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://github.com/mikey712712/project-tracker")
								}}
							>
								<Text>Github Repository</Text>
								<RiExternalLinkLine />
							</Button>
						</Flex>
					</Box>
				</Flex>
				{/* <Flex
					ref={tictactoeRef}
					opacity={tictactoeInView ? 1 : 0}
					right={tictactoeInView ? 0 : "50px"}
					position={"relative"}
					transition={"1000ms"}
					transitionProperty={"opacity, right"}
					transitionTimingFunction={"ease-out"}
					p={[, , , "0 0 0 15px"]}
					m="0 0 50px 0"
					h="fit-content"
					flexFlow={["column-reverse nowrap", , , "row nowrap"]}
				>
					<Image
						zIndex={"150"}
						border={"2px solid rgba(15,31,17,0.7)"}
						borderRadius={"15px"}
						src={"./images/tictactoe.png"}
						w={["100%", , , "40%"]}
						h={[, , , "100%"]}
						objectFit={"fill"}
						filter={"brightness(85%) blur(0.4px)"}
						m={["15px 0 15px 0", , , "15px 0 15px 0"]}
						alignSelf="center"
					/>
					<Box p={[, , , "0 0 0 25px"]}>
						<Text color={"#00bb00"} fontSize={"1.7em"}>
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
						<Flex gap={"10px"}>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://mikey712712.github.io/Tic-Tac-Toe/")
								}}
							>
								<Text>Deployed Site</Text>
								<RiExternalLinkLine />
							</Button>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"space-between"}
								fontSize={"1em"}
								fontWeight={"500"}
								w="fit-content"
								p="20px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://github.com/mikey712712/Tic-Tac-Toe")
								}}
							>
								<Text>Github Repository</Text>
								<RiExternalLinkLine />
							</Button>
						</Flex>
					</Box>
				</Flex> */}
			</Flex>
		</Flex>
	)
}
