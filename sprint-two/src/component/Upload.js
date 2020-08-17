import React from 'react'
import upload from '../assets/images/upload.jpg';
import Header from './Header';

function Upload() {
    return (
        <>
        <Header />
        <section className="upload">
            <h1  className="upload__heading">Upload Video</h1>
            <div className="upload__wrapper">
                <div>
                    <label className="upload__image-label upload__label">VIDEO THUMBNAIL</label><br/> 
                    <img className="upload__image" src={upload} alt="thumbnail" />
                </div>
                <form className="upload__form">
                    <label className="upload__form-label upload__label">TITLE YOUR VIDEO</label><br/> 
                    <input className="upload__form-title" 
                           type="text" name="title" 
                           placeholder="Add a title to your video" 
                    />
                    <br/>
                    <label className="upload__form-label upload__label">ADD A VIDEO DESCRIPTION</label><br/>
                    <textarea className="upload__form-description" 
                              type="text" name="description" 
                              placeholder="Add a description of your video"
                    />
                    <br/>
                </form>
            </div>    
            <div className="upload__btn">
                <button className="upload__btn-cancel" type="submit">CANCEL</button>
                <button className="upload__btn-publish" type="submit">PUBLISH</button>
            </div>
        </section>
        </>
    )
}

export default Upload;
