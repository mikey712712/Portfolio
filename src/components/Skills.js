import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"
import { SiVite, SiJavascript, SiCss3, SiChakraui, SiBootstrap, SiPython, SiFlask, SiNodedotjs, SiGithub } from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { ImEmbed2 } from "react-icons/im"
export default function Skills() {
	return (
		<Flex position={"relative"} m="20px 0" w={"100%"} h={"fit-content"} boxSizing={"border-box"} p={[, , , "0 40px"]}>
			<Flex
				position={"relative"}
				flexFlow={["column nowrap", "column nowrap", "column nowrap", "row wrap"]}
				borderRadius={"5px"}
				border={[, , , "2px solid white"]}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px"
				fontFamily={"Sono, sans-serif"}
				color="white"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "1em"]}
			>
				<Text boxSizing="border-box" p={"0 0 0 15px"} w={"100%"} h="fit-content" fontWeight="400" fontSize={"2.8em"}>
					Skills
				</Text>
				<Flex
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					borderRight={["unset", "unset", "unset", "2px solid white"]}
					borderBottom={["2px solid white", "2px solid white", "2px solid white", "unset"]}
					w={["100%", "100%", "100%", "50%"]}
					h={["280px", , "fit-content"]}
				>
					<Text color={"#12cc53"} w="90%" fontSize={"1.5em"}>
						Frontend Design
					</Text>
					<Text marginBottom={"auto"} w="95%">
						Experienced in JavaScript, HTML, CSS and single-page/multi-page app development using JavaScript frameworks such as ReactJS/Vite.
						Passionate about interactive UI design, experienced with CSS libraries such as Chakra-UI and Bootstrap.
					</Text>
					<Flex h="40px" alignItems={"center"} color="#12cc53" marginTop={"10px"} fontSize={"1.9em"} gap="10px">
						<SiCss3 />
						<SiJavascript />
						<AiFillHtml5 fontSize={"1.3em"} />
						<FaReact />
						<SiVite />
						<SiChakraui />
						<SiBootstrap />
					</Flex>
				</Flex>
				<Flex
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					h={["230px", , "unset"]}
					w={["100%", "100%", "100%", "50%"]}
					borderBottom={["2px solid white", "2px solid white", "2px solid white", "unset"]}
				>
					<Text color={"#12cc53"} fontSize={"1.5em"}>
						Software Development
					</Text>
					<Text marginBottom={"auto"} w="95%">
						Strong understanding of various tools for functional and OOP including Python, Flask, Node.js, Express.js, EJS, MATLAB. Proficient in
						source control methodologies using git.
					</Text>
					<Flex h="40px" alignItems={"center"} color="#12cc53" marginTop={"10px"} fontSize={"1.9em"} gap="10px">
						<SiPython />
						<SiFlask />
						<SiNodedotjs />
						<ImEmbed2 />
						<SiGithub />
					</Flex>
				</Flex>
				<Flex
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					borderBottom={["2px solid white", "2px solid white", "2px solid white", "unset"]}
					borderRight={["unset", "unset", "unset", "2px solid white"]}
					borderTop={["unset", "unset", "unset", "2px solid white"]}
					w={["100%", "100%", "100%", "50%"]}
					h={["fit-content", "fit-content", "fit-content", "240px"]}
				>
					<Text color={"#12cc53"} fontSize={"1.5em"}>
						Database Management
					</Text>
				</Flex>
				<Flex
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					borderTop={["unset", "unset", "unset", "2px solid white"]}
					w={["100%", "100%", "100%", "50%"]}
					h={["fit-content", "fit-content", "fit-content", "240px"]}
				>
					<Text color={"#12cc53"} fontSize={"1.5em"}>
						Problem Solving
					</Text>
				</Flex>
			</Flex>
		</Flex>
	)
}
