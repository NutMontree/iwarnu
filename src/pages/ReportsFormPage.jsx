import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, useParams } from "react-router-dom";
import "../../jquery.Thailand.js/database/db.json";


export default function ReportsFormPage() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [address, setAddress] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [district, setDistrict] = useState('');
    const [amphoe, setAmphoe] = useState('');
    const [province, setProvince] = useState('');
    const [zipcode, setZipcode] = useState('');
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get('/reports' + id).then(response => {
            const { data } = response;
            setTitle(data.title);
            setPhone(data.phone);
            setDate(data.date);
            setTime(data.time);
            setAddress(data.address);
            setDescription(data.description);
            setDistrict(data.district);
            setAmphoe(data.amphoe);
            setProvince(data.province);
            setZipcode(data.zipcode);
        })
    }, [id]);
    function inputHeader(text) {
        return (
            <h2 className="text-2xl mt-4">{text}</h2>
        );
    }
    function inputDescription(text) {
        return (
            <p className="text-gray-500 text-sm">{text}</p>
        );
    }
    function preInput(header, description) {
        return (
            <>
                {inputHeader(header)}
                {inputDescription(description)}

            </>
        );
    }
    async function saveReport(ev) {
        ev.preventDefault();
        const reportData = {
            title, phone, date, time,
            location, address, description,
            district, amphoe, province, zipcode,
        };
        if (id) {
            // update 
            await axios.put('/reports', {
                id, ...reportData
            });
            setRedirect(true);
        } else {
            // new report 
            await axios.post('/reports', reportData);
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to={'/'} />
    }




    // ส่วนของไฟล์ JavaScript ใหม่
    $.Thailand({
        database: '../../jquery.Thailand.js/database/geodb.json', // ฐานข้อมูลเป็นไฟล์ json
        $district: $('#district'), // input ของตำบล
        $amphoe: $('#amphoe'), // input ของอำเภอ
        $province: $('#province'), // input ของจังหวัด
        $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
    });


    return (
        <div className='pt-6'>
            {/* <AccountNav /> */}
            <form onSubmit={saveReport} >






                {/* บัคคือ เมื่อมีการ input โปรแกรมจะทำการรีเพรชทุกครั้ง ทำให้ต้องกดที่ช่องกรอกข้อมูลใหม่เพื่อป้อน input เข้าไป
                ทดรองทำ สร้างโปรแกรมแยก ข้อมูลของชุด auto ที่อยุ่ และเก็บค้าไว้ในอาเรย์ 
                จากนั้นให้ตัวโปรแกรมที่สองดึงค่าออกไปใช้  */}




                {preInput('title', 'เรื่องที่ร้องเรียน')}
                <input type='text' value={title} onChange={ev => setTitle(ev.target.value)} placeholder="กรุณาระบุเรื่องที่ร้องเรียน" />
                {preInput('phone', 'เบอร์โทรศัพท์')}
                <input type='number' value={phone} onChange={ev => setPhone(ev.target.value)} placeholder="กรุณาระบุเบอร์โทรศัพท์" />
                {preInput('date', 'สถานที่เกิดเหตุ')}
                <input type='date' value={date} onChange={ev => setDate(ev.target.value)} placeholder="กรุณาระบุเวลาที่เกิดเหตุ" />
                {preInput('time', 'เวลาที่เกิดเหตุ')}
                <input type='time' value={time} onChange={ev => setTime(ev.target.value)} placeholder="กรุณาระบุวันที่เกิดเหตุ" />
                {preInput('location', 'สถานที่ที่เกิดเหตุ')}
                <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="กรุณาระบุสถานที่เกิดเหตุ" />

                {preInput('district', 'ตำบล / แขวง')}
                <input id='district' type='text' value={district} onChange={ev => setDistrict(ev.target.value)} placeholder='ตำบล / แขวง' />

                {preInput('amphoe', 'อำเภอง')}
                <input id='amphoe' type='text' value={amphoe} onChange={ev => setAmphoe(ev.target.value)} placeholder='อำเภอ / เขต' />

                {preInput('province', 'จังหวัด')}
                <input id='province' type='text' value={province} onChange={ev => setProvince(ev.target.value)} placeholder='จังหวัด' />

                {preInput('zipcode', 'รหัสไปรษณีย์')}
                <input id='zipcode' type='text' value={zipcode} onChange={ev => setZipcode(ev.target.value)} placeholder='รหัสไปรษณีย์' />






                {/* {preInput('location', 'สถานที่ที่เกิดเหตุ')}
                <input type="text" value={address} onChange={ev => setAddress(ev.target.value)} placeholder="กรุณาระบุสถานที่เกิดเหตุ" /> */}
                {preInput('description', 'คำอธิบาย')}
                <textarea value={description} onChange={ev => setDescription(ev.target.value)} className='p-4' placeholder="บรรยายพฤติกรรมการกระทำความผิด (เมื่อใด บุคคลใด ทำอะไร ที่ไหน อย่างไร ได้รับความเดือดร้อนอย่างไร พอสังเขป)" />
                <button className="primary my-4">Save</button>
            </form >
        </div >
    )
}

