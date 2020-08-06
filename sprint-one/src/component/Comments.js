import React from 'react'

function Comments() {
    return (
        <section className="reviews">
            <div className="reviews__block">
            <div className="reviews__image"></div>
            <div className="reviews__inside">
                <div className="reviews__inside-first">
                    <h4 className="reviews__inside-first-para">Micheal Lyons</h4>
                    <p className="reviews__inside-first-para reviews__inside-first-para--color">11/18/2018</p>
                </div>
                <div className="reviews__inside-second">
                    <h4 className="reviews__inside-second-para">
                        They BLEW the ROOF off at their last show,                         
                        once everyone started figuring out they were going.                         
                        This is still simply the greatest opening of a concert                         
                        I have EVER witnessed.
                    </h4>
                </div>
            </div>
        </div>
        <div className="reviews__block">
            <div className="reviews__image"></div>
            <div className="reviews__inside">
                <div className="reviews__inside-first">
                    <h4 className="reviews__inside-first-para">Gary Wong</h4>
                    <p className="reviews__inside-first-para reviews__inside-first-para--color">11/12/2018</p>
                </div>
                <div className="reviews__inside-second">
                    <h4 className="reviews__inside-second-para">
                        Every time I see him shred I feel so                         
                        motivated to get off my couch and                         
                        hop on my board. He’s so talented! I                         
                        wish I can ride like him one day so I                         
                        can really enjoy myself!
                    </h4>
                </div>
            </div>
        </div>
        <div className="reviews__block">
            <div className="reviews__image"></div>
            <div className="reviews__inside">
                <div className="reviews__inside-first">
                    <h4 className="reviews__inside-first-para">Theodore Duncan</h4>
                    <p className="reviews__inside-first-para reviews__inside-first-para--color">10/15/2018</p>
                </div>
                <div className="reviews__inside-second">
                    <h4 className="reviews__inside-second-para">
                        How can someone be so good!!!                         
                        You can tell he lives for this and                         
                        loves to do it every day. Everytime I                         
                        see him I feel instantly happy! He’s                         
                        definitely my favorite ever!
                    </h4>
                </div>
            </div>
        </div>
        </section>
    )
}

export default Comments
