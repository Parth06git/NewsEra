import React from 'react'
import PropTypes from 'prop-types'


export default function NewsItems2(props){

    const myStyle2 = {
        color: props.mode === 'light' ? 'black' : 'white',
        backgroundColor: props.mode === 'light' ? 'white' : 'gray',
    }

        return (
            
            <div className="card h-100" >

                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-dark" style={{
                    left: '50%',
                    zIndex: '1'
                }} >
                    From {props.name}
                </span>

                <img src={props.imgUrl ? props.imgUrl : "https://images.mktw.net/im-795673/social"} className="card-img-top h-50 " alt="..." />
                <div className="card-body" style={myStyle2}>
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text"><small className={`text-body-${props.mode === 'light' ? 'secondary': 'white'}`}>By {props.author ? props.author : "Unknown"} on {new Date(props.date).toGMTString()}</small></p>
                    <a href={props.newsUrl} target='blank' className={`btn btn-${props.mode === 'light' ? 'primary' : 'dark'}`}>Read More</a>
                </div>
            </div>
        )
}

NewsItems2.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string
}