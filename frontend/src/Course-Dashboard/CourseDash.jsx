import All3Buttons from '../Dashboard/All3Buttons'
import Sidebar from '../Sidebar/Sidebar'
import HeaderDash from "./HeaderDash"
import ModuleList from './ModuleList'
import SemesterNavigation from './SemesterNavigation'

const CourseDash = () => {
  return (
    <div className="bg-[#E8F1F2] flex ">
      <div className='gap-20 flex justify-center p-4'>
        <Sidebar />

        <div className='container w-full'>
        <HeaderDash />
        <All3Buttons />
        <SemesterNavigation />
        <ModuleList />
        </div>
       
      </div>

      

    </div>
  )
}

export default CourseDash
