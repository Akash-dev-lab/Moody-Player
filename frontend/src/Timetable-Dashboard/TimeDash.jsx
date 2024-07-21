import Sidebar from '../Sidebar/Sidebar'
import Classes from './Classes'
import LectureTable from './LectureTable'
import TimeHeaderdash from './TimeHeaderdash'

const TimeDash = () => {
  return (
        <div className='w-full flex items-center'>
          <div className='mt-3'>
            <TimeHeaderdash />
            <Classes />
            <LectureTable />
          </div>
        </div>
  )
}

export default TimeDash
