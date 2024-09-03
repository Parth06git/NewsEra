import React from 'react'
import PropTypes from 'prop-types'


export default function NewsItems(props) {
    return (
        <>

            <span class="position-absolute top-10 translate-middle badge rounded-pill bg-dark " style={{
                left: '72%',
                zIndex: '2'
            }}>
                From {props.name}
            </span>
            <div className="clearfix my-5">
                <img src={props.imgUrl ? props.imgUrl : "https://images.mktw.net/im-795673/social"} className="col-md-6 float-md-end mb-8 w-50  ms-md-5" alt="..." />

                <h3>
                    {props.title}
                </h3>

                <p>
                    {props.description}
                </p>
                <h6>Author: {props.author}</h6>
                <p>Published On: {new Date(props.date).toGMTString()}</p>

                <a href={props.newsUrl} target='_blank' className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'} text-center`}>Complete Article</a>


            </div>
        </>
    )
}

NewsItems.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
}
