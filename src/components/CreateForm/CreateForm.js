import {useState} from 'react'
import {useNavigate} from 'react-router-dom'


export default function CreateForm(props) {
    const [ formData, setFormData ] = useState({
        title: '',
        body: ''
    })
    const navigateTo = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await props.createAnimal(formData, props.token)
            // cool thing to do once there is a showpage done
            navigateTo(`/animal/${data._id}`)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
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