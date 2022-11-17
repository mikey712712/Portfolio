import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Header({ tabWidth }) {
	return (
		<>
			{tabWidth > 1000 ? (
				<Flex
					w={"100%"}
					p={"15px"}
					fontSize={"1.1em"}
					fontWeight={"500"}
					boxSizing={"border-box"}
					position={"fixed"}
					alignItems={"center"}
					justifyContent="flex-start"
					color={"#ebebeb"}
					h="56px"
					bgGradient="linear(to-b, gray 0, #191414 75%)"
					className="header"
					zIndex={"300"}
				>
					<Flex
						_hover={{
							color: "#12cc53",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"0.4s"}
						onClick={() =>
							window.scrollTo({
								top: 0,
								left: 0,
								behavior: "smooth",
							})
						}
					>
						<Text color={"#12cc53"} marginRight={"5px"}>
							01.
						</Text>
						<Text>Back to Top</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#12cc53",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"0.4s"}
						onClick={() =>
							window.scrollTo({
								top: window.innerHeight - 40,
								left: 0,
								behavior: "smooth",
							})
						}
					>
						<Text color={"#12cc53"} marginRight={"5px"}>
							02.
						</Text>
						<Text>Skills</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#12cc53",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"0.4s"}
						onClick={() => {
							document.querySelector("#projects").scrollIntoView({
								behavior: "smooth",
							})
						}}
					>
						<Text color={"#12cc53"} marginRight={"5px"}>
							03.
						</Text>
						<Text>Projects</Text>
					</Flex>
					<Flex
						_hover={{
							color: "#12cc53",
						}}
						cursor={"pointer"}
						m="0 30px"
						transition={"0.4s"}
						onClick={() =>
							document.querySelector("#contact").scrollIntoView({
								behavior: "smooth",
							})
						}
					>
						<Text color={"#12cc53"} marginRight={"5px"}>
							04.
						</Text>
						<Text>Contact</Text>
					</Flex>
				</Flex>
			) : null}
		</>
	)
}
