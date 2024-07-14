
const Progress = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      <div className="bg-[#00173D] text-white p-4 rounded-[20px] cursor-pointer">
        Module Progress : 90%
      </div>
      <div className="bg-[#00173D] text-white p-4 rounded-[20px] cursor-pointer">
        Assignment Progress : 10%
      </div>
      <div className="bg-[#00173D] text-white p-4 rounded-[20px] cursor-pointer">
        Attendance Progress : 97%
      </div>
      <div className="bg-[#00173D] text-white p-4 rounded-[20px] cursor-pointer">
        Course Progress : 50%
      </div>
    </div>
  )
}

export default Progress
