import React from 'react'

function CommentForm() {
    return (
        <section className="comments">
        <h3 className="comments__heading">3 Comments</h3>
        <div className="comments__block">
            <div className="comments__image"></div>
            <form className="comments__form">
                <label className="comments__form-label">JOIN THE CONVERSATION</label><br/>
                <div className="comments__form-box">
                    <textarea className="comments__form-message" type="text" name="reviewerComment" placeholder="That was easily the most spectacular BMX moment ever."></textarea><br/>
                    <button className="comments__form-btn" type="submit">COMMENT</button>
                </div>
            </form>
        </div>
    </section>
    );
}

export default CommentForm;
