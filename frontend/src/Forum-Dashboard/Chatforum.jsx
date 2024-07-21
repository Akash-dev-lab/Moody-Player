import React from 'react';

const Chatforum = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Lectures</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/frontend/src/assets/chatimg1.jpg"
                  alt="Mr. Niruban"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>Mr. Niruban</span>
              </div>
              <span>Today, 9:52pm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/frontend/src/assets/chatimg2.jpg"
                  alt="Mr. Sam"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <span>Mr. Sam</span>
              </div>
              <span>Yesterday, 12:31pm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img src="/frontend/src/assets/chatimg3.jpg" className="w-10 h-10 rounded-full mr-2"/>
                <span>Mr. Nirmal</span>
              </div>
              <span>Wednesday, 9:12am</span>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Students</h2>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/frontend/src/assets/logo.png.jpg"
                  alt="Anil"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <div>Anil</div>
                  <div className="text-sm text-gray-500">April fool's day</div>
                </div>
              </div>
              <span>Today, 9:52pm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/frontend/src/assets/chatimg5.jpg/"
                  alt="Chuuthiya"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <div>Chuuthiya</div>
                  <div className="text-sm text-gray-500">You have to report it...</div>
                </div>
              </div>
              <span>Today, 12:11pm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="./"
                  alt="Mary"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <div>Mary</div>
                  <div className="text-sm text-gray-500">You have to report it...</div>
                </div>
              </div>
              <span>Today, 2:40pm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/frontend/src/assets/chatimg7.jpg"
                  alt="Bill Gates"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <div>Bill Gates</div>
                  <div className="text-sm text-gray-500">Nevermind bro</div>
                </div>
              </div>
              <span>Yesterday, 12:31pm</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="path/to/victoria-h.jpg"
                  alt="Victoria H"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <div>Victoria H</div>
                  <div className="text-sm text-gray-500">Okay, brother. let's see...</div>
                </div>
              </div>
              <span>Wednesday, 11:12am</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatforum;
