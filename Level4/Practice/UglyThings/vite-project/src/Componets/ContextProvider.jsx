import React,{useState } from "react";
import axios from 'axios'

const UglyContext = React.createContext()

function ContextProvider(props){
    
  
    const [uglyArray, setUglyArray] = useState([])    
    
    const [editedThings, setEditedThings] = useState({
        title: "",
        imgUrl: "",
        description: "",
        isEditing: false
    })
   
    const [uglyThing, setUglyThing] = useState({
        title: "",
        description:"",
        imgUrl:"",
        isEditing: false
})



    function handleChange(e){
        const {name, value} = e.target        
        setUglyThing(prevUglyThing => ({...prevUglyThing, [name]: value}))
    }


    function beginEdit(id){        
        const selectedThing = uglyArray.filter(uglyThing => uglyThing._id === id)
        selectedThing[0].isEditing = !selectedThing[0].isEditing
        setUglyArray(prevState => prevState.map(prev => prev._id === id ? selectedThing[0] : prev))
        setEditedThings(selectedThing[0])
    }

    console.log(editedThings)

    function handleEditChange(e){
        const {name, value} = e.target
        setFormData(prevFormData => ({...prevFormData, [name]: value}))
    }
    
    function handleSubmit(e){
        e.preventDefault()       
        axios.post("https://api.vschool.io/dakotalail/thing", uglyThing)
        .then(res => setUglyArray(prevUglyArray => (
            [...prevUglyArray, res.data]
        )))
        .catch(err => console.log(err))

    }


    console.log(uglyThing)

    
    function handleDelete(_id){
         const apiUrl = `https://api.vschool.io/dakotalail/thing/${_id}`
         axios.delete(apiUrl)
        .then(res => setUglyArray(prevUglyArray => {
            return prevUglyArray.filter(uglyThing => uglyThing._id !== _id)
        }))
        .catch(err => console.log(err))
    }
    
    
    function handleEditChange(e){
        const {name, value} = e.target
        setEditedThings(prevEditedThings => {
            return {
                ...prevEditedThings,
                [name]: value
            }
        })
    }  

    function saveEdit(id) {
     
   
        axios.put(`https://api.vschool.io/dakotalail/thing/${id}`, editedThings)
        .then(res => setUglyArray(prevState => prevState.map(thing => thing._id === res.data._id ? res.data : thing)))
        .catch(err => console.log(err))
  
}
    
    
    const editThing = (uglyThing) => {setEditedThings(uglyThing)}
    
    React.useEffect(() => {
        axios.get("https://api.vschool.io/dakotalail/thing")
        .then(res => setUglyArray(res.data))
        .catch(err => console.log(err))        
    }, [] )




    return (
        <UglyContext.Provider value = {{
            uglyThing,
            setUglyThing, 
            handleChange, 
            handleSubmit,
            uglyArray, 
            setUglyArray, 
            handleDelete,             
            editedThings, 
            setEditedThings, 
            handleEditChange,             
            saveEdit,
            editThing,            
            beginEdit
            
        }}>
            {props.children}
        </UglyContext.Provider>
    )
}

export {UglyContext, ContextProvider }