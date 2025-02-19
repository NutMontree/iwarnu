import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataTime from "../component/DataTime";

export default function IndexPage() {
  const [reports, setReports] = useState([]);
  const fetchReportsData = () => {
    fetch("https://iwarnu-server.vercel.app/reports")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setReports(data);
      });
  };

  useEffect(() => {
    fetchReportsData();
  }, []);

  return (
    <div>
      <div className="mt-7">
        <div className=" flex-1">
          <DataTime />
        </div>

        <div className="flex ">
          <div className="mt-4 pr-8">
            <Link
              className="inline-flex gap-1 bg-primary text-white py-2 px-6 rounded-full"
              to={"/reports/new"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
              ร้องเรียน/แจ้งความเบาะแส
            </Link>
          </div>
          <div className="mt-4">
            <Link
              className="inline-flex gap-1 bg-blue-500 bg-blue text-white py-2 px-6 rounded-full"
              to={"/SearchPage"}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                />
              </svg>
              ค้นหาเบอร์โทร
            </Link>
          </div>
        </div>
      </div>

      <div>
        <ul className="mt-4 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {reports.map((report) => (
            <li key={report.id}>
              <h2 className="font-bold">สถานที่ที่เกิดเหตุ {report.address}</h2>
              <h3 className="text-sm text-gray-500">
                เรื่องที่ร้องเรียน {report.title}
              </h3>
              <h3 className="text-sm text-gray-500">
                เบอร์โทรศัพท์ {report.phone}
              </h3>
              <h3 className="text-sm text-gray-500">
                เวลาที่เกิดเหตุ {report.date}
              </h3>
              <h3 className="text-sm text-gray-500">
                วันที่เกิดเหตุ {report.time}
              </h3>
              <h3 className="text-sm text-gray-500">
                คำอธิบาย {report.description}
              </h3>
              <h3 className="text-sm text-gray-500">ตำบล {report.district}</h3>
              <h3 className="text-sm text-gray-500">อำเภอ {report.amphoe}</h3>
              <h3 className="text-sm text-gray-500">
                จังหวัด {report.province}
              </h3>
              <h3 className="text-sm text-gray-500">
                รหัสไปรษณีย์ {report.zipcode}
              </h3>
              <br />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
