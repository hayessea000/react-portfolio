import { useState, useEffect } from "react"
import {validate} from "react-email-validator"

function Contact(props){

    const [contactData, setContactData] = useState({ name: "", email: "", message: "" })
    const [error, setError] = useState("")
    const handleInputChange = (e) => setContactData({...contactData, [e.target.name]: e.target.value})

    const handleError = (event) => {
        if (event.target.name=== "email"){
            if(!validate(event.target.value)){
                setError("email error")
            }
        }
        if (event.target.value === ""){
            setError("This feild is req")
        }
    }

    return(
        <>
            <p>{error}</p>
             <form>
                <label>Contact me</label>
                <input onBlur={(event)=> handleError(event)} onFocus={()=> setError("")} type="text" placeholder="Your name here" name="name" value={contactData.name} onChange={handleInputChange} />
                <input onBlur={(event)=> handleError(event)} onFocus={()=> setError("")} type="text" placeholder="Your Email" name="email" value={contactData.email} onChange={handleInputChange} />
                <input onBlur={(event)=> handleError(event)} onFocus={()=> setError("")}type="text" placeholder="Your message" name="message" value={contactData.message} onChange={handleInputChange} />
                <button>Contact</button>
            </form>
        </>
    )
}

export default Contact