const lectures = [
  {
    name: "Mr. Niruban",
    time: "Today, 9.52pm",
    img: "https://s3-alpha-sig.figma.com/img/ee16/b8a6/91dc58dc8f6093ec9274311c90aefd24?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AXfNLOvpJGDym6kQaNh4S6OMl1IDt9qIHkEVpDCUw9pde~TkgHOXknPcsEkM7Bvf7BUvBYKWw4C71aRtH~0o2VzaiyzYjpvcpmZxc5nwvHigQLV2krVUQwFpbBSFgqEZ2MsKu6dmHpc-QtDgZuBpGE-4yldFMGu~eoWK~mQLUpf0QthaHxkg04s8kCdCCdAems73MqFW4gP7KVsj88RSoRikCbGoh~gALe~Kb0AvxyCbDNP9yvfUf71pjFViQ3FYBa1~xa4C1DJht8AJlO~dchxd~dQzQVM1oePt~YItQgpfCjTrFR~RCXKibX2Y2KNSP3Hq9HeeEFfll--mrAijhg__",
  },
  {
    name: "Mr. Sam",
    time: "Yesterday, 12.31pm",
    img: "https://s3-alpha-sig.figma.com/img/ab06/6cd5/c77eeacd24c6bf1d8bc5d8e32682949f?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CjJ0rWftGSnr9yG~kBiLqrFKCZlvzWqbsq2AQYl~~bTylNrfP2-bUCwmjfrJjyRRAsP~hIW9DhEdnC9d03fX1fiUZYKC3jPekDWYHHbO77xOUG9ucZkP8ERpt1q5r0U2uGy8UBlwyr4XKIBl4uH3AqOftLn88qlTyl9cs-Tpzdzvw~IJLtvFhjlpO8b5OiIh9q8oc5xIuwx8-63Z6wLSHqYBfJeJyoTiesMt3j-wKkSGd-RuCvm3PC4t4Uv2QdnQF-VnPfWH833xtzOHPM47e0wEgqhIhhoJ2jLqsqmga4BmZquXdFudr1I33Khc0oQjWytVAD5xCGaR9eMh2sI5nA__",
  },
  {
    name: "Mr. Nirmal",
    time: "Wednesday, 9.12am",
    img: "https://s3-alpha-sig.figma.com/img/5c18/83de/24c1fdf57172ccce2431c9240626ff80?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OcgYLs4rVby9x7GNSVneFiq61BwllXroxWkpSyFteCkecYGILCfHRUzeQ-YCjfoCfJItTyh1w6nnKd8RLqYQtRb-U2Vl4Sk0ozDoXbQXv~U6PaE-sOM~WoBTbpdzLISB-OBNx-R0kv7ty22Z~D0XOsfBEOaBomgAbB58MaCef75wX3LBZjI2ntPGMI9VozE6uK~lnUkCZ9pctX66KAmyBt3L3JZIMV7QdEr9Cm1rEb7rTZi5OcDRskrBhkC3ClHhnRi-Tgu7kirRfM27DCNgI7okVwipAxx9Ir-oDB5UCXx2UmCFl4lfGKYYYals1MDQhKE0-uMnEpUAvEwbljcGcA__",
  },
];

const Lectures = () => {
  return (
    <div className="w-full h-1/2 mx-auto bg-white shadow-lg rounded-lg">
      <div className="py-4 px-6">
        <h2 className="text-2xl font-bold text-gray-800">Lectures</h2>
        <ul className="divide-y divide-gray-300">
          {lectures.map((lecture, index) => (
            <li key={index} className="flex items-center py-4">
              <img
                className="w-12 h-12 rounded-full object-cover"
                src={lecture.img}
                alt={lecture.name}
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-700">
                  {lecture.name}
                </h3>
                <p className="text-gray-500">{lecture.time}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Lectures;
