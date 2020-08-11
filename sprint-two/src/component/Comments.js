import React from 'react'

function Comments(props) {
    return (
        <section className="reviews">
            <div className="reviews__block">
                <div className="reviews__image"></div>
                <div className="reviews__inside">
                    <div className="reviews__inside-first">
                        <h4 className="reviews__inside-first-para">{props.review.name}</h4>
                        <p className="reviews__inside-first-para reviews__inside-first-para--color">{props.review.timestamp}</p>
                    </div>
                    <div className="reviews__inside-second">
                        <h4 className="reviews__inside-second-para">{props.review.comment}</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments
