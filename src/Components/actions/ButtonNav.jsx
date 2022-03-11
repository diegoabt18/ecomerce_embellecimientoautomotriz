import React from 'react'

const ButtonNav = ({text}) => {
    return (
        <button className='hover:text-White'>
            <a href="#" className="text-gray-300  hover:{text-white} block px-3 py-2 rounded-md text-base font-medium bg-white">{text}</a>
        </button>
    )
}

export default ButtonNav