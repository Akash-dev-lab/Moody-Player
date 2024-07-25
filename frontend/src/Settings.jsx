import SettingsDash from './Settings/SettingsDash'
import Sidebar from './Sidebar/Sidebar'

const Settings = () => {
  return (
    <div className='bg-[#E8F1F2] h-full'>
      <div className='container flex gap-20 justify-between mx-auto w-full p-4'>
        <Sidebar />
        <SettingsDash />
      </div>
    </div>
  )
}

export default Settings