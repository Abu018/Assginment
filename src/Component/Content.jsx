import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import arrow from "../../public/arrow.svg";
import pushpin from "../../public/pushpin.svg";
import three from "../../public/three.svg";

const obj = [
  {
    val: "Outing schedule for every department",
    times: "5 Minutes ago",
  },
  {
    val: "Meeting HR Department",
    times: "Yesterday , 12:30PM",
  },
  {
    val: "IT Department need two more talents for UX/UI",
    times: "Yesterday , 09:15AM",
  },
];

const obj2 = [
  {
    val: "Review Candidate Applications",
    times: "Today - 11:38AM",
  },
  {
    val: "Interview With Candidates",
    times: "Today - 12:30PM",
  },
  {
    val: "Short meeting with product designer from IT Department",
    times: "Today - 9:15AM",
  },
];
const data = [
  { month: "Jan", employees: 100 },
  { month: "Feb", employees: 205 },
  { month: "Mar", employees: 150 },
  { month: "Apr", employees: 215 },
  { month: "May", employees: 216 },
];

const Content = () => {
  return (
    <div className="lg:w-[1400px]">
      <div className="border-t-4 border-pink-500 hidden lg:block relative p-4 sm:p-6 lg:p-6 "></div>

      {/* Dashboard Title */}
      <h1 className="text-sky-950 font-semibold text-xl sm:text-2xl mb-6 mt-4">
        DashBoard
      </h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:w-[900px] ">
        <div className="bg-[#FFEFE7] p-4 sm:p-5 rounded-md">
          <p className="text-sky-950 font-semibold">Available Position</p>
          <h1 className="font-semibold text-3xl sm:text-4xl mt-3">24</h1>
          <p className="text-red-600 mt-2">4 Urgently needed</p>
        </div>

        <div className="bg-[#E8F0FB] p-4 sm:p-5 rounded-md">
          <p className="text-sky-950 font-semibold">Job Open</p>
          <h1 className="font-semibold text-3xl sm:text-4xl mt-3">10</h1>
          <p className="text-sky-600 mt-2">4 Active hiring</p>
        </div>

        <div className="bg-pink-200 p-4 sm:p-5 rounded-md lg:bg-[#FFEFE7]">
          <p className="text-sky-950 font-semibold">New Employees</p>
          <h1 className="font-semibold text-3xl sm:text-4xl mt-3">24</h1>
          <p className="text-pink-500 mt-2">4 Department</p>
        </div>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 sm:gap-6 mt-6 lg:h-60 ">
        {/* Employee Stats */}
        <div className="bg-white p-4 sm:p-5 rounded-md border-2">
          <p className="text-sky-950 text-xl sm:text-2xl font-semibold">
            New Employees
          </p>
          <h1 className="font-semibold text-3xl sm:text-4xl mt-3">216</h1>
          <div className="flex justify-between items-center">
            <div className="mt-4">
              <p className="text-[#686868] text-sm">120 men</p>
              <p className="text-[#686868] text-sm">96 women</p>
            </div>
            <div className="w-1/2 h-[69px]">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="employees"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
              <span className="bg-[#FFEFE7] rounded-sm text-sm px-2">
                +2% Past month
              </span>
            </div>
          </div>
        </div>

        {/* Talent Stats */}
        <div className="bg-white p-4 sm:p-5 rounded-md border-2 ">
          <p className="text-sky-950 text-xl sm:text-2xl font-semibold">
            Talent Employees
          </p>
          <h1 className="font-semibold text-3xl sm:text-4xl mt-3">16</h1>
          <div className="flex justify-between items-center">
            <div className="mt-4">
              <p className="text-[#686868] text-sm">6 men</p>
              <p className="text-[#686868] text-sm">10 women</p>
            </div>
            <div className="w-1/2 h-[69px]">
              <ResponsiveContainer>
                <LineChart data={data}>
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="employees"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
              <span className="bg-[#FFEFE7] rounded-sm text-sm px-2">
                +5% Past month
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-[#1B204A] rounded-md p-4 sm:p-5 lg:-mt-40 ">
          <h1 className="font-semibold text-white mb-4">Recently Activity</h1>
          <div className="bg-gradient-to-t from-[#161E54] to-[#161E54] via-[rgba(0,0,0,0.2)] p-4 rounded-md">
            <span className="text-[10px] text-white">
              10.40 AM, Fri 10 Sept 2021
            </span>
            <p className="text-white text-xl sm:text-2xl font-semibold mt-2">
              Your Posted a New Job
            </p>
            <p className="text-white mt-3 text-sm">
              Kindly Check the requirements and terms of work and make sure
              everything is right
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-4">
              <p className="text-white text-sm">Today you make 12 Activities</p>
              <button className="bg-[#FF5151] text-white rounded px-4 py-2 mt-2 sm:mt-0 text-sm">
                See All Activity
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
        {/* Announcements */}
        <div className="bg-white p-4 sm:p-5 rounded-md border-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-[#161E54] text-lg font-semibold">
              Announcement
            </h2>
            <div className="flex items-center bg-[#EFEFEF] px-2 py-1 rounded mt-2 sm:mt-0">
              <span className="text-[#161E54] text-sm">Today, 13 Sep 2021</span>
              <img src={arrow} className="w-4 ml-2" alt="Arrow" />
            </div>
          </div>

          <div className="space-y-3">
            {obj.map((item, index) => (
              <div
                key={index}
                className="bg-[#E0E0E0] rounded-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                {" "}
                <div className="flex flex-col sm:flex-row sm:space-x-2 mb-2 sm:mb-0">
                  {index == 1 && <h5 className="text-black">Priority</h5>}
                  <span className="text-sm">{item.val}</span>
                  {index !== 1 && <h5 className="text-black">Other</h5>}
                  <span className="text-sm text-gray-500">{item.times}</span>
                </div>
                <div className="flex space-x-2">
                  <img src={pushpin} className="w-6" alt="Pin" />
                  <img src={three} className="w-6" alt="Menu" />
                </div>
              </div>
            ))}
          </div>

          <button className="text-red-600 w-full text-center mt-4">
            See All Announcement
          </button>
        </div>

        {/* Schedule */}
        <div className="bg-white p-4 sm:p-5 rounded-md border-2">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <h2 className="text-[#161E54] text-lg font-semibold">Schedule</h2>
            <div className="flex items-center bg-[#EFEFEF] px-2 py-1 rounded mt-2 sm:mt-0">
              <span className="text-[#161E54] text-sm">Today, 13 Sep 2021</span>
              <img src={arrow} className="w-4 ml-2" alt="Arrow" />
            </div>
          </div>

          <div className="space-y-3">
            {obj2.map((item, index) => (
              <div
                key={index}
                className="bg-[#E0E0E0] rounded-md p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div className="flex flex-col sm:flex-row sm:space-x-2 mb-2 sm:mb-0">
                  {index === 1 && <h5 className="text-black">Priority</h5>}
                  <span className="text-sm">{item.val}</span>
                  {index !== 1 && <h5 className="text-black">Other</h5>}

                  <span className="text-sm text-gray-500">{item.times}</span>
                </div>
                <div className="flex space-x-2">
                  <img src={pushpin} className="w-6" alt="Pin" />
                  <img src={three} className="w-6" alt="Menu" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
