import React from "react";
import Selection from './Selection'

export default function Colors(formData, handleForm){
    return (
        <div className="form-container">
            <h2>Select your colors</h2>
            <form className="form">
            <Selection
            handleForm={handleForm}
            name="color1"
            value={formData.color1}
            />

            <Selection
            handleForm={handleForm}
            name="color2"
            value={formData.color2}
            />
            <div className="angle">
                <label for="angle">Angle</label>
                <input
                type="number"
                id="angle"
                name="angle"
                min="0"
                max="360"
                value={formData.angle}
                onChange={handleForm}
                />

            </div>
            </form>

        </div>
    )

    
}