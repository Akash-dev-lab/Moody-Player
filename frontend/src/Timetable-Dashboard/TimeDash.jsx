import Sidebar from '../Sidebar/Sidebar'
import Classes from './Classes'
import LectureTable from './LectureTable'
import TimeHeaderdash from './TimeHeaderdash'

const TimeDash = () => {
  return (
    <div className="bg-[#E8F1F2] flex ">
      <div className='gap-20 flex justify-center p-4'>
        <Sidebar />

        <div className='container w-full'>
            <TimeHeaderdash />
            <Classes />
            <LectureTable />
        </div>
       
      </div>

      

    </div>
  )
}

export default TimeDash
