import { MdOutlineAssignment } from "react-icons/md";

const Timetablebtn = () => {
  return (
    <div>
      <button className="button flex gap-7 bg-[#e1e2ef] border-r-[25px] rounded-lg p-1 w-full">
            <div className='flex justify-center items-center mx-1'><MdOutlineAssignment style={{ fontSize: 24, width: 24 }} />
            </div>
            <div className='font-medium'>Time Table</div>
          </button>
    </div>
  )
}

export default Timetablebtn
