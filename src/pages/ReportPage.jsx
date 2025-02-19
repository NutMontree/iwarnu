import axios from 'axios';
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from 'react-router-dom';
import AddressLink from "../component/AddressLink";

export default function ReportPage() {
    const { id } = useParams();
    const [redirect, setRedirect] = useState(false);
    const [report, setReport] = useState(null);
    const handleDelete = async (_id) => { }

    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get(`/reports/${id}`).then(response => {
            setReport(response.data);
        });
    }, [id]);

    if (!report) return '';

    async function handleDeleteSubmit(ev) {
        ev.preventDefault();
        try {
            const data = await axios.delete("/reports/" + id)
            if (data.data.success) {
                alert(data.data.message)
            }
            setRedirect(true);
        } catch (err) {
            alert('Error Code ReportPage.jsx')
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />
    }


    return (
        <div className="mt-4 rounded-3xl bg-gray-100 mx-8 px-8 pt-8 pd-4">
            <div className=' text-2xl'>
                <div className=" font-semibold">เรื่องที่ร้องเรียน : {report.title}  </div>
                <div className=" w-4"></div>
            </div>
            <div className='font-semibold text-xm mt-2' > สถานที่ที่เกิดเหตุ
                <AddressLink>{report.address}</AddressLink>
            </div>
            <div className="mt-6 mb-8  md:grid-cols-[2fr_1fr]">
                <div className="my-4">
                    <h2 className="font-semibold text-xm">เบอร์โทรศัพท์ : {report.phone}</h2>
                    <h2 className="font-semibold text-xm">วันที่เกิดเหตุ : {report.date}</h2>
                    <h2 className="font-semibold text-xm">เวลาที่เกิดเหตุ : {report.time}</h2>
                    <h2 className="font-semibold text-xm">ตำบล : {report.district}</h2>
                    <h2 className="font-semibold text-xm">อำเภอ : {report.amphoe}</h2>
                    <h2 className="font-semibold text-xm">จังหวัด : {report.province}</h2>
                    <h2 className="font-semibold text-xm">ไปรษณีย์ : {report.zipcode}</h2>
                    <h2 className="font-semibold text-xm">คำอธิบาย : {report.description}</h2>
                </div>
                <form className='grid justify-items-center' onSubmit={handleDeleteSubmit}>
                    <button className="mt-4 bg-red-500 text-white rounded-3xl p-2 px-6 " onClick={() => handleDelete(report._id)}>Delete</button>
                </form>
                <Link to={'/reports'} className="flex items-center gap-1">
                    <span className="font-bold text-sx">ย้อนกลับ</span>
                </Link>
            </div>
        </div >
    )
}





