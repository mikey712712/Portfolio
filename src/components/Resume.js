import { Button, Flex, Text } from "@chakra-ui/react"
import { RiExternalLinkLine } from "react-icons/ri"
import { useInView } from "react-intersection-observer"

export default function Resume() {
	const { ref: containerRef, inView: containerInView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})

	const openTab = () => {
		window.open("https://res.cloudinary.com/dyeslevyb/image/upload/v1718603686/MichaelHolton_lpsgky.pdf", "_blank")
	}
	return (
		<Flex
			ref={containerRef}
			transition={"opacity 1000ms ease-out, left 1000ms ease-out"}
			w={"100%"}
			h={["15%"]}
			alignItems={"center"}
			justify={"flex-start"}
			p={["25px", , , "0 15px 15px 0"]}
			position={"relative"}
			opacity={containerInView ? 1 : 0}
			left={containerInView ? 0 : "50px"}
		>
			<Button
				zIndex={"150"}
				bgColor={"#313130"}
				display={"flex"}
				justifyContent={"space-between"}
				fontSize={"1.1em"}
				fontWeight={"500"}
				w="fit-content"
				p="20px"
				gap={"10px"}
				color={"#f6f7f9"}
				_hover={{
					bgColor: "#00bb00",
					color: "#212428",
				}}
				onClick={openTab}
			>
				<Text>View My Resume</Text>
				<RiExternalLinkLine />
			</Button>
		</Flex>
	)
}
