import React, {useContext} from 'react'
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
                    type="text"
                    placeholder='Img URL'
                    name="imgUrl"
                    value={uglyThing.imgUrl}
                    onChange={handleChange}
                    required
            />

                <input className='form-input'
                    type="text"
                    placeholder='Description'
                    name="Description"
                    value={uglyThing.Description}
                    onChange={handleChange}
                    required
                />

                <button className='submit'
                        onClick={handleSubmit}
                        type="submit">Submit
                </button>
        </form>
        </>
    )
}

export default Form