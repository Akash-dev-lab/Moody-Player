import { IoSettingsSharp } from "react-icons/io5";

const Settingsbtn = () => {
  return (
    <div>
      <button className="button flex gap-7 bg-[#e1e2ef] border-r-[45px] rounded-lg p-1 w-full">
            <div className='flex justify-center items-center mx-1'><IoSettingsSharp style={{ fontSize: 24, width: 24 }} />
            </div>
            <div className='font-medium'>Settings</div>
          </button>
    </div>
  )
}

export default Settingsbtn
