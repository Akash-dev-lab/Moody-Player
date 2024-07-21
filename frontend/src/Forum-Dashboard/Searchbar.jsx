const Searchbar = () => {
  return (
    <div className="relative rounded-3xl shadow-sm mb-4">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-2 border drop-shadow-blue-700 rounded-3xl focus:outline-none focus:ring-blue-700 focus:border-yellow-500 sm:text-sm"
        placeholder="Search"
      />
    </div>
  );
};

export default Searchbar;
