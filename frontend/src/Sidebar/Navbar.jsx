import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Logo from '../assets/logo.png'

const Navbar = () => {

  return (
    <div className="flex justify-center items-center gap-x-14">
      <img src={Logo} alt="Oxford Logo" width="12%" className='cursor-pointer md:w-10 lg:w-12 xl:w-14 2xl:w-16' /> {/* Props Passed {Logo} ! */}
      <MenuRoundedIcon sx={{ fontSize: 24, marginLeft: 8, color: 'white', cursor: 'pointer'}} />
    </div>
  )
}

export default Navbar