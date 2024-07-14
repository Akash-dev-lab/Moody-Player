import { Home } from 'react-feather'
// import Home from '../Home'

const Homebutton = () => {
  return (
    <div>
      <button className="button flex bg-[#e1e2ef] border-r-[48px] rounded-lg p-1 w-full" >
            <div className='flex justify-center items-center mx-1 gap-10 font-medium'>
              <Home />
              <span className='text-black'>Home</span>
            </div>
          </button>
    </div>
  )
}

export default Homebutton
