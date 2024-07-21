import Sidebar from './Sidebar/Sidebar'
import Dashboard from './Dashboard/Dashboard'

const Home = () => {
  return (
    <div className="bg-[#E8F1F2] h-full">
      <div className="container flex gap-20 justify-between w-full mx-auto p-4">
        <Sidebar />

        <div className="w-full flex items-center">
          <div className='mt-3'>
          <Dashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
