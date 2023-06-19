import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Link, Text, Textarea } from "@chakra-ui/react"
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri"
import { MdEmail } from "react-icons/md"

import { useInView } from "react-intersection-observer"
import React, { useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
	const form = useRef()

	const sendEmail = (e) => {
		e.preventDefault()
		emailjs.sendForm("service_2la64gv", "template_1cklgwf", form.current, "h12-omlNotwrvPFrO")
	}
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	})

	const openTab = (url) => {
		window.open(url, "_blank")
	}

	return (
		<Flex
			ref={ref}
			opacity={inView ? 1 : 0}
			transition={"opacity 800ms ease-out"}
			position={"relative"}
			// m={["0", , , "150px 0"]}
			p={["0", , , "0 0 20px 0"]}
			w={"100%"}
			h={"fit-content"}
			boxSizing={"border-box"}
			zIndex={"100"}
			id="contact"
			bgColor={"#e3f2e6"}
		>
			<Flex
				position={"relative"}
				flexFlow="column nowrap"
				borderTop={[, , , "1px solid #0f1f11"]}
				w={"100%"}
				h={"100%"}
				boxSizing="border-box"
				p="30px 30px 20px 30px"
				fontFamily={"Sono, sans-serif"}
				color="#0f1f11"
				justify={"flex-start"}
				alignItems={"stretch"}
				fontSize={["0.8em", , , "0.9em"]}
			>
				<Flex flexFlow={"column nowrap"} p={["0", , , "0 0 15px 15px"]} w="100%">
					<Text boxSizing="border-box" w={"100%"} h="fit-content" fontWeight="500" fontSize={"2.8em"}>
						Get In Touch
					</Text>
					<Text m={"0 0 15px 0"} fontSize={"1.1em"}>
						Looking for a self-driven and capable software engineer? Get in contact with me via Email, LinkedIn, or leave a message using the form
						below!
					</Text>

					<Flex m={"15px auto"} w={["100%", , , "70%"]} flexFlow={"column nowrap"}>
						<Flex mb={"15px"} w={"100%"} gap={"15px"} flexFlow={"row nowrap"}>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"center"}
								fontSize={"1.1em"}
								fontWeight={"500"}
								w="fit-content"
								p="15px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("mailto:michaelholton712@gmail.com")
								}}
							>
								<Text>Email</Text>
								<MdEmail />
							</Button>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"center"}
								fontSize={"1.1em"}
								fontWeight={"500"}
								w="fit-content"
								p="15px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://www.linkedin.com/in/michaelholton-dev/")
								}}
							>
								<Text>LinkedIn</Text>
								<RiLinkedinBoxFill />
							</Button>
							<Button
								zIndex={"150"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"center"}
								fontSize={"1.1em"}
								fontWeight={"500"}
								w="fit-content"
								p="15px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								onClick={() => {
									openTab("https://github.com/mikey712712/")
								}}
							>
								<Text>Github</Text>
								<RiGithubFill />
							</Button>
						</Flex>
						<form ref={form} onSubmit={sendEmail}>
							<FormLabel>Name</FormLabel>
							<Input required={true} focusBorderColor="green.300" bgColor={"rgba(0,187,0,0.1)"} type="text" name="user_name" />
							<FormLabel mt={"10px"}>Email</FormLabel>
							<Input required={true} focusBorderColor="green.300" bgColor={"rgba(0,187,0,0.1)"} type="email" name="user_email" />
							<FormLabel mt={"10px"}>Message</FormLabel>
							<Textarea required={true} focusBorderColor="green.300" bgColor={"rgba(0,187,0,0.1)"} name="message" />
							<Button
								zIndex={"150"}
								mt={"20px"}
								bgColor={"#313130"}
								display={"flex"}
								justifyContent={"center"}
								fontSize={"1.1em"}
								fontWeight={"500"}
								w="fit-content"
								p="15px"
								gap={"10px"}
								color={"#f6f7f9"}
								_hover={{
									bgColor: "#00bb00",
									color: "#212428",
								}}
								type="submit"
							>
								Send
							</Button>
						</form>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	)
}
