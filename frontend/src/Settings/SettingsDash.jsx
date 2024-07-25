import SettingsHeader from "./SettingsHeader"
import SettingsMenu from "./SettingsMenu"

const SettingsDash = () => {
  return (
    <div className='container flex flex-col'>
      <div className='mt-3 flex flex-row'>
        <SettingsHeader />
      </div>

      <div className="container flex justify-center">
        <div className="flex-col">
          <SettingsMenu />
        </div>
      </div>
    </div>
  )
}

export default SettingsDash
