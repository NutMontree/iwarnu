import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <header className="grid grid-flow-col">
        {/* <div className="flex justify-start gap-20 text-center border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
          <div>ค้นหา</div>
          <button className="bg-primary text-white p-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        </div> */}
        <div></div>

        <div className="flex justify-center">
          <Link to={"/"} className="flex items-center gap-1">
            <span className="font-bold text-3xl">I WARN U</span>
          </Link>
        </div>

        <div className="flex justify-end">
          <Link
            to={user ? "/account" : "/login"}
            className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            {!!user && <div>{user.name}</div>}
          </Link>
        </div>
      </header>
    </div>
  );
}
