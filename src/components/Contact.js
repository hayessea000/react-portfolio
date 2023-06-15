import { useState } from "react"
import { validate } from "react-email-validator"

function Contact(props) {

    const [contactData, setContactData] = useState({ name: "", email: "", message: "" })
    const [error, setError] = useState("")
    const handleInputChange = (e) => setContactData({ ...contactData, [e.target.name]: e.target.value })

    const handleError = (event) => {
        if (event.target.name === "email") {
            if (!validate(event.target.value)) {
                setError("not a valid email")
            }
        }
        if (event.target.value === "") {
            setError("The feild can not be blank")
        }
    }

    return (
        <div className="shiftD">
            <form className="text-center">
                <label>Contact me</label>
                <div className="row w-50 mx-auto">
                    <input className="col-6" onBlur={(event) => handleError(event)} onFocus={() => setError("")} type="text" placeholder="Your name here" name="name" value={contactData.name} onChange={handleInputChange} />
                    <input className="col-6" onBlur={(event) => handleError(event)} onFocus={() => setError("")} type="text" placeholder="Your Email" name="email" value={contactData.email} onChange={handleInputChange} />
                </div>
                <textarea className="row w-50 mx-auto message" onBlur={(event) => handleError(event)} onFocus={() => setError("")} type="text" placeholder="Your message" rows={5} name="message" value={contactData.message} onChange={handleInputChange} />
                <button className="w-50">Contact</button>
                <p className="text-light">{error}</p>
            </form>
            <div className="text-light text-center">
                <h2>Form is under construction!</h2>
                <p>Contact via Linkedin or through information in resume</p>
            </div>
        </div>
    )
}

export default Contact