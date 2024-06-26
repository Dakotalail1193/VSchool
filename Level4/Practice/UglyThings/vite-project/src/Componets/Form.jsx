import React, {useContext, useState} from 'react'
import {UglyContext} from './ContextProvider'



function Form(){
    

    const {uglyThing, handleChange, handleSubmit} = useContext(UglyContext)

    

    return(
        <>
        
        <form className='form-container'>
        
            <input className='form-input'
                    type="text"
                    placeholder='Title'
                    name="title"
                    value={uglyThing.title}
                    onChange={handleChange}
                    required
            />

            <input className='form-input'
                    type="url"
                    placeholder='Img URL'
                    name="imgUrl"
                    value={uglyThing.imgUrl}
                    onChange={handleChange}
                    required
            />

                <input className='form-input'
                    type="text"
                    placeholder='Description'
                    name="description"
                    value={uglyThing.description}
                    onChange={handleChange}
                    required
                />

                <button className='submit'
                        onClick={handleSubmit}
                        type="submit">Submit
                </button>
        </form>
        <h1>Ugly List</h1>
        </>
    )
}

export default Form