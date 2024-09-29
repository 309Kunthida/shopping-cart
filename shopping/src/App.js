import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Header from './components/Header';
import MyModal from './MyModal';

const App = () => {
  const [cart, setCart] = useState([]);
  const [discount, setDiscount] = useState(0);
  const [showModal, setShowModal] = useState(false); 
  const [selectedCoupon, setSelectedCoupon] = useState('');

  const handleClose = () => {
    console.log('โมดอลปิดแล้ว');
    setShowModal(false); 
  }; 
  const handleShow = () => {
    console.log('โมดอลเปิดแล้ว');
    setShowModal(true); 
  };
  const handleConfirm = () => {
    console.log('การสั่งซื้อได้รับการยืนยันแล้ว'); 
    setShowModal(false);
  };

  const products = [
    { id: 1, name: 'Cushion', price: 557, imageSrc: 'https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsdviwocx4exca' },
    { id: 2, name: 'Powder', price: 812, imageSrc: 'https://down-th.img.susercontent.com/file/sg-11134201-7rd54-luvt7hummo332e' },
    { id: 3, name: 'Blush', price: 523, imageSrc: 'https://www.jeban.com/uploads/reviews/product/108398/111668_204931a331.jpg' },
    { id: 4, name: 'Eyeshadow', price: 599, imageSrc: 'https://m.media-amazon.com/images/I/71abNtPcJlL._AC_UF1000,1000_QL80_.jpg' },
    { id: 5, name: 'Glitter', price: 458, imageSrc: 'https://m.media-amazon.com/images/I/61D4uumbXVL._AC_UF894,1000_QL80_.jpg' },
    { id: 6, name: 'Mascara', price: 535, imageSrc: 'https://m.media-amazon.com/images/I/61JrzQh+o1L._AC_UF1000,1000_QL80_.jpg' },
    { id: 7, name: 'Eyeliner', price: 203, imageSrc: 'https://m.media-amazon.com/images/I/51fn8nLs9JL.jpg' },
    { id: 8, name: 'Lipstick', price: 630, imageSrc: 'https://ae04.alicdn.com/kf/S4077c7fdc7fa44269b10487d3724d765I.png_480x480.png' },
    { id: 9, name: 'Eyebrow pencil', price: 545, imageSrc: 'https://cf.shopee.co.th/file/9a5102381577099f1a67cbe9722b4141_tn' },
    { id: 10, name: 'Highlighter', price: 682, imageSrc: 'https://m.media-amazon.com/images/I/71LyvDQgYmL.jpg' },
    { id: 11, name: 'Brush', price: 450, imageSrc: 'https://flowerknows.co/cdn/shop/files/2836_70357cbe-913b-473a-a988-5fddc581671f.jpg?v=1723378771&width=1100' },
    { id: 12, name: 'Paddle brush', price: 1605, imageSrc: 'https://down-th.img.susercontent.com/file/cn-11134207-7r98o-lw43fninunmrce' },
    { id: 13, name: 'Mirror', price: 809, imageSrc: 'https://flowerknows.co/cdn/shop/files/2997.jpg?v=1717069277&width=1500' },
    { id: 14, name: 'Perfume', price: 1177, imageSrc: 'https://flowerknows.co/cdn/shop/files/20a1db32ee0e608410c15063de8e950f.jpg?v=1718769364' },
    { id: 15, name: 'Hairpin', price: 470, imageSrc: 'https://down-my.img.susercontent.com/file/cn-11134207-7r98o-lq9b2i4etic834' },
  ];

  const coupons = [
    { code: 'ส่วนลด10', discount: 0.1 },
    { code: 'ส่วนลด20', discount: 0.2 },
    { code: 'ส่วนลด50', discount: 0.5 },
  ];

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const index = updatedCart.findIndex((item) => item.id === product.id);

    if (index === -1) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      updatedCart[index].quantity += 1;
    }
    setCart(updatedCart);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const updateQuantity = (productId, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: Math.max(item.quantity + amount, 1) };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const applyCoupon = (code) => {
    const coupon = coupons.find((c) => c.code === code);
    if (coupon) {
      setDiscount(coupon.discount);
    } else {
      setDiscount(0);
      alert('คูปองไม่ถูกต้อง');
    }
  };

  const totalCost = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountAmount = totalCost * discount; // คำนวณจำนวนเงินที่ต้องลด
  
  let shippingCost = 100; // ค่าจัดส่งเริ่มต้นเป็น 100 บาท
  const finalPrice = Math.max(totalCost - discountAmount + shippingCost, 0); // คำนวณราคาสุดท้าย

  return (
    <div className="container">
      <h1 className='text-center' style={{ marginTop: '40px', marginBottom: '50px' }}>Flower knows Products</h1>
      <Header />
      
      <ProductList products={products} addToCart={addToCart} />
      <Cart 
        cart={cart} 
        removeFromCart={removeFromCart} 
        updateQuantity={updateQuantity} 
        applyCoupon={applyCoupon}
        totalCost={totalCost}
        finalPrice={finalPrice}
      />
      
      <div style={{ marginTop: '20px' }}>
        <label htmlFor="couponSelect">คูปองส่วนลด </label>
        <select
          id="couponSelect"
          value={selectedCoupon}
          onChange={(e) => {
            const coupon = coupons.find(c => c.code === e.target.value);
            setSelectedCoupon(e.target.value);
            if (coupon) {
              applyCoupon(coupon.code);
            } else {
              setDiscount(0); // รีเซ็ตส่วนลดถ้าไม่มีคูปองที่เลือก
            }
          }}
        >
          <option value=""> เลือกคูปองส่วนลด </option>
          {coupons.map(coupon => (
            <option key={coupon.code} value={coupon.code}>
              {coupon.code} - {coupon.discount * 100}%
            </option>
          ))}
        </select>
      </div>

      {/* ปุ่มที่ใช้เปิด Modal */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button className="btn btn-success" onClick={handleShow} style={{marginTop:'50px',marginBottom: '70px' }}>
          สั่งซื้อสินค้า
        </button>
      </div>

    <MyModal 
      show={showModal} 
      handleClose={handleClose} 
      handleConfirm={handleConfirm} 
    />
    </div>
  );
};

export default App;
