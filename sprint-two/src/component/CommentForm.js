import React from 'react';
import Btn from './Btn';

function CommentForm() {
    return (
        <section className="comments">
            <h3 className="comments__heading">3 Comments</h3>
            <div className="comments__block">
                <div className="comments__image"></div>
                <form className="comments__form">
                    <label className="comments__form-label">JOIN THE CONVERSATION</label><br/>
                    <div className="comments__form-box">
                        <textarea className="comments__form-message" type="text" name="reviewerComment" 
                                  placeholder="Write comment here">
                        </textarea><br/>
                        <Btn text="COMMENT" className="comments__form-btn"/>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default CommentForm;
