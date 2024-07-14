import { Link } from 'react-router-dom';
import Home from './Homebutton';
import Coursebutton from './Coursebutton';
import Assignmentbtn from './Assignmentbtn';
import Timetablebtn from './Timetablebtn';
import Forumbtn from './Forumbtn';
import Settingsbtn from './Settingsbtn';
import Profile from './Profile';
import Navbar from './Navbar';


const Sidebar = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="bg-[#05204A] w-80 rounded-[20px] p-4">
        <Navbar />
        <Profile />
        
        <div className="buttons p-10 flex flex-col md:flex-col lg:flex-col 2xl:flex-col md:shrink-0">
          <Link to="/home"><Home /></Link>
          <br />
          <Link to="/course"><Coursebutton /></Link>
          <br />
          <Link to="/assignment"><Assignmentbtn /></Link>
          <br />
          <Link to="/timetable"><Timetablebtn /></Link>
          <br />
          <Link to="/forum"><Forumbtn /></Link>
          <br />
          <Link to="/settings"><Settingsbtn /></Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar