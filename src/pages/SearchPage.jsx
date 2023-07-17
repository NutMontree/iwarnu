// import React from 'react';

// export default function SearchPage() {

//     (function (i, s, o, g, r, a, m) {
//         i['GoogleAnalyticsObject'] = r;
//         i[r] = i[r] || function () {
//             (i[r].q = i[r].q || []).push(arguments)
//         }, i[r].l = 1 * new Date();
//         a = s.createElement(o), m = s.getElementsByTagName(o)[0];
//         a.async = 1;
//         a.src = g;
//         m.parentNode.insertBefore(a, m)
//     })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

//     ga('create', 'UA-33058582-1', 'auto', {
//         'name': 'Main'
//     });
//     ga('Main.send', 'event', 'jquery.Thailand.js', 'GitHub', 'Visit');

//     // ส่วนของไฟล์ JavaScript ใหม่
//     $(document).ready(function () {
//         /******************\
//          *     DEMO 1     *
//         \******************/
//         // demo 1: load database from json. if your server is support gzip. we recommended to use this rather than zip.
//         // for more info check README.md

//         $.Thailand({
//             database: '../../jquery.Thailand.js/database/db.json',
//             // database: '../../jquery.Thailand.js/database/db.json',

//             $district: $('#demo1 [name="district"]'),
//             $amphoe: $('#demo1 [name="amphoe"]'),
//             $province: $('#demo1 [name="province"]'),
//             $zipcode: $('#demo1 [name="zipcode"]'),

//             onDataFill: function (data) {
//                 console.info('Data Filled', data);
//             },

//             onLoad: function () {
//                 console.info('Autocomplete is ready!');
//                 $('#loader, .demo').toggle();
//             }
//         });

//         // watch on change

//         $('#demo1 [name="district"]').change(function () {
//             console.log('ตำบล', this.value);
//         });
//         $('#demo1 [name="amphoe"]').change(function () {
//             console.log('อำเภอ', this.value);
//         });
//         $('#demo1 [name="province"]').change(function () {
//             console.log('จังหวัด', this.value);
//         });
//         $('#demo1 [name="zipcode"]').change(function () {
//             console.log('รหัสไปรษณีย์', this.value);
//         });

//     });

//     /******************\
//         *     DEMO 1     *
//        \******************/
//     // demo 1: load database from json. if your server is support gzip. we recommended to use this rather than zip.
//     // for more info check README.md

//     $.Thailand({
//         database: '../../jquery.Thailand.js/database/db.json',
//         // database: '../../jquery.Thailand.js/database/db.json',

//         $district: $('#demo1 [name="district"]'),
//         $amphoe: $('#demo1 [name="amphoe"]'),
//         $province: $('#demo1 [name="province"]'),
//         $zipcode: $('#demo1 [name="zipcode"]'),

//         onDataFill: function (data) {
//             console.info('Data Filled', data);
//         },

//         onLoad: function () {
//             console.info('Autocomplete is ready!');
//             $('#loader, .demo').toggle();
//         }
//     });

//     // watch on change

//     $('#demo1 [name="district"]').change(function () {
//         console.log('ตำบล', this.value);
//     });
//     $('#demo1 [name="amphoe"]').change(function () {
//         console.log('อำเภอ', this.value);
//     });
//     $('#demo1 [name="province"]').change(function () {
//         console.log('จังหวัด', this.value);
//     });
//     $('#demo1 [name="zipcode"]').change(function () {
//         console.log('รหัสไปรษณีย์', this.value);
//     });

//     /******************\
//      *     DEMO 2     *
//     \******************/
//     // demo 2: load database from zip. for those who doesn't have server that supported gzip.
//     // for more info check README.md
//     $.Thailand({
//         database: '../../jquery.Thailand.js/database/db.json',
//         // database: '../../jquery.Thailand.js/database/db.zip',
//         $search: $('#demo2 [name="search"]'),

//         onDataFill: function (data) {
//             console.log(data)
//             var html = '<b>ที่อยู่:</b> ตำบล' + data.district + ' อำเภอ' + data.amphoe + ' จังหวัด' + data.province + ' ' + data.zipcode;
//             $('#demo2-output').prepend('<div className="uk-alert-warning" uk-alert><a className="uk-alert-close" uk-close></a>' + html + '</div>');
//         }

//     });

//     return (
//         <>

//             <div className="uk-container uk-padding">

//                 <h1>Auto Complete ที่อยู่ อย่างที่มันควรเป็น</h1>

//                 <div id="loader">
//                     <div uk-spinner="true"></div> รอสักครู่ กำลังโหลดฐานข้อมูล...
//                 </div>

//                 <form id="demo1" className="demo" autoComplete="off" uk-grid='true' >

//                     <div className="uk-width-1-2@m">
//                         <label className="h2">ตำบล / แขวง</label>
//                         <input name="district" className="uk-input uk-width-1-1" type="text" />
//                     </div>

//                     <div className="uk-width-1-2@m">
//                         <label className="h2">อำเภอ / เขต</label>
//                         <input name="amphoe" className="uk-input uk-width-1-1" type="text" />
//                     </div>

//                     <div className="uk-width-1-2@m">
//                         <label className="h2">จังหวัด</label>
//                         <input name="province" className="uk-input uk-width-1-1" type="text" />
//                     </div>

//                     <div className="uk-width-1-2@m">
//                         <label className="h2">รหัสไปรษณีย์</label>
//                         <input name="zipcode" className="uk-input uk-width-1-1" type="text" />
//                     </div>

//                 </form>

//                 <h2>ใหม่! โหมดค้นหา</h2>
//                 <form id="demo2" className="demo" autoComplete="off">
//                     <label className="h2">ค้นหาที่อยู่ของคุณ</label>
//                     <small>ลองกรอกอย่างใดอย่างหนึ่ง ตำบล, อำเภอ, จังหวัด หรือ รหัสไปรษณีย์</small>
//                     <input name="search" className="uk-input uk-width-1-1" type="text" />

//                     <div id="demo2-output" className="uk-margin"></div>
//                 </form>


//             </div>
//         </>
//     )
// }
import React from 'react';

export default function SearchPage() {
    $.Thailand({
        database: '../../jquery.Thailand.js/database/geodb.json', // ฐานข้อมูลเป็นไฟล์ zip
        $district: $('#district'), // input ของตำบล
        $amphoe: $('#amphoe'), // input ของอำเภอ
        $province: $('#province'), // input ของจังหวัด
        $zipcode: $('#zipcode'), // input ของรหัสไปรษณีย์
    });
    return (
        <div>
            <input type="text" id="district" />
            <input type="text" id="amphoe" />
            <input type="text" id="province" />
            <input type="text" id="zipcode"></input>
        </div>
    )
}
