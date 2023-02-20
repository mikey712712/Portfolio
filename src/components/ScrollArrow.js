import { Flex } from "@chakra-ui/react"
import { SlArrowDown } from "react-icons/sl"

export default function ScrollArrow({ scrollLevel }) {
	return (
		<Flex
			opacity={scrollLevel < 30 ? 1 : 0}
			cursor={scrollLevel < 30 ? "pointer" : "default"}
			left="0"
			color="white"
			position={"absolute"}
			bottom={scrollLevel < 30 ? ["-25px", "-25px", "-25px", "25px"] : "50px"}
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
	)
}
