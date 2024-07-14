import { MdOutlineNoteAlt } from "react-icons/md";

const Button2 = () => {
  return (
    <>
        <div className='w-[240px] h-[120px] mt-7 cursor-pointer flex items-center justify-center bg-[#0A5F6F] gap-4 rounded-[20px]'>
          <div className='ml-5 h-auto flex justify-center items-center'>
            <MdOutlineNoteAlt fontSize='40px' color='white' />
          </div>

          <div className='w-full text-white'>
            <h1 className='text-lg'>Diploma in IT</h1>
            <p className="text-sm">OXF/DIT/01</p>
          </div>
        </div>
    </>
  )
}

export default Button2
