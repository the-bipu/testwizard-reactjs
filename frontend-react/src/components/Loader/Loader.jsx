import React from 'react'

import './Loader.scss'
import Navbar from '../Navbar/Navbar'

export default function Loader() {
  return (
    <div className='major--div'>
        <Navbar />

        <div className="extra--div">
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

        <div className="footer--sub">
            <p>COPYRIGHT @2023 / TESTWIZARD</p>
        </div>
    </div>
  )
}
