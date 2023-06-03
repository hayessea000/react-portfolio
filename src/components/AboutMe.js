
function AboutMe(props) {

    return (
        <div className="shiftD p-5">
            <div className="row pt-5">
                <div className="col-5">
                    <div className="text-center">
                        <img style={{ width: "60%", borderRadius: 400 / 2 }} alt="Sean standing on a beach" src="./images/me.jpg" />
                    </div>
                </div>
                <div className="col-6 text-light mt-5">
                    <h2 className="mb-4">I'm Sean Hayes</h2>
                    <p>Full Stack Developer</p>
                    <p>I live in Savage, Minnesota. I enjoy pushing myself to learn new things and see myself grow. Some of<br/> the most satisfying moment in life are when you learn how to overcome an obstacle you have been struggling with.</p>
                </div>
            </div>
        </div >
    )
}

export default AboutMe