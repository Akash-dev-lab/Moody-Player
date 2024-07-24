
import Chat from './ChatMessage'
import ForumHeader from './ForumHeader'
import Lectures from './Lectures'
import Searchbar from './Searchbar'
import Students from './Students'

const ForumDash = () => {
  return (
    <>
      <div className='container flex flex-col'>
        <div className='mt-3 flex flex-row'>
          <ForumHeader />
        </div>

        <div className='flex space-x-6'>
          <div className='flex-col'>
            <Searchbar />
            <Lectures />
            <Students />
          </div>
            <Chat />
        </div>
      </div>
    </>
  )
}

export default ForumDash
