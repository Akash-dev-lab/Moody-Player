import CourseDash from "./Course-Dashboard/CourseDash"
import Sidebar from "./Sidebar/Sidebar"


const Course = () => {
  return (
    <div className="bg-[#E8F1F2] h-full  ">
      <div className="container flex gap-20 justify-between w-full mx-auto p-4">
        <Sidebar />

          <div className="w-full flex items-center">
            <CourseDash />
          </div>
        </div>
      </div>
  )
}

export default Course
