import { IoNotifications } from "react-icons/io5";
import { TbPasswordUser } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import { IoDocumentLockSharp } from "react-icons/io5";
import { FaSmile } from "react-icons/fa";
import { MdHelp } from "react-icons/md";
import { MdOutlineWavingHand } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const SettingsMenu = () => {
    return (
        <>
            <div className="bg-white shadow-lg rounded-lg whitespace-normal p-4 w-96 mx-auto">
                <ul className="space-y-4">
                    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <IoNotifications />
                            <span>Notifications</span>
                        </a>

                        <a href="#"><IoIosArrowForward /></a>
                    </li>

                    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <TbPasswordUser />
                            <span>Change Password</span>
                        </a>

                        <a href="#"><IoIosArrowForward /></a>
                    </li>

                    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <MdOutlineSecurity />
                            <span>Security</span>
                        </a>

                        <a href="#"><IoIosArrowForward /></a>
                    </li>

                    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <FaUserFriends />
                            <span>Friends</span>
                        </a>

                        <a href="#"><IoIosArrowForward /></a>
                    </li>

                    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <IoDocumentLockSharp />
                            <span>Enable Two Step Verification</span>
                        </a>

                        <a href="#"><IoIosArrowForward /></a>
                    </li>

                    <li className="border-b border-gray-200 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <FaSmile />
                            <span>Display and languages</span>
                        </a>

                        <a href="#"><IoIosArrowForward /></a>
                    </li>

                    <li className="mt-5 py-2 flex justify-between items-center">
                        <a href="#" className="flex gap-5 items-center text-gray-700">
                            <MdHelp />
                            <span>Help</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-center text-center mt-4 py-2">
                <button className="flex text-white gap-2 mt-4 border-none justify-center rounded-lg py-2 items-center bg-[#051f4add] hover:bg-[#05204A] w-full ">
                    Logout
                    <MdOutlineWavingHand />
                </button>
            </div>
        </>
    );
};

export default SettingsMenu;
