const SemesterNavigation = () => {
  return (
    <div className="flex bg-[#05204A] rounded-full p-1 mt-14">
      <div className="px-4 py-2 text-white bg-orange-500 rounded-full cursor-pointer">Semester 01</div>
      <div className="px-4 py-2 text-white rounded-full cursor-pointer hover:text-orange-500">Semester 02</div>
      <div className="px-4 py-2 text-white rounded-full cursor-pointer hover:text-orange-500">Semester 03</div>
      <div className="px-4 py-2 text-white rounded-full cursor-pointer hover:text-orange-500">Semester 04</div>
    </div>
  )
}

export default SemesterNavigation
