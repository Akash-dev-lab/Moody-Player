import { useState } from 'react';

function LectureTable() {
  const [lectures, setLectures] = useState([
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      subject: 'English',
      startTime: '9.00',
      endTime: '1.00',
      date: '20.10.2023',
      isChecked: true,
    },
    {
      id: 2,
      name: 'Doe',
      email: 'doe@gmail.com',
      subject: 'Programming',
      startTime: '9.00',
      endTime: '1.00',
      date: '21.10.2023',
      isChecked: false,
    },
    {
      id: 3,
      name: 'Sam',
      email: 'sam@gmail.com',
      subject: 'Database',
      startTime: '9.00',
      endTime: '1.00',
      date: '22.10.2023',
      isChecked: false,
    },
    {
      id: 4,
      name: 'Kumar',
      email: 'kumar@gmail.com',
      subject: 'Networking',
      startTime: '9.00',
      endTime: '1.00',
      date: '23.10.2023',
      isChecked: false,
    },
    {
      id: 5,
      name: 'Sanjay',
      email: 'sanjay@gmail.com',
      subject: 'Security',
      startTime: '9.00',
      endTime: '1.00',
      date: '24.10.2023',
      isChecked: false,
    },
  ]);

  const handleCheckboxChange = (id) => {
    setLectures((prevLectures) =>
      prevLectures.map((lecture) =>
        lecture.id === id ? { ...lecture, isChecked: !lecture.isChecked } : lecture
      )
    );
  };

  return (
    <div className="bg-white shadow-md rounded-md p-4 mt-20">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Lectures</h2>
        <div className="flex gap-2">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-md">
            Previous
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">
            Next
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span>Lecture Name</span>
                </div>
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Subject
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start Time
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End Time
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {lectures.map((lecture) => (
              <tr key={lecture.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2"
                      checked={lecture.isChecked}
                      onChange={() => handleCheckboxChange(lecture.id)}
                    />
                    <div className="flex items-center">
                      <img
                        src={`https://ui-avatars.com/api/?name=${lecture.name}`}
                        className="w-8 h-8 rounded-full mr-2"
                        alt={lecture.name}
                      />
                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {lecture.name}
                        </p>
                        <p className="text-xs text-gray-500">{lecture.email}</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {lecture.subject}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{lecture.startTime}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{lecture.endTime}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{lecture.date}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LectureTable;