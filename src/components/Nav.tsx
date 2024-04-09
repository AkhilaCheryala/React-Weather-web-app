import { faSearch, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Nav() {

  return (
    <div className=' flex flex-row items-center justify-around bg-slate-900 bg-opacity-25  p-4 md:w-1/3  rounded-md m-3'>
      <div className=' flex gap-4 items-center '>
        <input type="text" placeholder="search here.." className=' p-2 py-1 focus:outline-none capitalize placeholder:lowercase bg-slate-200 rounded-md' />
         <div className='flex gap-3 text-white shadow-lg text-xl'>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faLocationDot} />
         </div>
         </div>
<div className='flex text-white text-xl'>
  <p>°C |</p>
  <p>°F</p>
</div>
     
    </div>
  )
}

export default Nav