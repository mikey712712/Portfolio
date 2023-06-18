import { Button, Checkbox, Flex, Input, TagLabel, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Header({ tabWidth }) {
	// const [cursorTrail, setCursorTrail] = useState(true)

	// useEffect(() => {
	// 	console.log(cursorTrail)
	// 	const cursorRain = (e) => {
	// 		if (cursorTrail) {
	// 			const pixel = document.createElement("div")
	// 			pixel.className = "pixel"
	// 			document.body.appendChild(pixel)
	// 			const transitionTime = `${4000 + Math.floor(Math.random() * 4000)}ms`
	// 			pixel.style.position = "fixed"
	// 			pixel.style.pointerEvents = "none"
	// 			pixel.style.left = e.clientX + "px"
	// 			pixel.style.top = e.clientY + "px"
	// 			pixel.style.width = "1px"
	// 			pixel.style.height = Math.ceil(Math.random() * 7) + "px"
	// 			pixel.style.opacity = String(0.3 + Math.random() * 0.3).slice(0, 3)
	// 			pixel.style.zIndex = "50"
	// 			pixel.style.backgroundColor = "#0ec24d"
	// 			pixel.style.transition = transitionTime
	// 			pixel.style.borderRadius = "2px"

	// 			setTimeout(() => {
	// 				pixel.style.top = window.screen.height + "px"
	// 			}, 50)
	// 			setTimeout(() => {
	// 				pixel.remove()
	// 			}, Number(transitionTime.slice(0, 4)) + 50)
	// 		}
	// 	}
	// 	if (cursorTrail) {
	// 		document.addEventListener("mousemove", cursorRain)
	// 	}
	// 	return () => {
	// 		document.removeEventListener("mousemove", cursorRain)
	// 	}
	// }, [cursorTrail])

	// const handleCheckBox = (e) => {
	// 	console.log(e.target.checked)
	// 	if (e.target.checked) {
	// 		setCursorTrail(true)
	// 	} else {
	// 		setCursorTrail(false)
	// 	}
	// }

	return (
		<>
			{tabWidth > 1000 ? (
				<Flex
					w={"100%"}
					// maxW={"1600px"}
					p={"15px"}
					fontSize={"1em"}
					fontWeight={"500"}
					boxSizing={"border-box"}
					position={"fixed"}
					alignItems={"center"}
					justifyContent="center"
					color={"#ebebeb"}
					h="56px"
					bgColor="rgba(33,36,40,0.8)"
					backdropFilter={"blur(4px)"}
					className="header"
					zIndex={"300"}
					left={"0"}
					transitionProperty={"top, opacity"}
					transitionTimingFunction={"ease-out"}
					// boxShadow="-5px 5px 80px 0 #191414"
				>
					{/* <Flex cursor="pointer" position="absolute" left="25px">
						<Checkbox
							type="radio"
							onChange={handleCheckBox}
							defaultChecked="true"
							iconColor={"tech"}
							colorScheme={"tech"}
							h="15px"
							color={"#ebebeb"}
							marginRight={"5px"}
						>
							<Text fontSize={"0.8em"}>Cursor Trail</Text>
						</Checkbox>
					</Flex> */}
					<Flex
						_hover={{
							color: "#00ff00",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"color 0.4s"}
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth",
							})
						}
					>
						<Text color={"#00ff00"} marginRight={"5px"}>
							01.
						</Text>
						<Text>Back to Top</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#00ff00",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"color 0.4s"}
						onClick={() => {
							window.scrollTo({
								top: document.querySelector("#skills").getBoundingClientRect().top + window.pageYOffset - 70,
								behavior: "smooth",
							})
						}}
					>
						<Text color={"#00ff00"} marginRight={"5px"}>
							02.
						</Text>
						<Text>Skills</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#00ff00",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"color 0.4s"}
						onClick={() => {
							window.scrollTo({
								top: document.querySelector("#experience").getBoundingClientRect().top + window.pageYOffset - 60,
								behavior: "smooth",
							})
						}}
					>
						<Text color={"#00ff00"} marginRight={"5px"}>
							03.
						</Text>
						<Text>Experience</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#00ff00",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"color 0.4s"}
						onClick={() => {
							window.scrollTo({
								top: document.querySelector("#projects").getBoundingClientRect().top + window.pageYOffset - 60,
								behavior: "smooth",
							})
						}}
					>
						<Text color={"#00ff00"} marginRight={"5px"}>
							04.
						</Text>
						<Text>Projects</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#00ff00",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"color 0.4s"}
						onClick={() =>
							document.querySelector("#contact").scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						<Text color={"#00ff00"} marginRight={"5px"}>
							05.
						</Text>
						<Text>Contact</Text>
					</Flex>
				</Flex>
			) : null}
		</>
	)
}
