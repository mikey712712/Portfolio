import { Box, Divider, Flex, Text } from "@chakra-ui/react"
import { FaReact, FaWrench } from "react-icons/fa"
import {
	SiVite,
	SiJavascript,
	SiCss3,
	SiChakraui,
	SiBootstrap,
	SiPython,
	SiFlask,
	SiNodedotjs,
	SiGithub,
	SiPostgresql,
	SiFirebase,
	SiMongodb,
} from "react-icons/si"
import { AiFillHtml5 } from "react-icons/ai"
import { ImEmbed2 } from "react-icons/im"
import { TbMathFunction } from "react-icons/tb"
import { useInView } from "react-intersection-observer"
export default function Skills() {
	const { ref, inView } = useInView({
		threshold: 0.3,
		triggerOnce: true,
	})
	return (
		<Flex
			ref={ref}
			opacity={inView ? 1 : 0}
			margin={["10px 0", , , "40px 0 140px 0"]}
			// top={inView ? "80px" : "0"}
			zIndex={"100"}
			position={"relative"}
			bgColor={"#e3f2e6"}
			transition={"opacity 800ms ease-out"}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			p={[, , , "0 40px"]}
			id="skills"
		>
			<Flex
				position={"relative"}
				flexFlow={["column nowrap", "column nowrap", "column nowrap", "row wrap"]}
				borderRadius={"8px"}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px 30px 20px 30px"
				fontFamily={"Sono, sans-serif"}
				color="#0f1f11"
				justify={"flex-start"}
				alignItems={"stretch"}
				bgColor={"rgba(15,31,17,0.05)"}
				fontSize={["0.8em", , , "1.05em"]}
			>
				<Text boxSizing="border-box" p={"0 0 0 15px"} w={"100%"} h="fit-content" fontWeight="500" fontSize={"2.6em"}>
					Skills
				</Text>
				<Flex
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					borderRight={["unset", "unset", "unset", "1px solid rgba(15,31,17,0.4)"]}
					borderBottom={["1px solid rgba(15,31,17,0.4)", "1px solid rgba(15,31,17,0.4)", "1px solid rgba(15,31,17,0.4)", "unset"]}
					w={["100%", "100%", "100%", "50%"]}
				>
					<Text color={"#00bb00"} w="90%" fontSize={"1.4em"} fontWeight={"500"}>
						Frontend Design
					</Text>
					<Text marginBottom={"auto"} w="95%">
						Experienced in JavaScript, HTML, CSS and single-page/multi-page app development using JavaScript frameworks such as ReactJS/Vite.
						Passionate about interactive UI design, experienced with CSS libraries such as Chakra-UI and Bootstrap.
					</Text>
					<Flex h="40px" alignItems={"center"} color="#00bb00" marginTop={"10px"} fontSize={"1.9em"} gap="10px">
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
					w={["100%", "100%", "100%", "50%"]}
					borderBottom={["1px solid rgba(15,31,17,0.4)", "1px solid rgba(15,31,17,0.4)", "1px solid rgba(15,31,17,0.4)", "unset"]}
				>
					<Text color={"#00bb00"} fontSize={"1.4em"} fontWeight={"500"}>
						Software Development
					</Text>
					<Text marginBottom={"auto"} w="95%">
						Strong understanding of various tools for functional and OOP including Python, Flask, Node.js, Express.js, EJS, MATLAB. Proficient in
						source control methodologies using git.
					</Text>
					<Flex h="40px" alignItems={"center"} color="#00bb00" marginTop={"10px"} fontSize={"1.9em"} gap="10px">
						<SiPython />
						<SiFlask />
						<SiNodedotjs />
						<ImEmbed2 />
						<SiGithub />
					</Flex>
				</Flex>
				<Flex
					borderBottom={["1px solid rgba(15,31,17,0.4)", "1px solid rgba(15,31,17,0.4)", "1px solid rgba(15,31,17,0.4)", "unset"]}
					borderRight={["unset", "unset", "unset", "1px solid rgba(15,31,17,0.4)"]}
					borderTop={["unset", "unset", "unset", "1px solid rgba(15,31,17,0.4)"]}
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					w={["100%", "100%", "100%", "50%"]}
				>
					<Text color={"#00bb00"} fontSize={"1.4em"} fontWeight={"500"}>
						Database Management
					</Text>
					<Text marginBottom={"auto"} w="95%">
						Familiar with the use of both relational and non-relational databases such as PostgreSQL, Firebase (Firestore, RealtimeDB,
						Authentication), MongoDB/MongoDB Atlas.
					</Text>
					<Flex h="40px" alignItems={"center"} color="#00bb00" marginTop={"10px"} fontSize={"1.9em"} gap="10px">
						<SiPostgresql className="postgres-icon" />
						<SiFirebase />
						<SiMongodb />
					</Flex>
				</Flex>
				<Flex
					flexFlow={"column nowrap"}
					boxSizing="border-box"
					p={"15px"}
					w={["100%", "100%", "100%", "50%"]}
					borderTop={["unset", "unset", "unset", "1px solid rgba(15,31,17,0.4)"]}
				>
					<Text color={"#00bb00"} fontSize={"1.4em"} fontWeight={"500"}>
						Problem Solving
					</Text>
					<Text marginBottom={"auto"} w="95%">
						Extensive background in problem solving with a strong capability to apply creative, analytical, critical-thinking, and research skills
						to identify a problem and pick the best of all possible solutions. Very comfortable in dealing with mathematical problems.
					</Text>
					<Flex h="40px" alignItems={"center"} color="#00bb00" marginTop={"10px"} fontSize={"1.9em"} gap="10px">
						<FaWrench fontSize={"0.9em"} />
						<TbMathFunction />
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
