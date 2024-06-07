import React from "react";
import MemeList from "./MemeList";

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    const [memeList, setMemeList] = React.useState([])

    

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [] )

    console.log(allMemeImages)

    //const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
           ...prevMeme,
           [name]: value            
        }))
    }

    function generateId(){
        return Math.floor(Math.random() * (100000 - 1) +1);
    }

    function save(){
        setMemeList((prevMemeList) => {
            return [ ...prevMemeList,
                {
                    topText: meme.topText,
                    bottomText:meme.bottomText,
                    randomImage:meme.randomImage,
                    _id:generateId(),
                    
                }]
        })        
    }

    function editMemes(id) {
        setMemeList(prevMemeList => {
            return prevMemeList.map((currentMeme) => {
                return currentMeme._id === id ? {
                    ...currentMeme,
                    
                } :
                    currentMeme
            })
        })
    }

    function handleDelete(id){
      setMemeList(prevState => prevState.filter(meme => meme._id != id))
    }

    // function handleEdit(id){
    //       setMemeList(prevState => prevState.map(meme => meme._id === id ? setMemeList : meme));
    //       setIsEditing(prevState ? prevState : !prevState)
         
    // }

    

    

    const memeListElements = memeList.map((meme, index) => {
         return <li><MemeList key={index} handleDelete = {handleDelete} editMemes = {editMemes} {...meme} /> </li>
    })


    return (
        <main>
            <div className="form">
                <input
                    type="text" className="form-input"
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text" className="form-input"
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme-img" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            <button className="save" onClick={save}>Save</button>
            <div className="saved-memes">
                <h2 className="saved-header">Saved Memes</h2>
                <ul>
                    {memeListElements}
                </ul>
            </div>
        </main>
    )
}