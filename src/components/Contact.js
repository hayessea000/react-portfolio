
function Contact(props){

    const [contactData, setContactData] = useState({ name: "", email: "", message: "" })

    const handleInputChange = (e) => setContactData({...contactData, [e.target.name]: e.target.value})

    return(
        <>
             <form>
                <label>Contact me</label>
                <input type="text" placeholder="Your name here" name="name" value={contactData.name} onChange={handleInputChange} />
                <input type="text" placeholder="Your Email" name="email" value={contactData.email} onChange={handleInputChange} />
                <input type="text" placeholder="Your message" name="message" value={contactData.message} onChange={handleInputChange} />
                <button>Contact</button>
            </form>
        </>
    )
}

export default Contact