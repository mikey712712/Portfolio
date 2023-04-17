import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { AiOutlineArrowRight } from "react-icons/ai"
import ScrollArrow from "./ScrollArrow"

export default function Welcome({ tabWidth, scrollLevel }) {
	const title = "Hi, I'm Michael Holton. Welcome to my portfolio."
	const [activeCard, setActiveCard] = useState(1)

	useEffect(() => {
		const welcome = document.querySelector(".welcome")
		const head = document.querySelector(".header")
		document.querySelectorAll(".welcome-char").forEach((e) => (e.style.textDecoration = "none"))
		welcome.style.transition = 0
		welcome.style.top = "-60px"
		welcome.style.opacity = 0
		if (tabWidth > 1000) {
			head.style.transition = 0
			head.style.top = "-60px"
			head.style.opacity = 0
		}

		setTimeout(() => {
			welcome.style.transition = "2000ms cubic-bezier(0.25, 1, 0.5, 1)"
			welcome.style.top = "0px"
			welcome.style.opacity = 1
		}, 200)
		setTimeout(() => {
			if (tabWidth > 1000) {
				head.style.transition = "2000ms cubic-bezier(0.25, 1, 0.5, 1)"
				head.style.top = "0px"
				head.style.opacity = 1
			}
		}, 1000)
		setTimeout(() => {
			let wordLength = 0
			for (let i = 0; i < 1; i++) {
				let letterIndex = 0
				setTimeout(() => {
					for (let node of document.querySelector(`.word${i}`).childNodes) {
						setTimeout(() => {
							node.style.textDecoration = "underline"
							node.style.textDecorationThickness = "4px"
							node.style.textDecorationColor = "#0ec24d"
						}, letterIndex * 100)
						setTimeout(() => {
							node.style.color = "#ebebeb"
						}, letterIndex * 100 + 450)
						letterIndex += 1
					}
				}, wordLength * 100)
				wordLength += document.querySelector(`.word${i}`).childNodes.length
			}
		}, 2900)
		setTimeout(() => {
			let wordLength = 0
			for (let i = 1; i < 4; i++) {
				let letterIndex = 0
				setTimeout(() => {
					for (let node of document.querySelector(`.word${i}`).childNodes) {
						setTimeout(() => {
							node.style.textDecoration = "underline"
							node.style.textDecorationThickness = "4px"
							node.style.textDecorationColor = "#0ec24d"
						}, letterIndex * 100)
						setTimeout(() => {
							node.style.color = "#ebebeb"
						}, letterIndex * 100 + 450)
						letterIndex += 1
					}
				}, wordLength * 100)
				wordLength += document.querySelector(`.word${i}`).childNodes.length
			}
		}, 3400)
		setTimeout(() => {
			let wordLength = 0
			for (let i = 4; i < 8; i++) {
				let letterIndex = 0
				setTimeout(() => {
					for (let node of document.querySelector(`.word${i}`).childNodes) {
						setTimeout(() => {
							node.style.textDecoration = "underline"
							node.style.textDecorationThickness = "4px"
							node.style.textDecorationColor = "#0ec24d"
						}, letterIndex * 100)
						setTimeout(() => {
							node.style.color = "#ebebeb"
						}, letterIndex * 100 + 450)
						letterIndex += 1
					}
				}, wordLength * 100)
				wordLength += document.querySelector(`.word${i}`).childNodes.length
			}
		}, 5300)
	}, [])

	const WelcomeMessage = ({ message, index }) => {
		return (
			<Flex className={`word${index}`} position={"relative"} marginRight={["14px", "16px", , "30px"]} flexFlow={"row nowrap"}>
				{message.split("").map((char, i) => {
					return (
						<Heading
							fontWeight={"300"}
							transition={"400ms"}
							color="#ebebeb"
							fontSize={["2em", "3em", "4em"]}
							cursor={"default"}
							className="welcome-char"
							fontFamily={"Sono, sans-serif"}
							key={i}
							textDecoration="underline"
							textDecorationThickness="4px"
							textDecorationColor="#0ec24d"
						>
							{char}
						</Heading>
					)
				})}
			</Flex>
		)
	}

	// const handleArrowClickLeft = () => {
	// 	if (activeCard > 1) {
	// 		setActiveCard(activeCard - 1)
	// 	}
	// }

	const handleArrowClick = () => {
		if (activeCard < 2) {
			setActiveCard(activeCard + 1)
		} else if (activeCard > 1) {
			setActiveCard(activeCard - 1)
		}
	}

	return (
		<Flex
			position={"relative"}
			w={"100%"}
			h={["fit-content", "fit-content", "fit-content", "100vh"]}
			minH={["unset", "unset", "unset", "800px"]}
			boxSizing={"border-box"}
			p={[, , , "56px 40px"]}
			className={"welcome"}
			marginTop={["15%", "15%", "15%", 0]}
		>
			<Flex
				position={"relative"}
				flexFlow={["column nowrap", "column nowrap", "column nowrap", "row nowrap"]}
				borderRadius={"10px"}
				w={"100%"}
				h={"100%"}
				justify="center"
			>
				<Flex
					alignItems={"center"}
					justify="center"
					boxSizing="border-box"
					w={["100%", "100%", "100%", "55%"]}
					p={["10px", "10px", "10px", "5px"]}
					h={["fit-content", "fit-content", "fit-content", "100%"]}
				>
					<Flex flexFlow={"row wrap"} justify="center">
						{title.split(" ").map((word, i) => (
							<WelcomeMessage key={i} message={word} index={i} />
						))}
					</Flex>
				</Flex>
				<Box
					fontFamily={"Sono, sans-serif"}
					w={["100%", "100%", "100%", "45%"]}
					boxSizing="border-box"
					position={"relative"}
					h={["400px", "400px", "400px", "100%"]}
				>
					<Box
						position={"absolute"}
						borderRadius="10px"
						left={["5%", , , "50%"]}
						bottom="23%"
						h={["300px", "260px", "280px", "50%"]}
						w={["90%", "90%", "90%", "450px"]}
						bgColor={activeCard === 1 ? "rgba(255,255,255,0.7)" : "gray"}
						transformOrigin="bottom"
						transform={[, , , "rotate(-6deg)"]}
						marginLeft={[, , , "-225px"]}
						zIndex={activeCard === 1 ? "100" : "0"}
						boxSizing="border-box"
						p="2px"
						transition="400ms"
						boxShadow={activeCard === 1 ? "-5px 5px 80px 0 gray" : ""}
					>
						<Box
							transition="400ms"
							bgColor="#191414"
							color={"#12cc53"}
							w="100%"
							h="100%"
							borderRadius="8px"
							opacity={activeCard === 1 ? "100%" : "0"}
							boxSizing={"border-box"}
							p="10px 20px 10px 10px"
							fontSize={["0.8em", , "1em"]}
						>
							<Heading fontFamily={"Sono, sans-serif"} fontWeight={"400"} marginBottom={"10px"}>
								Background
							</Heading>
							<Text fontSize={"1.2em"} color="white" fontWeight={"300"}>
								Hello! I'm Michael, a software engineer based in Sydney, NSW with experience in full-stack app development.
							</Text>
							<br />
							<Text fontSize={"1.2em"} color="white" fontWeight={"300"}>
								Since 2019 I've been studying Aerospace Engineering at The University of New South Wales while working in logistics.
							</Text>
						</Box>
					</Box>
					<Box
						position={"absolute"}
						borderRadius="10px"
						left={["5%", , , "50%"]}
						bottom="23%"
						h={["300px", "260px", "280px", "50%"]}
						w={["90%", "90%", "90%", "450px"]}
						bgColor={activeCard === 2 ? "rgba(255,255,255,0.7)" : "gray"}
						transformOrigin="bottom"
						transform={[, , , "rotate(6deg)"]}
						marginLeft={[, , , "-225px"]}
						zIndex={activeCard === 2 ? "100" : "0"}
						boxSizing="border-box"
						p="2px"
						transition="400ms"
						boxShadow={activeCard === 2 ? "-5px 5px 80px 0 gray" : ""}
					>
						<Box
							transition="400ms"
							bgColor="#191414"
							color={"#12cc53"}
							borderRadius="8px"
							w="100%"
							h="100%"
							opacity={activeCard === 2 ? "100%" : "0"}
							boxSizing={"border-box"}
							p="10px 20px 10px 10px"
							fontSize={["0.8em", , "1em"]}
						>
							<Heading fontFamily={"Sono, sans-serif"} fontWeight={"400"} marginBottom={"10px"}>
								Now
							</Heading>
							<Text fontSize={"1.2em"} color="white" fontWeight={"300"}>
								Having developed a passion for the tech industry and it's innovative potential, I transitioned my career focus towards software
								engineering, completed a 12 week software engineering bootcamp at General Assembly and am now eager to begin working in the
								industry!
							</Text>
						</Box>
					</Box>

					<Flex alignItems={"center"} flexFlow={"column"} w="100%" position={"absolute"} bottom={["5%", "5%", "5%", "10%"]}>
						<Flex marginBottom={"15px"}>
							<Box
								w={"8px"}
								h={"8px"}
								marginRight={"5px"}
								backgroundColor={activeCard === 1 ? "#12cc53" : null}
								borderRadius={"4px"}
								border={"1px solid white"}
								transition={"400ms"}
							></Box>
							<Box
								w={"8px"}
								h={"8px"}
								marginLeft={"5px"}
								backgroundColor={activeCard === 2 ? "#12cc53" : null}
								borderRadius={"4px"}
								border={"1px solid white"}
								transition={"400ms"}
							></Box>
						</Flex>
						{/* <Button
							h={"fit-content"}
							w="fit-content"
							boxSizing="border-box"
							p={"3px 10px"}
							fontSize={"1.3em"}
							onClick={handleArrowClickLeft}
							marginRight={"5px"}
							onTouchEnd={handleArrowClickLeft}
							_hover={{
								bgColor: "#12cc53",
							}}
							opacity={activeCard === 2 ? "1" : "0"}
							cursor={activeCard === 2 ? "pointer" : "default"}
							transition={"400ms"}
						>
							<AiOutlineArrowLeft />
						</Button> */}
						<Button
							h={"fit-content"}
							w="fit-content"
							boxSizing="border-box"
							p={"3px 10px"}
							fontSize={"1.3em"}
							onClick={handleArrowClick}
							onTouchEnd={handleArrowClick}
							_hover={{
								bgColor: "#12cc53",
							}}
							// opacity={activeCard === 1 ? "1" : "0"}
							// cursor={activeCard === 1 ? "pointer" : "default"}
							transition={"400ms"}
						>
							<Box transition={"600ms cubic-bezier(0.75, 1, 0.5, 1)"} transform={activeCard === 2 ? "rotate(-180deg)" : "unset"}>
								<AiOutlineArrowRight />
							</Box>
						</Button>
					</Flex>
				</Box>
			</Flex>
			<ScrollArrow scrollLevel={scrollLevel} />
		</Flex>
	)
}
