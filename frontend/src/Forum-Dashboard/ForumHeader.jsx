import { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { SiGooglemessages } from "react-icons/si";
import NotificationBar from "../Notification-bar/NotificationBar";

const ForumHeader = () => {
    const [showNotifications, setShowNotifications] = useState(false);

  const handleBellClick = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <div className="dashboard-header h-28 flex items-center justify-between">
    <div className="title flex flex-col items-center cursor-pointer">
      <h1 className="text-2xl font-bold text-[#00173D]">Forum</h1>
    </div>
    
    <div className="icons flex items-center gap-4">
      <FaRegBell className="mr-2 cursor-pointer" onClick={handleBellClick} size={25} />
      <div className="absolute top-32 right-48 z-0">
      {showNotifications && <NotificationBar />}
      </div>
      <SiGooglemessages className="cursor-pointer" size={25} />
    </div>
  </div>
  );
};

export default ForumHeader
