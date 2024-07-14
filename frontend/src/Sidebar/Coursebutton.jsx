import { Book } from 'react-feather'
import { Link } from 'react-router-dom'

const Coursebutton = () => {
  return (
    <div>
      <button className="button flex gap-7 bg-[#e1e2ef] border-r-[48px] rounded-lg p-1 w-full">
            <div className='flex justify-center items-center mx-1'><Book /></div>
            <div className='font-medium'>Courses</div>
          </button>
    </div>
  )
}

export default Coursebutton