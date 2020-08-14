import React from 'react';
import { format } from 'timeago.js';

function Comments(props) {
    const { name, timestamp, comment } = props.review;
    const timestampString = format(new Date(timestamp));

    // const newDateTime = new Date(props.review.timeStamp);
    // console.log(props.review.comment + " " + newDateTime.toString());
    return (
        <section className="reviews">
            <div className="reviews__block">
                <div className="reviews__image"></div>
                <div className="reviews__inside">
                    <div className="reviews__inside-first">
                        <h4 className="reviews__inside-first-para">{name}</h4>
                        <p className="reviews__inside-first-para reviews__inside-first-para--color">{timestampString}</p>
                    </div>
                    <div className="reviews__inside-second">
                        <h4 className="reviews__inside-second-para">{comment}</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments
