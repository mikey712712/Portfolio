import { FaReact } from "react-icons/fa"
import { SiJavascript, SiCss3, SiChakraui, SiBootstrap, SiPython, SiFlask, SiNodedotjs, SiGithub, SiPostgresql, SiFirebase, SiMongodb } from "react-icons/si"
import { Grid, GridItem } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function Background() {
	const initialIcons = {
		fr: false,
		sjs: false,
		scss: false,
		schak: false,
		sb: false,
		spy: false,
		sfla: false,
		snode: false,
		sgit: false,
		spsql: false,
		sfb: false,
		smdb: false,
	}
	const [hideNextRender, setHideNextRender] = useState(false)
	const [shownIcons, setShownIcons] = useState(initialIcons)
	useEffect(() => {
		if (hideNextRender) {
			setTimeout(() => {
				setHideNextRender(false)
				setShownIcons(initialIcons)
			}, 100)
		}
	}, [shownIcons])
	const handleHover = (key) => {
		if (window.scrollY < 1200) {
			setHideNextRender(true)
			setShownIcons({
				...shownIcons,
				[key]: true,
			})
		}
	}
	return (
		<Grid
			id="background"
			position={"fixed"}
			top={"0"}
			pt="30px"
			left={"50%"}
			transform={"translateX(-50%)"}
			height={"100vh"}
			width={"100vw"}
			templateColumns={"repeat(4, 1fr)"}
			templateRows={"repeat(3, 1fr)"}
			color="#0f1f11"
			zIndex={"50"}
			maxW={"1600px"}
		>
			<GridItem
				transition={shownIcons.fr ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.fr ? "0.05" : "0"}
				onMouseEnter={() => handleHover("fr")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<FaReact fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.sjs ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.sjs ? "0.05" : "0"}
				onMouseEnter={() => handleHover("sjs")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiJavascript fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.scss ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.scss ? "0.05" : "0"}
				onMouseEnter={() => handleHover("scss")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiCss3 fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.schak ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.schak ? "0.05" : "0"}
				onMouseEnter={() => handleHover("schak")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiChakraui fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.sb ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.sb ? "0.05" : "0"}
				onMouseEnter={() => handleHover("sb")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiBootstrap fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.spy ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.spy ? "0.05" : "0"}
				onMouseEnter={() => handleHover("spy")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiPython fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.sfla ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.sfla ? "0.05" : "0"}
				onMouseEnter={() => handleHover("sfla")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiFlask fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.snode ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.snode ? "0.05" : "0"}
				onMouseEnter={() => handleHover("snode")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiNodedotjs fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.sgit ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.sgit ? "0.05" : "0"}
				onMouseEnter={() => handleHover("sgit")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiGithub fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.spsql ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.spsql ? "0.05" : "0"}
				onMouseEnter={() => handleHover("spsql")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiPostgresql fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.sfb ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.sfb ? "0.05" : "0"}
				onMouseEnter={() => handleHover("sfb")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiFirebase fontSize={"20vh"} />
			</GridItem>
			<GridItem
				transition={shownIcons.smdb ? "100ms" : "1200ms"}
				transitionProperty={"opacity"}
				opacity={shownIcons.smdb ? "0.05" : "0"}
				onMouseEnter={() => handleHover("smdb")}
				display={"flex"}
				justifyContent={"center"}
				alignItems={"center"}
			>
				<SiMongodb fontSize={"20vh"} />
			</GridItem>
		</Grid>
	)
}
