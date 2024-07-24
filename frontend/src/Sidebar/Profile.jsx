import { useState } from "react"
import ProfileCard from '../ProfileCard/ProfileCard'


const Profile = () => {
  const [showProfileCard, setShowProfileCard] = useState(false);

  const handleLogoClick = () => {
    setShowProfileCard(!showProfileCard);
  }
  return (
    <>
      <div className='p-10 '>
        <div className="user-info flex justify-center items-center border-dashed border-2 p-1 border-[#e1e2ef] gap-5 rounded-lg">
          <button onClick={handleLogoClick}>
            <img src="https://avatar.iran.liara.run/public/3" className="md:w-10 lg:w-12 xl:w-14 2xl:w-16 cursor-pointer" width="30%" alt="User Icon" />
          </button>
          <div className='text-white'>
            <h3>Hi, Alex</h3>
            <p>E173037</p>
          </div>

        </div>
        {showProfileCard && <ProfileCard />}
      </div >
    </>
  )
}

export default Profile
