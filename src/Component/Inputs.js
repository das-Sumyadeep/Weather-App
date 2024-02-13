import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const Inputs = ({setQuery, units, setUnits}) => {

    const [city, setCity] = useState('');

    const handleSearch = () => {
        if(city !== '')
            setQuery({q: city});

        setCity('');
    }

    const handleLocationClick = () => {
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat, lon
                })
            })
        }
    }

    const handleUnits = (e) => {
        const selectedUnits = e.target.name;

        if(units !== selectedUnits) setUnits(selectedUnits);
    }

    return (
        <div className='flex flex-row justify-center my-8'>
            <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
                <input
                    type='text'
                    placeholder='Search for city...'
                    className='text-xl font-light p-2 w-full shadow-xl outline-none capitalize '
                    value={city}
                    onChange={(e)=> setCity(e.target.value)}
                />
                <BiSearch size={30}
                onClick={handleSearch}
                className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <HiOutlineLocationMarker size={30} 
                onClick={handleLocationClick}
                className='text-white cursor-pointer transition ease-out hover:scale-125' />
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
                <button
                    name='metric'
                    onClick={handleUnits}
                    className='text-xl text-white font-semibold transition ease-out hover:scale-125'>°C
                </button>
                <p className='text-white text-xl mx-2'>|</p>

                <button
                    name='imperial'
                    onClick={handleUnits}
                    className='text-xl text-white font-semibold transition ease-out hover:scale-125'>°F
                </button>
            </div>
        </div>
    )
}

export default Inputs