
import { useState } from 'react';
import AddressLink from '../component/AddressLink';
import Announcer from '../component/Announcer';
import SearchBar from '../component/SearchBar';

const posts = [
  {
    id: '1', name: 'สำนักงานตำรวจแห่งชาติ',
    phone: 'เบอร์โทรสารกลาง : 02-2521174'
  },
  {
    id: '2', name: 'สถานีตำรวจภูธรเมืองศรีสะเกษ 90 ซอย เทพา 10 ตำบล เมืองเหนือ อำเภอเมืองศรีสะเกษ ศรีสะเกษ 33000',
    phone: 'เบอร์โทร : 045612732'
  },
  {
    id: '3', name: 'สถานีตำรวจภูธรกันทรลักษ์ 620 หมู่ 5 ถ. อนันตภักดี ตำบล น้ำอ้อม อำเภอกันทรลักษ์ ศรีสะเกษ 33110',
    phone: 'เบอร์โทร : 045661423'
  },
  {
    id: '4', name: 'สถานีตำรวจภูธรบึงมะลู 48 ม.19 ตำบล บึงมะลู อำเภอกันทรลักษ์ ศรีสะเกษ 33110',
    phone: 'เบอร์โทร : 045924651'
  },
  {
    id: '5', name: 'สถานีตำรวจภูธรบ้านโดนเอาว์ ตำบล รุง อำเภอกันทรลักษ์ ศรีสะเกษ 33110',
    phone: 'เบอร์โทร : 0935728814'
  },
  {
    id: '6', name: 'ป้อมตำรวจสถานีตำรวจตำบลกุดเสลา ตำบล สวนกล้วย อำเภอกันทรลักษ์ ศรีสะเกษ 33110',
    phone: 'เบอร์โทร : 0926416749'
  },
  {
    id: '7', name: 'สถานีตำรวจภูธรไพร ตำบล โพธิ์วงศ์ อำเภอ ขุนหาญ ศรีสะเกษ 33150',
    phone: 'เบอร์โทร : 045921025'
  },
  {
    id: '8', name: 'สถานีตำรวจภูธรน้ำขุ่น',
    phone: 'เบอร์โทร : 045864656'
  },
  {
    id: '9', name: 'สถานีตำรวจภูธรเบญจลักษ์ ตำบล เสียว อำเภอ เบญจลักษ์ ศรีสะเกษ 33110',
    phone: 'เบอร์โทร : 045605155'
  },
  {
    id: '10', name: 'สถานีตำรวจภูธรจะกง ตำบล จะกง อำเภอ ขุขันธ์ ศรีสะเกษ 33140',
    phone: 'เบอร์โทร : 045826221'
  },
  {
    id: '11', name: 'สถานีตำรวจภูธรห้วยขะยุง ตำบล ห้วยขะยุง อำเภอวารินชำราบ อุบลราชธานี 34310',
    phone: 'เบอร์โทร : 045431091'
  },
  {
    id: '12', name: 'สถานีตำรวจภูธรโนนคูณ ตำบล โนนค้อ อำเภอ โนนคูณ ศรีสะเกษ 33250',
    phone: 'เบอร์โทร : 045659018'
  },
  {
    id: '13', name: 'สถานีตำรวจภูธรขุนหาญ ตำบล สิ อำเภอ ขุนหาญ ศรีสะเกษ 33150',
    phone: 'เบอร์โทร : 045679015'
  },
  {
    id: '14', name: 'สถานีตำรวจภูธรกันทรอม ตำบล กันทรอม อำเภอ ขุนหาญ ศรีสะเกษ 33150',
    phone: 'เบอร์โทร : 0982312196'
  },
  {
    id: '15', name: 'สถานีตำรวจชุมชนหัวช้าง',
    phone: 'เบอร์โทร : 045431091'
  },
  {
    id: '16', name: 'สถานีตำรวจภูธรน้ำเกลี้ยง ตำบล น้ำเกลี้ยง อำเภอ น้ำเกลี้ยง ศรีสะเกษ 33130',
    phone: 'เบอร์โทร : 045609041'
  },
  {
    id: '17', name: 'สถานีตำรวจภูธรยางชุมน้อย ตำบล ยางชุมน้อย อำเภอ ยางชุมน้อย ศรีสะเกษ 33190',
    phone: 'เบอร์โทร : 045687059'
  },
  {
    id: '18', name: 'สถานีตำรวจภูธรตูม ตำบล ตูม อำเภอ ศรีรัตนะ ศรีสะเกษ 33240',
    phone: 'เบอร์โทร : 045431091'
  },
  {
    id: '19', name: 'สถานีตำรวจภูธรพยุห์ ตำบล พยุห์ อำเภอ พยุห์ ศรีสะเกษ 33230',
    phone: 'เบอร์โทร : 045607128'
  },
  {
    id: '20', name: 'สถานีตำรวจภูธรสำโรงทาบ ตำบล หนองไผ่ล้อม อำเภอ สำโรงทาบ สุรินทร์ 32170',
    phone: 'เบอร์โทร : 044569126'
  },
  {
    id: '21', name: 'สถานีตำรวจภูธรโพนเขวา ตำบล โพนเขวา อำเภอเมืองศรีสะเกษ ศรีสะเกษ 33000',
    phone: 'เบอร์โทร : 045960112'
  },
  {
    id: '22', name: 'สถานีตำรวจภูธรบัวเชด ตำบล บัวเชด อำเภอ บัวเชด สุรินทร์ 32230',
    phone: 'เบอร์โทร : 044579027'
  },
  {
    id: '23', name: 'สถานีตำรวจภูธรกันทรารมย์ ตำบล ดูน อำเภอ กันทรารมย์ ศรีสะเกษ 33130',
    phone: 'เบอร์โทร : 045651258'
  },
  {
    id: '24', name: 'สถานีตำรวจภูธรไพรบึง ตำบล ไพรบึง อำเภอ ไพรบึง ศรีสะเกษ 33180',
    phone: 'เบอร์โทร : 045675018'
  },
  {
    id: '25', name: 'สถานีตำรวจภูธรวังหิน ตำบล บุสูง อำเภอ วังหิน ศรีสะเกษ 33270',
    phone: 'เบอร์โทร : 045606092'
  },
  {
    id: '26', name: 'สถานีตำรวจภูธรขุขันธ์ ตำบล ห้วยเหนือ อำเภอ ขุขันธ์ ศรีสะเกษ 33140',
    phone: 'เบอร์โทร : 045671009'
  },
  {
    id: '27', name: 'สถานีตำรวจภูธรห้วยทับทัน 220 หมู่ 1 ตำบล ห้วยทับทัน อำเภอ ห้วยทับทัน ศรีสะเกษ 33210',
    phone: 'เบอร์โทร : 045699089'
  },
  {
    id: '28', name: 'สถานีตำรวจภูธรปรือใหญ่ ตำบล หนองฉลอง อำเภอ ขุขันธ์ ศรีสะเกษ 33140',
    phone: 'เบอร์โทร : 045814287'
  },
  {
    id: '29', name: 'สถานีตำรวจภูธรเทนมีย์ ตำบล เทนมีย์ อำเภอเมืองสุรินทร์ สุรินทร์ 32000',
    phone: 'เบอร์โทร : 044513217'
  },
  {
    id: '30', name: 'สถานีตำรวจภูธรสะเดา ตำบล สำเภาลูน อำเภอ บัวเชด สุรินทร์ 32230',
    phone: 'เบอร์โทร : 0973345333'
  },
  {
    id: '31', name: 'สถานีตำรวจภูธรดม ตำบล เทพรักษา อำเภอ สังขะ สุรินทร์ 32150',
    phone: 'เบอร์โทร : 044558705'
  },
  {
    id: '32', name: 'สถานีตำรวจภูธรศรีรัตนะ ตำบล ศรีแก้ว อำเภอ ศรีรัตนะ ศรีสะเกษ 33240',
    phone: 'เบอร์โทร : 045699081'
  },
  {
    id: '33', name: 'สถานีตำรวจภูธรเขวาสินรินทร์ 260 ต.เขวาสินรินทร์ ตำบล เขวาสินรินทร์ อำเภอ เขวาสินรินทร์ สุรินทร์ 32000',
    phone: 'เบอร์โทร : 044582210'
  },
  {
    id: '34', name: 'จุดบริการประชาชน สถานีตำรวจภูธรสังขะ 83 อำเภอ สังขะ สุรินทร์ 32150',
    phone: 'เบอร์โทร : 044571241'
  },
  {
    id: '35', name: 'สถานีตำรวจภูธรปราสาท ตำบล กังแอน อำเภอปราสาท สุรินทร์ 32140',
    phone: 'เบอร์โทร : 044551251'
  },
  {
    id: '36', name: 'สถานีตำรวจชุมชนตู้ยามเทพเจริญ หน้าธนาคารกรุงเทพ ตำบล ดูน อำเภอ กันทรารมย์ ศรีสะเกษ 33130',
    phone: 'เบอร์โทร : 045651258'
  },
  {
    id: '37', name: 'สถานีตำรวจภูธรเมืองจันทร์ ตำบล หนองใหญ่ อำเภอ เมืองจันทร์ ศรีสะเกษ 33120',
    phone: 'เบอร์โทร : 045603070'
  },
  {
    id: '38', name: 'สถานีตำรวจภูธรจอมพระ ถนน เทศบาล 3 ตำบล จอมพระ อำเภอ จอมพระ สุรินทร์ 32180',
    phone: 'เบอร์โทร : 044581136'
  },
  {
    id: '39', name: 'สถานีตำรวจภูธรเมืองสุรินทร์ 576 หลักเมือง ตำบล ในเมือง อำเภอเมืองสุรินทร์ สุรินทร์ 32000',
    phone: 'เบอร์โทร : 044511007'
  },
  {
    id: '40', name: 'สถานีตำรวจภูธรลำดวน ตำบล ลำดวน อำเภอ ลำดวน สุรินทร์ 32220',
    phone: 'เบอร์โทร : 044541100'
  },
  // { id: '20', name: 'สถานีตำรวจภูธรโนนคูณ', phone: 'เบอร์โทร : 045431091' },
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

export default function SerachTextPage() {
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredPosts = filterPosts(posts, searchQuery);
  return (
    <div>
      <div className="App">
        <Announcer
          message={`${filteredPosts.length} posts`}
        />
        <SearchBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {filteredPosts.map((post) => (
          <div key={post.id}>
            <AddressLink>{post.name}</AddressLink>{post.phone}
          </div>
        ))}

      </div>
    </div>
  )
}
