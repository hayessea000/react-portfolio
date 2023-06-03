import { useState} from "react"
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
        <div className="shiftD">
            <p>{error}</p>
             <form className="text-center">
                <label>Contact me</label>
                <div className="row w-50 mx-auto">
                    <input className="col-6" onBlur={(event)=> handleError(event)} onFocus={()=> setError("")} type="text" placeholder="Your name here" name="name" value={contactData.name} onChange={handleInputChange} />
                    <input className="col-6" onBlur={(event)=> handleError(event)} onFocus={()=> setError("")} type="text" placeholder="Your Email" name="email" value={contactData.email} onChange={handleInputChange} />
                </div>
                <input className="row w-50 mx-auto"onBlur={(event)=> handleError(event)} onFocus={()=> setError("")}type="text" placeholder="Your message" name="message" value={contactData.message} onChange={handleInputChange} />
                <button className="w-50">Contact</button>
            </form>
        </div>
    )
}

export default Contact