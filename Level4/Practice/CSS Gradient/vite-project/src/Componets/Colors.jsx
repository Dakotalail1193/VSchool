import React from "react";


export default function Colors(){
    const [formData, setFormData] = React.useState({
        color1: "#ffffff",
        color2: "#000000",
        angle:90
      });
      
      function handleForm(e){
        const {name, value} = e.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
          
        }
      ));
      }
      
    return (

        
        <div className="form-container">
            <h2>Select your colors</h2>
            <form className="form">
            <input
            type="color"
            onChange={handleForm}
            name="color1"
            value={formData.color1}
            />

            <label>Color 1</label>

            <br/>
            

            <input
            type="color"
            onChange={handleForm}
            name="color2"
            value={formData.color2}
            />

            <label> Color 2 </label>

            <div className="angle">
                
                <input
                type="number"
                id="angle"
                name="angle"
                min="0"
                max="360"
                value={formData.angle}
                onChange={handleForm}
                />
                <label for="angle">Angle</label>

            </div>
            </form>
            <hr/>
            <br/>
            <div style={{
                background: `linear-gradient(${formData.angle}deg, ${formData.color1}, ${formData.color2})`,
                }}
                className="preview-square"/>
                <br/>
                <div className="preview-text">
                <span>
                    -background: {`linear-gradient(${formData.angle}deg, ${formData.color1}, ${formData.color2});`}
                </span>
                <br/>
                <span>
                    -moz-background: {`linear-gradient(${formData.angle}deg, ${formData.color1}, ${formData.color2});`}
                </span>
                <br/>
                <span>
                    -webkit: {`linear-gradient(${formData.angle}deg, ${formData.color1}, ${formData.color2});`}
                </span>
            </div>

        </div>
    )

    
}