import React from "react";
import Badge from "./Badge";

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            placeOfBirth: "",
            phone: "",
            favoriteFood: "",
            commentSection: "",

        }
    )
    const [badgeArray, setBadgeArray] = React.useState([])

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {
        event.preventdefault()
        setBadgeArray(prevBadgeArray => {
            return [...prevBadgeArray,
            {
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                placeOfBirth: formData.placeOfBirth,
                phone: formData.phone,
                favoriteFood: formData.favoriteFood,
                commentSection: formData.commentSection
            }]
        })
    }

    const badgeElements = badgeArray.map((badge, index) => {
        return <li> <Badge key={index} {...badge} /> </li>
    })

    return (
        <main>
            <form className="form"
                onSubmit={handleSubmit}>

                <input
                    type="name"
                    placeholder="First Name"
                    className="form--input"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <input
                    type="name"
                    placeholder="Last Name"
                    className="form--input"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <input
                    type="email"
                    placeholder="Email"
                    className="form--input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <input
                    type="placeOfBirth"
                    placeholder="Place of Birth"
                    className="form--input"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <input
                    type="number"
                    placeholder="Phone"
                    className="form--input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <input
                    type="food"
                    placeholder="Favorite Food"
                    className="form--input"
                    name="favoriteFood"
                    value={formData.favoriteFood}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <input
                    type="comment"
                    placeholder="Tell us about yourself"
                    className="form-comment"
                    name="commentSection"
                    value={formData.commentSection}
                    onChange={handleChange}
                    minLength={3}
                    required

                />
                <button
                    className="form-submit"
                    type="submit"
                >Submit
                </button>
            </form>

            <ul>
                {badgeElements}
            </ul>
        </main>
    )

}