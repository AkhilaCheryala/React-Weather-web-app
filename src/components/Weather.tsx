import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown, faTemperature4, faDroplet, faWind } from '@fortawesome/free-solid-svg-icons';
import cloud from '../assets/cloud.png';
import sun from '../assets/sun.svg';
import fall from '../assets/fall.svg';


function Weather() {
  return (
    <div>
      <div className=' w-max bg-slate-800 bg-opacity-15 p-3 px-6  rounded-lg text-white shadow-lg absolute right-36'>
        <p className='text-3xl font-bold text-right'>Clear</p>
        <span className='flex gap-4'>
          <img src={cloud} alt='' className='w-30 h-20 mt-[-2rem]' />
          <p className=' text-3xl font-bold mt-2'>°31</p>
        </span>
        <span className='flex gap-3 my-4 text-lg '>
          <p><FontAwesomeIcon icon={faArrowUp} /> °35 High</p>
          <p><FontAwesomeIcon icon={faArrowDown} /> °29 Low</p>
        </span>
      </div>
      <div className=' flex flex-col gap-6  mt-8'>
        <div className=' flex gap-5 bg-slate-900 bg-opacity-15 w-max p-3 rounded-lg shadow-md'>
          <div className='flex items-center gap-2 text-white font-semibold'>
            <p><img src={sun} alt='' />
            </p>
            <p>RISE: 6:30AM</p>
          </div>
          <div className=' flex items-center gap-2 text-white font-semibold'>
            <img src={fall} alt='' className='w-9 h-9' />
            <p>SET: 5:00PM</p>
          </div>

        </div>

        <div className=' flex  gap-6 text-md font-semibold text-white bg-slate-900 bg-opacity-15 w-max p-5 rounded-lg '>
          <p><FontAwesomeIcon icon={faTemperature4} className='text-red-700' /> Real feel: °31</p>
          <p><FontAwesomeIcon icon={faDroplet} className='text-blue-700' /> Humidity: 50%</p>
          <p><FontAwesomeIcon icon={faWind} className='text-slate-700' /> Wind: 5 Km/h</p>
        </div>
      </div>
    </div>
  )
}

export default Weather