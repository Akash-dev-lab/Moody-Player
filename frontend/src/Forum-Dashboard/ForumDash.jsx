
import ForumHeader from './ForumHeader'
import Lectures from './Lectures'
import Searchbar from './Searchbar'
import Students from './Students'

const ForumDash = () => {
  return (
    <>
    <div className='w-full flex items-center'>
      <div className='mt-3'>
        <ForumHeader />
        <Searchbar />
        <Lectures />
        <Students />
      </div>
    </div>
    </>
  )
}

export default ForumDash
