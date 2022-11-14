import { Box, Flex, Text } from "@chakra-ui/react"

export default function Projects() {
	return (
		<Flex position={"relative"} m="20px 0" w={"100%"} h={["fit-content", "fit-content", "fit-content", "500px"]} boxSizing={"border-box"} p={"30px 40px"}>
			<Flex
				position={"relative"}
				flexFlow={["column nowrap", "column nowrap", "column nowrap", "row nowrap"]}
				borderRadius={"5px"}
				border={"2px solid white"}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px"
				fontFamily={"Sono, sans-serif"}
			>
				<Text fontWeight="400" fontSize={"2.8em"} color="white">
					Projects
				</Text>
			</Flex>
		</Flex>
	)
}
