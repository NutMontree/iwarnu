import React, { useEffect, useState } from 'react'

export default function ShowPage() {

    const [reports, setReports] = useState([])

    const fetchReportsData = () => {
        fetch('https://vite-iwarnu-server.vercel.app/server/reports')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setReports(data)
            })
    }

    useEffect(() => {
        fetchReportsData()
    }, [])


    return (
        <div >
            {reports.length > 0 && (
                <ul className="mt-8 grid gap-x-6 gap-y-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {reports.map(report => (
                        <li key={report.id}>
                            <div>
                                <h2 className="font-bold">สถานที่ที่เกิดเหตุ {report.address}</h2>
                                <h3 className="text-sm text-gray-500">เรื่องที่ร้องเรียน {report.title}</h3>
                                <h3 className="text-sm text-gray-500">เบอร์โทรศัพท์ {report.phone}</h3>
                                <h3 className="text-sm text-gray-500">เวลาที่เกิดเหตุ {report.date}</h3>
                                <h3 className="text-sm text-gray-500">วันที่เกิดเหตุ {report.time}</h3>
                                <h3 className="text-sm text-gray-500">คำอธิบาย {report.description}</h3>
                                <h3 className="text-sm text-gray-500">ตำบล {report.district}</h3>
                                <h3 className="text-sm text-gray-500">อำเภอ {report.amphoe}</h3>
                                <h3 className="text-sm text-gray-500">จังหวัด {report.province}</h3>
                                <h3 className="text-sm text-gray-500">รหัสไปรษณีย์ {report.zipcode}</h3>
                                <br />
                            </div>
                        </li>
                    ))}
                </ul>
            )
            }
        </div >
    )
}
