import React from 'react'

const InpuntSearch = ({ setSearch }) => {

    function changeInpunt(e) {
        setSearch(e.target.value)
    }
    return (
        <>
            <input className='font-nunito w-auto border-x border-y border-color2 focus:outline-color2 p-1.5 text-center text-xs text-color2 placeholder:text-color2 rounded-full outline-hidden' type="text" placeholder='¿Que estas buscando?' onChange={changeInpunt} />
        </>
    )
}

export default InpuntSearch