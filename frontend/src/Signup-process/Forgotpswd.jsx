import Logo from '../assets/logo.png'

const Forgotpswd = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E8F1F2]">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-[20px]">
                <div className="flex justify-center mb-6">
                    <img src={Logo} alt="Logo" className="h-16" />
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">Forgot Password</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            id="username"
                            type="text"
                        />
                    </div>

                    <div>
                        <button type="submit" className="mt-5 w-full py-2 px-4 bg-[#05204A] text-white rounded-md hover:bg-[#05334a]">
                            Submit
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>
                </p>
            </div>
        </div>

                )
}

                export default Forgotpswd
