import React, { useState } from 'react'
import AddMovieForm from './AddmovieForm'


function Movie(props){
    const {title, description, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <>
            <div className='movie'>
            { !editToggle ?
            <>
                <h1>Title: {title}</h1>
                <h2>Description: {description}</h2>
                <p>Genre: {genre}</p>
                <button 
                className='delete-btn' 
                onClick={() => props.deleteMovie(_id)}>
                Delete
                </button>

                <button 
                className='edit-btn'
                onClick={() => setEditToggle(prevToggle => !prevToggle)}
                >
                Edit
                </button>
            </>
            :
            <>
                <AddMovieForm 
                title={title}
                description={description}
                genre={genre}
                _id={_id}
                btnText="Submit Edit"
                submit={props.editMovie}
                
                
                />
                                
                <button
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Close
                </button>
            </>
            }

            </div>
        </>
    )
}

export default Movie