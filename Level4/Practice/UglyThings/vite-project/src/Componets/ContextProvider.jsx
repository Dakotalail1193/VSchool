import React,{useState , useContext} from "react";
import axios from 'axios'

const UglyContext = React.createContext()

function ContextProvider(props){
    const emptyThing = {
        title: "",
        imgUrl: "",
        description: ""
    }


    const [uglyThing, setUglyThing] = useState(emptyThing)

    function handleChange(e){
        const {name, value} = e.target
        setUglyThing(prevUglyThing => ({...prevUglyThing, [name]: value}))
    }


    const [uglyArray, setUglyArray] = useState([])

    React.useEffect(() => {
        axios.get("https://api.vschool.io/dakotalail/thing")
        .then(res => setUglyArray(res.data))
        .catch(err => console.log(err))        
    }, [] )


    function handleSubmit(e){
        e.preventDefault()

        const addThing = {
            title: uglyThing.title,
            imgUrl: uglyThing.imgUrl,
            description: uglyThing.description
        }

        axios.post("https://api.vschool.io/dakotalail/thing", addThing)
        .then(res => setUglyArray(prevUglyArray => (
            [...prevUglyArray, res.data]
        )))
        .catch(err => console.log(err))

        setUglyThing(emptyThing)

    }


    function handleDelete(index){
        axios.delete("https://api.vschool.io/dakotalail/thing/" + uglyArray[index]._id)
        .then(res => setUglyArray(prevUglyArray => {
            return prevUglyArray.filter(uglyThing => uglyThing._id !== uglyArray[index]._id)
        }))
        .catch(err => console.log(err))
    }

    const [editedThings, setEditedThings] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

    function handleEdit(e){
        const {name, value} = e.target
        setEditedThings(prevEditedThings => ({...prevEditedThings, [name]: value}))
    }

    const [isEditing, setIsEditing] = useState(-1)

  

    function saveEdit(index) {
        uglyArray.map(uglyThing => {
            setEditedThings(-1)
            axios.put("https://api.vschool.io/dakotalail/thing/" + uglyArray[index]._id, editedThings)
            .then(res => setUglyArray(prevUglyArray => {
                return prevUglyArray.map(uglyThing=> {
                    return uglyThing._id === uglyArray[index]._id ? edit : uglyThing
                })
            }))
            .catch(err => console.log(err))
        })
    }

    return (
        <UglyContext.Provider value = {{
            uglyThing: uglyThing,
            setUglyThing: setUglyThing, 
            handleChange: handleChange, 
            uglyArray: uglyArray, 
            setUglyArray: setUglyArray, 
            handleSubmit: handleSubmit, 
            handleDelete: handleDelete, 
            editedThings: editedThings, 
            setEditedThings: setEditedThings, 
            handleEdit: handleEdit, 
            isEditing: isEditing, 
            setIsEditiing: setIsEditing, 
            saveEdit: saveEdit
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, ContextProvider }