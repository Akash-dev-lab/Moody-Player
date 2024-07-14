import { MdOutlineForum } from "react-icons/md";

const Forumbtn = () => {
  return (
    <div>
      <button className="button flex gap-7 bg-[#e1e2ef] border-r-[55px] rounded-lg p-1 w-full">
            <div className='flex justify-center items-center mx-1'><MdOutlineForum style={{ fontSize: 24, width: 24 }} />
            </div>
            <div className='font-medium'>Forum</div>
          </button>
    </div>
  )
}

export default Forumbtn
