import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useEffect, useRef, useState } from "react"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { SlArrowDown } from "react-icons/sl"

export default function Welcome({ tabWidth, scrollLevel }) {
	const title = "Hi, I'm Michael Holton. Welcome to my portfolio."
	const [activeCard, setActiveCard] = useState(1)

	useEffect(() => {
		let wordLength = 0
		for (let i = 0; i < 8; i++) {
			let letterIndex = 0
			setTimeout(() => {
				for (let node of document.querySelector(`.word${i}`).childNodes) {
					setTimeout(() => (node.style.color = "#0ec24d"), letterIndex * 100)
					setTimeout(() => (node.style.color = "#ebebeb"), letterIndex * 100 + 450)
					letterIndex += 1
				}
			}, wordLength * 100)
			wordLength += document.querySelector(`.word${i}`).childNodes.length
		}
	}, [])

	const WelcomeMessage = ({ message, index }) => {
		return (
			<Flex className={`word${index}`} position={"relative"} marginRight={["14px", "16px", , "30px"]} flexFlow={"row nowrap"}>
				{message.split("").map((char, i) => {
					return (
						<Heading
							fontWeight={"400"}
							transition={"400ms"}
							color="#ebebeb"
							fontSize={["2.2em", "3em", "4em"]}
							cursor={"default"}
							className="welcome-char"
							fontFamily={"Sono, sans-serif"}
							key={i}
						>
							{char}
						</Heading>
					)
				})}
			</Flex>
		)
	}

	const handleArrowClickLeft = () => {
		if (activeCard > 1) {
			setActiveCard(activeCard - 1)
		}
	}

	const handleArrowClickRight = () => {
		if (activeCard < 2) {
			setActiveCard(activeCard + 1)
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
					h={["500px", "500px", "500px", "100%"]}
				>
					<Box
						position={"absolute"}
						borderRadius="10px"
						left={["5%", , , "50%"]}
						bottom="23%"
						h={["300px", "260px", "50%"]}
						w={["90%", "90%", "90%", "450px"]}
						bgColor={activeCard === 1 ? "rgba(255,255,255,0.7)" : "gray"}
						transformOrigin="bottom"
						transform={[, , , "rotate(-6deg)"]}
						marginLeft={[, , , "-225px"]}
						zIndex={activeCard === 1 ? "100" : "0"}
						boxSizing="border-box"
						p="4px"
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
							p="10px"
							fontSize={["0.8em", , "1em"]}
						>
							<Heading fontFamily={"Sono, sans-serif"} fontWeight={"500"} marginBottom={"10px"}>
								Background
							</Heading>
							<Text fontSize={"1.2em"} color="white" fontWeight={"400"}>
								Hello! I'm Michael, a software engineer based in Sydney, NSW with experience in full-stack app development.
							</Text>
							<br />
							<Text fontSize={"1.2em"} color="white" fontWeight={"400"}>
								Since 2019 I've been attending The University of New South Wales studying Aerospace Engineering while working in logistics.
							</Text>
						</Box>
					</Box>
					<Box
						position={"absolute"}
						borderRadius="10px"
						left={["5%", , , "50%"]}
						bottom="23%"
						h={["300px", "260px", "50%"]}
						w={["90%", "90%", "90%", "450px"]}
						bgColor={activeCard === 2 ? "rgba(255,255,255,0.7)" : "gray"}
						transformOrigin="bottom"
						transform={[, , , "rotate(6deg)"]}
						marginLeft={[, , , "-225px"]}
						zIndex={activeCard === 2 ? "100" : "0"}
						boxSizing="border-box"
						p="4px"
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
							p="10px"
							fontSize={["0.8em", , "1em"]}
						>
							<Heading fontFamily={"Sono, sans-serif"} fontWeight={"500"} marginBottom={"10px"}>
								Now
							</Heading>
							<Text fontSize={"1.2em"} color="white" fontWeight={"400"}>
								Having developed a passion for the tech industry and it's innovative potential, I transitioned my career focus towards software
								engineering, completed a 12 week software engineering bootcamp at General Assembly and am now eager to begin working in the
								industry!
							</Text>
						</Box>
					</Box>

					<Flex justify={"center"} w="100%" position={"absolute"} bottom="10%">
						<Button
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
						</Button>
						<Button
							h={"fit-content"}
							w="fit-content"
							boxSizing="border-box"
							p={"3px 10px"}
							fontSize={"1.3em"}
							onClick={handleArrowClickRight}
							onTouchEnd={handleArrowClickRight}
							marginLeft={"5px"}
							_hover={{
								bgColor: "#12cc53",
							}}
							opacity={activeCard === 1 ? "1" : "0"}
							cursor={activeCard === 1 ? "pointer" : "default"}
							transition={"400ms"}
						>
							<AiOutlineArrowRight />
						</Button>
					</Flex>
				</Box>
			</Flex>
			{tabWidth > 1000 ? (
				<>
					<Flex
						opacity={scrollLevel < 30 ? 1 : 0}
						cursor={scrollLevel < 30 ? "pointer" : "default"}
						left="0"
						color="white"
						position={"absolute"}
						bottom={scrollLevel < 30 ? "15px" : "40px"}
						fontSize={"1.7em"}
						justify={"center"}
						w="100%"
						boxSizing="border-box"
						transition={"600ms"}
					>
						<SlArrowDown
							onClick={() => {
								if (scrollLevel < 30) {
									window.scrollTo({
										top: window.innerHeight - 40,
										left: 0,
										behavior: "smooth",
									})
								}
							}}
						/>
					</Flex>
				</>
			) : (
				<>
					<Flex
						opacity={scrollLevel < 30 ? 1 : 0}
						cursor={scrollLevel < 30 ? "pointer" : "default"}
						left="0"
						color="white"
						position={"absolute"}
						bottom={scrollLevel < 30 ? "-35px" : "-20px"}
						fontSize={"1.7em"}
						justify={"center"}
						w="100%"
						boxSizing="border-box"
						transition={"600ms"}
					>
						<SlArrowDown
							onClick={() => {
								if (scrollLevel < 30) {
									window.scrollTo({
										top: window.innerHeight - 40,
										left: 0,
										behavior: "smooth",
									})
								}
							}}
						/>
					</Flex>
				</>
			)}
		</Flex>
	)
}
