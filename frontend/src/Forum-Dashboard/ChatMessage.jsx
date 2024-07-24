const ChatMessage = ({ sender, message, time, isUser }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs rounded-lg px-4 py-2 ${isUser ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        <div>{message}</div>
        <div className="text-xs text-gray-500 text-right">{time}</div>
      </div>
    </div>
  );
};

const Chat = () => {
  const messages = [
    { sender: 'Anil', message: 'Hey There!', time: 'Today, 8.30pm', isUser: false },
    { sender: 'Anil', message: 'How are you?', time: 'Today, 8.30pm', isUser: false },
    { sender: 'You', message: 'Hello!', time: 'Today, 8.33pm', isUser: true },
    { sender: 'You', message: 'I am fine and how are you', time: 'Today, 8.34pm', isUser: true },
    { sender: 'Anil', message: 'I am doing well, Can we meet', time: 'Today, 8.36pm', isUser: false },
    { sender: 'You', message: 'Yes Sure!', time: 'Today, 8.58pm', isUser: true },
    { sender: 'Anil', message: 'Tell me about the weather', time: 'Today, 8.30pm', isUser: false },
    { sender: 'Anil', message: 'something else', time: 'Today, 8.30pm', isUser: false },
    { sender: 'You', message: 'What happend ?', time: 'Today, 8.33pm', isUser: true },
    { sender: 'You', message: 'Keep Code better !', time: 'Today, 8.34pm', isUser: true },
    { sender: 'Anil', message: 'Better Readability', time: 'Today, 8.36pm', isUser: false },
  ];

  return (
    <div className=" w-[800px] p-4 bg-white shadow-lg rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <img className="w-10 h-10 rounded-full" src="https://s3-alpha-sig.figma.com/img/9303/6618/c1b66a9da2ebfd4a91266926849a8c7d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoH-45Rmr5GGHnG5LgkS7CIYuhakifSGibbPAKPb9~U9OCZAwIkh2WK9CAesFwmxfuzQTT~MxBMi34mNdJHWCVtH-PlQwopy37TLQq5~aXgdxPvBTSaLnwWwFJKMEusMotsWqmf7T2AubqUQXregeMSMIUyU1tEmCe-fwHnH8KCe3RMPZrMge0Kov3NwNDTc1kFGRrBQDXcLJaAuZuy1MBJI8xxjeS2W6hyiSCtaW0bMCKuQdYQiKFMjdDrrn7ejkWCP~fZGQ9tFCwBVJ1qY0Kr4Cq-85AFsfP99ZgYeg1aPQzl69ftu4GUFFa5k2qx0timB7rqEWZEH6egnK23i6A__" alt="" />
        <div>
          <div className="font-bold">Anil</div>
          <div className="text-xs text-gray-500">Online - Last seen, 2.02pm</div>
        </div>
      </div>
      <div className="border-t border-gray-200 pt-4">
        {messages.map((msg, index) => (
          <ChatMessage key={index} {...msg} />
        ))}
      </div>
      <div className="">
        <input
          type="text"
          placeholder="Type your message here..."
          className="mt-4 w-full p-2 border rounded-lg"
        />
      </div>
    </div>
  );
};

export default Chat;
