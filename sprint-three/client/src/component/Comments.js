import React from 'react';
import { format } from 'timeago.js';

function Comments(props) {
    const { name, timestamp, comment } = props.review;
    const timestampString = format(new Date(timestamp));
    return (
        <section className="reviews">
            <div className="reviews__block">
                <div className="reviews__image"></div>
                <div className="reviews__inside">
                    <div className="reviews__inside-upper">
                        <h4 className="reviews__inside-upper-para">{name}</h4>
                        <p className="reviews__inside-upper-para reviews__inside-upper-para--color">{timestampString}</p>
                    </div>
                    <div className="reviews__inside-lower">
                        <h4 className="reviews__inside-lower-para">{comment}</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments
