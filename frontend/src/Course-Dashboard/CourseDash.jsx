import All3Buttons from '../Dashboard/All3Buttons'
import Sidebar from '../Sidebar/Sidebar'
import HeaderDash from "./HeaderDash"
import ModuleList from './ModuleList'
import SemesterNavigation from './SemesterNavigation'

const CourseDash = () => {
  return (
        <div className='w-full flex items-center'>
          <div className='mt-3'>
            <HeaderDash />
            <All3Buttons />
            <SemesterNavigation />
            <ModuleList />
          </div>
        </div>
  )
}

export default CourseDash
