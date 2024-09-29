import React from 'react';
import { Dropdown } from 'react-bootstrap';

const Header = () => {
  return (
    <div className="d-flex justify-content-center" style={{marginBottom: '40px' }} >
      {/* Dropdown 1 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic">
          Swan Ballet Collection
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">พาเลตต์อายแชโดว์</Dropdown.Item>
          <Dropdown.Item href="#">บลัชออนเนื้อฝุ่น</Dropdown.Item>
          <Dropdown.Item href="#">ลิปสติก</Dropdown.Item>
          <Dropdown.Item href="#">แป้งฝุ่น</Dropdown.Item>
          <Dropdown.Item href="#">กลิตเตอร์</Dropdown.Item>
          <Dropdown.Item href="#">แปรงปัดแก้ม</Dropdown.Item>
          <Dropdown.Item href="#">น้ำหอม</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Dropdown 2 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-2">
          Little Angle Collection
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">กลิตเตอร์</Dropdown.Item>
          <Dropdown.Item href="#">บรัชออนเนื้อครีม</Dropdown.Item>
          <Dropdown.Item href="#">ลิปสติกเนื้อแมตต์</Dropdown.Item>
          <Dropdown.Item href="#">แปรงบรัชออน</Dropdown.Item>
          <Dropdown.Item href="#">อายแชโดว์</Dropdown.Item>
          <Dropdown.Item href="#">ลิปมาส์กบำรุงปาก</Dropdown.Item>
          <Dropdown.Item href="#">ไพรเมอร์</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      {/* Dropdown 3 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-3">
          Strawberry Rococo Collection
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">บรัชออนเนื้อฝุ่น</Dropdown.Item>
          <Dropdown.Item href="#">ลิปสติก</Dropdown.Item>
          <Dropdown.Item href="#">พาเลตต์อายแชโดว์</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>


      {/* Dropdown 4 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-2">
          Moonlight Mermaid Collection
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">พาเลตต์อายแชโดว์</Dropdown.Item>
          <Dropdown.Item href="#">บรัชออนไล่ระดับสี</Dropdown.Item>
          <Dropdown.Item href="#">แป้งอัดแข็ง</Dropdown.Item>
          <Dropdown.Item href="#">ลิปกลอส</Dropdown.Item>
          <Dropdown.Item href="#">อายไลเนอร์</Dropdown.Item>
          <Dropdown.Item href="#">น้ำหอม</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

     {/* Dropdown 5 */}
      <Dropdown className="mx-2">
        <Dropdown.Toggle variant="dark" id="dropdown-basic-2">
          Chocolate Wonder-Shop Collection
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">ไฮไลท์</Dropdown.Item>
          <Dropdown.Item href="#">พาเลตต์อายแชโดว์</Dropdown.Item>
          <Dropdown.Item href="#">บรัชออนเนื้อฝุ่น</Dropdown.Item>
          <Dropdown.Item href="#">ลิปกลอสเนื้อครีม</Dropdown.Item>
          <Dropdown.Item href="#">มาสคาร่า</Dropdown.Item>
          <Dropdown.Item href="#">น้ำหอม</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default Header;
