import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import { SlArrowDown } from "react-icons/sl"
import { useInView } from "react-intersection-observer"

export default function ScrollArrow() {
	const { ref, inView } = useInView({
		threshold: 1,
	})
	return (
		<Flex
			ref={ref}
			opacity={inView ? 1 : 0}
			cursor={inView ? "pointer" : "default"}
			left="0"
			color="white"
			position={"absolute"}
			bottom={inView ? ["-25px", "-25px", "-25px", "25px"] : "50px"}
			fontSize={"1.7em"}
			justify={"center"}
			w="100%"
			boxSizing="border-box"
			transition={"600ms"}
		>
			<SlArrowDown
				onClick={() => {
					window.scrollTo({
						top: window.innerHeight - 40,
						left: 0,
						behavior: "smooth",
					})
				}}
			/>
		</Flex>
	)
}
