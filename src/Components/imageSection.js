import React from 'react'
import about from '../images/gradPic.jpg'
import FileSaver from 'file-saver';



const ImageSection = () => {

    const ResumeDownload = () => {
        FileSaver.saveAs(
            process.env.REACT_APP_CLIENT_URL + "../../public/assets/Alexandro_Berumen_Resume.pdf",
            "Alexandro_Berumen_Resume.pdf"
        );
    }

    return (
        <div className='ImageSection'>
            <div className="img">
                <img src={about} alt="/" />
            </div>
            <div className="about-info">
                <h4>I am <span> Alex Berumen.</span></h4>
                <p>I graduated from UC Berkeley with a degree in Molecular Biology, but have always had my eye on a seperate field. As I spent more and more of my free time learning about the different aspects of software, I realized I wanted a career change.
                    The constant shifts and everchaning landscape in software really intrigued me and once I started building, I knew this was the path I needed to go down. Through the struggles and tiny achievments along the way, I've really enjoyed my journey and look forward to the progress I will make.</p>

                <button className='btn' onClick={ResumeDownload}>Download CV</button>


            </div>
        </div>
    )
}

export default ImageSection
