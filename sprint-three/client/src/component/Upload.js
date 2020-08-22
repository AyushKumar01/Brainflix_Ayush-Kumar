import React from "react";
import upload from "../assets/images/upload.jpg";
import axios from "axios";
const SEARCH_URL = "http://localhost:5000/videos";

class Upload extends React.Component {

  uploadVideo = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const description = event.target.description.value;
    if (title && description) {
      let newUpload = {
        title: title,
        description: description,
      };
      axios.post(SEARCH_URL, newUpload).then((response) => {
        alert("video saved successfully");
        console.log(response);
      });
      event.target.title.value = "";
      event.target.description.value = "";
    } else {
      alert("Please fill all required fields; Title and description");
    }
  };

  render() {
    return (
      <section className="upload">
        <h1 className="upload__heading">Upload Video</h1>
        <div className="upload__wrapper">
          <form onSubmit={this.uploadVideo} className="upload__form">
            <div>
              <label className="upload__image-label upload__label">
                VIDEO THUMBNAIL
              </label>
              <br />
              <img className="upload__image" src={upload} alt="thumbnail" />
            </div>
            <label className="upload__form-label upload__label">
              TITLE YOUR VIDEO
            </label>
            <br />
            <input
              className="upload__form-title"
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
            <br />
            <label className="upload__form-label upload__label">
              ADD A VIDEO DESCRIPTION
            </label>
            <br />
            <textarea
              className="upload__form-description"
              type="text"
              name="description"
              placeholder="Add a description of your video"
            />
            <br />
            <div className="upload__btn">
              <button className="upload__btn-cancel" type="reset">
                CANCEL
              </button>
              <button className="upload__btn-publish" type="submit">
                PUBLISH
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Upload;
