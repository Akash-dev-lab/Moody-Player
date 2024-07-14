import { useState } from 'react';
import Logo from '../assets/logo.png';
import SignupApi from './SignupApi';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await SignupApi(username, email, password);
            // Handle successful response
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#E8F1F2]">
            <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-[20px]">
                <div className="flex justify-center mb-6">
                    <img src={Logo} alt="Logo" className="h-16" />
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">Sign Up Your Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            id="username"
                            type="text"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>

                    {error && <div className="text-red-600">{error}</div>}

                    <div>
                        <button type="submit" className="w-full py-2 px-4 bg-[#05204A] text-white rounded-md hover:bg-[#05334a]">
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>
                </p>
            </div>
        </div>
    );
};

export default Register;