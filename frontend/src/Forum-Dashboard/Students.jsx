const students = [
    { name: "Anil", message: "April fool’s day", time: "Today, 9.52pm", img: "https://s3-alpha-sig.figma.com/img/9303/6618/c1b66a9da2ebfd4a91266926849a8c7d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HoH-45Rmr5GGHnG5LgkS7CIYuhakifSGibbPAKPb9~U9OCZAwIkh2WK9CAesFwmxfuzQTT~MxBMi34mNdJHWCVtH-PlQwopy37TLQq5~aXgdxPvBTSaLnwWwFJKMEusMotsWqmf7T2AubqUQXregeMSMIUyU1tEmCe-fwHnH8KCe3RMPZrMge0Kov3NwNDTc1kFGRrBQDXcLJaAuZuy1MBJI8xxjeS2W6hyiSCtaW0bMCKuQdYQiKFMjdDrrn7ejkWCP~fZGQ9tFCwBVJ1qY0Kr4Cq-85AFsfP99ZgYeg1aPQzl69ftu4GUFFa5k2qx0timB7rqEWZEH6egnK23i6A__", read: true, notifications: 0 },
    { name: "Chuuthiya", message: "", time: "Today, 12.11pm", img: "https://s3-alpha-sig.figma.com/img/d7e0/f283/6249dc25e19b0bd30ce68f7ffdb7cb82?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SKBHLD7fE0pNrEcreYTPsDOLRViGaW9tmO01I8Gne3ofXT-EESncQkSP4688e8iPpCGJnBLTU5Ogw-02zS22IGSqe7UyqVnBwGVrU5-~2osGSTqRIPlFzvZv-jp2EfhfdPius8DaXkLhUP~r9nAkeDcXG4AOTZZTNWu7Gh4fx~g341YZuOKs6mB9VKsaY1YfAatay3l9kJnKYQoQJqQicarFfizmhiPVYMAu2~ZyVmzfA99HX7iu2rc~WL7Jy~AFWkeuEHHdXeClp1rDoN4MJf9-8PCF0cBe3yiguCKBUXohdwZIGlxQh8QSXKYiERUp7UAZv7MkOvVIQ15lZffe8Q__", read: false, notifications: 1 },
    { name: "Mary", message: "You have to report it...", time: "Today, 2.40pm", img: "https://s3-alpha-sig.figma.com/img/6ce5/0719/8edb0714aa23e5f91d4c36ce73a0247f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nsBl7Aa1tiZ26V-~JxRSv6F9ECCWfUF119X~U02zUUAhrj1Yut~cVmD1Txybax0DImQlZ4CVjtLH7DnbDvCt1m2zQHwOXXjRDU5KnaeW~5TFGCzMY3PqgDGqoBurECsxs7H45boVzCbrRhAabUh-0JhYT9gfrxiifzQrDmMzhknaV9cyHZKxIYjawIS8nuwu8l4uVGwBgqVT7qtC7BcdEvcM8-y-6s8BqoABcuP0~WWoq15uy9YStcbTgRszap7j-W6wPRDMrB6IIAvVKZ5OyUGXKIky5M4nfWlZJuVuHx~9v1Rxgp17FR99SnCJLODzlJGiZ0Dnj~Cl7JBWWZ5Pqg__", read: false, notifications: 1 },
    { name: "Bill Gates", message: "Nevermind bro", time: "Yesterday, 12.31pm", img: "https://s3-alpha-sig.figma.com/img/691d/bcac/8a21d19bd397d3ad541e5d2980d5f91c?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RZca2Qozn1jHV1IBcQFvZJuTsdAhp9~aVTNlhii9CmMWJGd4zNx8Y1SIluWBnGwJpnCuvMpN~MDhFFh4-qnFOU2Ckd8tM2WU0HJMH8BL4IQySz60TKWh2HwJ38u6Slk9s76mc0zSw794pH0qU0rc5Pvoal38xN53sf4huxDfnVgKy9xSpsH-A0erHrGMPWnCXykgirCsxP7cx~2xkcZkMiR3hpELuEoQCnd-Qe8HhXT9m~aTOSQZnm-DFY9oO2jsKfXb0hwPTKhnudwa8CShYuGam52mNSLZhE-f5YltWdFhBNV1-IamQTUnIO-Z85k7BcD5c0xma1aJ7K-dxbw4dw__", read: false, notifications: 5 },
    { name: "Victoria H", message: "Okay, brother. let’s see...", time: "Wednesday, 11.12am", img: "https://s3-alpha-sig.figma.com/img/a9df/02de/c639021e8a6011d0469139fdf975ac55?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RCtQ4sQI0sId~VRJu-h7ZQwTY~xAEYDKu18ooHmxtYnX2Z75cY3R57ggFfT-1LbBKxQK9bWiJw-IpIKSELE8Vjg5ibG2QCtmU8Fr~mwtDPa2c4LH8JTte9iPpstHonYOWrVMSxKkQ1vaXcXrQAroAaKBMoQ2Qthw3rKP-8oAn-3njFwwMzL8NLAAMSsqsu7FBNmDH7kEesL0YZEZxMFNqm1w79sVw9Q98vxFTies2SNN0Ez2iZSy~3mPAorEdcF-QZXAwcCTOZr7bkvOeqwjP5S4F8ji11zvU~us9njTJhXmEk2H9N9iF41TmHJv06xFxa2XpzmjxiekIfFcAHWUqQ__", read: false, notifications: 0 },
  ];

const Students = () => {
  return (
    <div className="w-96 bg-white shadow-lg rounded-lg mt-4">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-gray-800">Students</h2>
        <ul className="divide-y divide-gray-300">
          {students.map((student, index) => (
            <li key={index} className="flex items-center py-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={student.img}
                alt={student.name}
              />
              <div className="ml-4 flex-1">
                <h3 className="text-lg font-semibold text-gray-700">{student.name}</h3>
                <p className="text-gray-500">{student.message}</p>
                <p className="text-gray-500">{student.time}</p>
              </div>
              <div className="ml-auto flex items-center">
                {student.read ? (
                  <svg
                    className="w-6 h-6 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                ) : null}
                {student.notifications > 0 ? (
                  <span className="ml-2 inline-flex items-center justify-center h-6 w-6 text-xs font-semibold text-white bg-red-500 rounded-full">
                    {student.notifications}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Students
