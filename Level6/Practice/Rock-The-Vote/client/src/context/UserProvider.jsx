import React, {useState} from "react"
import axios from "axios"

export const UserContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

function UserProvider(props){

    const initState = {
        user : JSON.parse(localStorage.getItem("user")) ||{},
        token : localStorage.getItem("token") || "",
        issues :  [],
        errMsg: ""
    }

    const [userState, setUserState] = useState(initState)
    const [allIssues, setAllIssues] = useState([])
    const [comments, setComments] = useState([])

    async function signup(creds){
        try {
           const res = await axios.post('/api/auth/signup', creds)
           const {user, token} = res.data
           localStorage.setItem("token", token)
           localStorage.setItem("user", JSON.stringify(user))
           setUserState(prevUserState => {
            return {
                ...prevUserState,
                user:user,
                token:token
            }
           })
           console.log(res.data) 
        } catch (error) {
           handleAuthErr(error.response.data.errMsg)
        }
    }

    async function login(creds){
        try {
            const res = await axios.post('/api/auth/login', creds)
            const {user, token} = res.data
            localStorage.setItem("token",token)
            localStorage.setItem("user", JSON.stringify(user))
            setUserState(prevUserState => {
                return{
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data)
        } catch (error) {
            handleAuthErr(error.response.data.errMsg)
            console.log(error.response.data.errMsg)
        }
    }

    
    async function logout(){
        try {
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    token: "",
                    user: {}
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    function handleAuthErr(errMsg){
        setUserState(prevUserState => {
            return {
                ...prevUserState,
                errMsg
            }
        })
    }

    function resetAuthErr(){
        setUserState(prevUserState => {
            return{
                ...prevUserState,
                errMsg: ""
            }
        })
    }

    async function getUserIssues(){
        try {
            const res = await userAxios.get('/api/main/issues/user')
           setUserState(prevState => {
            return {
                ...prevState,
                issues: res.data
            }
           })
        } catch (error) {
            console.log(error)  
        }
    }

    async function addIssue(newIssue){
        try {
            const res = await userAxios.post('/api/main/issues', newIssue)
            setUserState(prevState => {
                return{
                    ...prevState,
                    issues: [...prevState.issues, res.data]
                }
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    async function getAllIssues(){
        try {
            const res = await userAxios.get('/api/main/issues')            
                setAllIssues(res.data)            
        } catch (error) {
            console.log(error)
            
        }
    }

    // function deleteIssue(issueId){
    //     userAxios.delete(`api/main/issue/${issueId}`)
    //     .then(res =>{getUserIssues()
    //                  getAllIssues()}) 
    //      {setAllIssues(prevIssue => prevIssue.filter (issue => issue._id !== issueId))})
    //     .catch(err => console.log(err))
    // }

    // function editIssue(updates, issueId){
    //     axios.put(`/api/main/issues/${issueId}`, updates)
    //     .then(res => {
    //         setAllIssues(prevIssue => prevIssue.map (issue => issue._id !== issueId ? issue : res.data))
    //     })
    //     .catch(err => console.log(err))
    // }

    async function handleUpvotes(issueId){
        try {
           const res = await userAxios.put(`/api/main/issues/upvotes/${issueId}`)
           console.log(res.data)
           setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue)) 
           setUserState(prevUserState => {
            return {
                ...prevUserState,
                issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
            }
           })
        } catch (error) {
            console.log(error)
        }
    }

    async function handleDownvotes(issueId){
        try {
           const res = await userAxios.put(`/api/main/issues/downvotes/${issueId}`)
           console.log(res.data)
           setAllIssues(prevIssues => prevIssues.map(issue => issue._id === issueId ? res.data : issue)) 
           setUserState(prevUserState => {
            return {
                ...prevUserState,
                issues: prevUserState.issues.map(issue => issue._id === issueId ? res.data : issue)
            }
           })
        } catch (error) {
            console.log(error)
        }
    }

    console.log(userState)

    return(
        <UserContext.Provider value ={{
            ...userState, 
            signup, 
            login, 
            // editIssue,
            // deleteIssue,
            logout,
            handleAuthErr,
            resetAuthErr,
            getUserIssues,
            addIssue,
            allIssues,
            getAllIssues,
            handleUpvotes,
            handleDownvotes
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider