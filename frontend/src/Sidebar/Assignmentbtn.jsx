import { MdAssignmentAdd } from "react-icons/md";

const Assignmentbtn = () => {
  return (
    <div>
      <button className="button flex gap-7 bg-[#e1e2ef] border-r-[19px] rounded-lg p-1 w-full">
            <div className='flex justify-center items-center mx-1'><MdAssignmentAdd style={{ fontSize: 24, width: 24 }} />
            </div>
            <div className='font-medium'>Assignment</div>
          </button>
    </div>
  )
}

export default Assignmentbtn
