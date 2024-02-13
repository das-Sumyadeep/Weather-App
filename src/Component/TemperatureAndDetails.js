import React from 'react'
import { LiaTemperatureHighSolid } from 'react-icons/lia'
import { WiHumidity } from 'react-icons/wi'
import { BsWind } from 'react-icons/bs'
import { BiSun } from 'react-icons/bi'
import { TbSunset2 } from 'react-icons/tb'
import { formatToLocalTime, iconUrlFromCode } from '../Services/WeatherService'

const TemperatureAndDetails = ({ weather: {
    icon,
    main,
    temp_max,
    temp_min,
    temp,
    humidity,
    speed,
    feels_like,
    sunrise,
    sunset,
    timezone
} }) => {
    return (
        <>
            <div className='flex items-center justify-center py-6 text-xl text-cyan-100'>
                <p>{main}</p>
            </div>

            <div className='flex items-center justify-between text-white py-3'>
                <img sizes={20} src={iconUrlFromCode(icon)} alt='' />
                <p className='text-4xl'>{`${temp.toFixed()}°`}</p>

                <div className='flex flex-col space-y-2'>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <LiaTemperatureHighSolid size={18} className='mr-1' />
                        Real feel:
                        <span className='font-medium ml-1'>{`${feels_like.toFixed()}°`}</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <WiHumidity size={18} className='mr-1' />
                        Humidity:
                        <span className='font-medium ml-1'>{`${humidity.toFixed()}%`}</span>
                    </div>
                    <div className='flex font-light text-sm items-center justify-center'>
                        <BsWind size={18} className='mr-1' />
                        Wind:
                        <span className='font-medium ml-1'>{`${speed.toFixed()}km/hr`}</span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row items-center justify-around space-x-2 text-white text-sm py-3'>
                <BiSun size={18} />
                <p className='font-light'>
                    Rise: <span className='font-medium ml-1'>{formatToLocalTime(sunrise, timezone, 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>

                <TbSunset2 size={18} />
                <p className='font-light'>
                    Set: <span className='font-medium ml-1'>{formatToLocalTime(sunset, timezone, 'hh:mm a')}</span>
                </p>
                <p className='font-light'>|</p>

                <BiSun size={18} />
                <p className='font-light'>
                    High: <span className='font-medium ml-1'>{`${temp_max.toFixed()}°`}</span>
                </p>
                <p className='font-light'>|</p>

                <BiSun size={18} />
                <p className='font-light'>
                    Low: <span className='font-medium ml-1'>{`${temp_min.toFixed()}°`}</span>
                </p>
            </div>
        </>
    )
}

export default TemperatureAndDetails