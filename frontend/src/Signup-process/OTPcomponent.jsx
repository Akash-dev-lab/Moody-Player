// OTP.jsx
import { useState } from 'react';
import { initialOtpState } from './OtpUtils';
import Logo from '../assets/logo.png' // Adjust the path as necessary

const OTPcomponent = () => {
  const [otp, setOtp] = useState(initialOtpState);

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Entered OTP is: " + otp.join(''));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E8F1F2]">
      <div className="bg-white p-8 rounded-[20px] shadow-lg w-full max-w-md">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="Oxford Logo" className="h-16" />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-4">Sent OTP on Your Email</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center space-x-2">
            {otp.map((data, index) => {
              return (
                <input
                  className="w-12 h-12 text-center border rounded-lg focus:outline-none focus:border-blue-500"
                  type="text"
                  name="otp"
                  maxLength="1"
                  key={index}
                  value={data}
                  onChange={e => handleChange(e.target, index)}
                  onFocus={e => e.target.select()}
                />
              );
            })}
          </div>
          <button className=" text-blue-600 hover:underline">Resent OTP</button>
          <br />
          <button className="flex justify-center items-center text-blue-600 hover:underline" onClick={() => console.log('Go to Login Page')}>Back to Login Page</button>

          <button className="w-full py-3 bg-[#00173D] text-white rounded-lg hover:bg-[#05334a] focus:outline-none" type="submit">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default OTPcomponent;
