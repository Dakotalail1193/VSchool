import React from 'react'
import Header from './Componets/Header'
import Colors from './Componets/Colors'
import './App.css'


function App() {
const [formData, setFormData] = React.useState({
  color1: "#ffffff",
  color2: "#000000"
});

function handleForm(e){
  const {name, value} = e.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value,
  }));
}

   return (
    <>
      <Header/>
      <Colors formData={formData} handleForm={handleForm}/>
    </>
  )
}

export default App
