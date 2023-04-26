import { useState } from "react"

const Demo = () => {
	const [formData, setFormData] = useState({})

	const handleChange = (e) => {
		const newData = { ...formData }
		newData[e.target.name] = e.target.value
		setFormData(newData)
	}

	return (
		<form>
			<input onChange={handleChange} name="name" value={formData.name} />
			<input onChange={handleChange} name="email" value={formData.email} />
			<textarea onChange={handleChange}>{formData.message}</textarea>
		</form>
	)
}
