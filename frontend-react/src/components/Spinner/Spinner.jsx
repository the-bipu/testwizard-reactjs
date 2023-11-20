import React from 'react'

import './Spinner.scss'
import Navbar from '../Navbar/Navbar'

export default function Loader() {
  return (
    <div className="extra--div">
        <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
}
