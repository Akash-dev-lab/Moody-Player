import Image1 from '../assets/img.jpg'
import Image2 from '../assets/img2.jpg'
import Image3 from '../assets/img3.jpg'
import image4 from '../assets/img4.jpg'
import Image5 from '../assets/img5.jpg'

const notifications = [
  {
    id: 1,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '1m ago',
    image: Image1, // Replace with actual image URL
  },
  {
    id: 2,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '1m ago',
    image: Image2, // Replace with actual image URL
  },
  {
    id: 3,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '1m ago',
    image: Image3, // Replace with actual image URL
  },
  {
    id: 4,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '1m ago',
    image: {image4}, // Replace with actual image URL
  },
  {
    id: 5,
    message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    time: '1m ago',
    image: Image5, // Replace with actual image URL
  },
];

const NotificationBar = () => {
  return (
    <div className="max-w-sm mx-auto p-4 bg-[#EBE8D0] rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4 text-center">Notification</h2>
      {notifications.map((notification) => (
        <div key={notification.id} className="flex items-center mb-4">
          <img
            src={notification.image}
            alt="Profile"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <p className="text-sm">{notification.message}</p>
            <p className="text-xs text-gray-500">{notification.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationBar;
