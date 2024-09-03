import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(props) {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <p className={`col-md-4 mb-0 text-body-primary`} style={{color: props.mode === 'light'? 'black' : 'white'}} >Build by Parth Trivedi</p>

                <Link to="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <b><strong>NewsEra</strong></b>
                </Link>

                <ul className="nav col-md-4 justify-content-around">
                    <li className="nav-item" style={{color: props.mode === 'light'? 'black' : 'white'}}>Thanks for visiting</li>
                </ul>
            </footer>
        </div>
    )
}
