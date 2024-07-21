import Sidebar from "./Sidebar/Sidebar"
import TimeDash from "./Timetable-Dashboard/TimeDash"
const Timetable = () => {
  return (
    <div className="bg-[#E8F1F2] h-full">
      <div className="container flex gap-20 justify-between mx-auto p-4">
        <Sidebar />

        <div className="w-full flex items-center">
          <TimeDash />
        </div>
      </div>
    </div>
  )
}

export default Timetable
