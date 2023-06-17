import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { SlArrowDown } from "react-icons/sl"
import { useInView } from "react-intersection-observer"

export default function ScrollArrow() {
	const [scroll, setScroll] = useState(0)

	useEffect(() => {
		document.addEventListener("scroll", () => {
			setScroll(window.scrollY)
		})
	}, [])

	return (
		<Flex
			opacity={scroll < 100 ? 1 : 0}
			cursor={scroll < 100 ? "pointer" : "default"}
			left="0"
			color="#f6f7f9"
			position={"absolute"}
			bottom={scroll < 100 ? ["-25px", "-25px", "-25px", "25px"] : "50px"}
			fontSize={"1.7em"}
			justify={"center"}
			w="100%"
			boxSizing="border-box"
			transition={"opacity 600ms, bottom 600ms"}
			zIndex={"300"}
			_hover={{
				opacity: "0.6",
			}}
			id={"arrow-down"}
		>
			<SlArrowDown
				onClick={() => {
					window.scrollTo({
						top: document.querySelector("#skills").getBoundingClientRect().top + window.pageYOffset - 70,
						behavior: "smooth",
					})
				}}
			/>
		</Flex>
	)
}
