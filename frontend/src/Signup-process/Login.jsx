import Logo from '../assets/logo.png'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8F1F2]">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-[20px]">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Logo" className="h-16" />
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">Sign in Your Account</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input type="password" id="password" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-gray-700">Remember my preference</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
          </div>
          <div>
            <button type="submit" className="w-full py-2 px-4 bg-[#05204A] text-white rounded-md hover:bg-[#05334a]">
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  )
}

export default Login
