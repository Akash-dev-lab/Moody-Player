import Sidebar from './Sidebar/Sidebar'
import ForumDash from './Forum-Dashboard/ForumDash'

const Forum = () => {
  return (
    <div className='bg-[#E8F1F2] h-full'>
      <div className='container flex gap-20 justify-between mx-auto w-full p-4'>
        <Sidebar />
        <ForumDash />
      </div>
    </div>
  )
}  

export default Forum