import { MdComputer } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex flex-col">
        <div>
          <h1>PHAYVANH.</h1>
        </div>
        <ul>
          <li>
            <MdComputer />
            Dashboard
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
