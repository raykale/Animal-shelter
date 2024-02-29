export default function UpdateForm(props) {
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await props.updateAnimal(props.animal, props.id, props.token)
            props.setAnimal(data)
            props.setShowUpdate(false)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        props.setAnimal({...props.animal, [e.target.name]: e.target.value })
    }

    return(
        <form onSubmit={handleSubmit}>
        <h2>Create A New AnimalPost {props.user.name} </h2>
        <input placeholder='Name' type="text" name="name" value={formData.title} onChange={handleChange}/>
        <input placeholder='SPECIES' type="text" name="species" value={formData.body} onChange={handleChange}/>
        {/* <input placeholder='IMAGE' type="text" name="name" value={formData.title} onChange={handleChange}/>
        <input placeholder='Name' type="text" name="name" value={formData.title} onChange={handleChange}/> */}
        <input type="submit" value="Create Animal"/>
    </form>
    )


}