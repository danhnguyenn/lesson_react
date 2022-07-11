import React from 'react';
import ReactDOM from 'react-dom/client';
// import Cart from './components/Cart';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './components/experience/counter/Counter';
import Num from './components/experience/counter/Num';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const list = [
//   {
//     id: 1,
//     title: 'Tận tâm',
//     des: 'Tận tâm từ trong suy nghĩ cho đến hành động và được chuyển hóa thành những bài giảng chất lượng.'
//   },
//   {
//     id: 2,
//     title: 'Tận lực',
//     des: 'Đi cùng với sự cố gắng của học viên để tiếp thu kiến thức đó là sự nỗ lực không ngừng của từng thành viên trong gia đình Kmin.'
//   },
//   {
//     id: 3,
//     title: 'Tận khả năng',
//     des: 'Kmin luôn làm việc với tất cả khả năng của mình. Hãy dùng khả năng của Kmin mở rộng hơn khả năng của bạn!'
//   },
// ]
root.render(
  // list.map((item, index) => {
  //   return <Cart key={item.id} item={item} />
  // })
  <React.StrictMode>
    <Counter heading="Kmin Counter 1" start="0" />
    {/* <Counter heading="Kmin Counter 2" start="6" /> */}
  </React.StrictMode>
);
reportWebVitals();