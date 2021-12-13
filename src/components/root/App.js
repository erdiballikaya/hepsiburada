import React from 'react';
import Header from '../header/Header'
import '../common/main.css'
import Sidebar from '../sidebars/Sidebar';
import ProductsComponent from '../products/ProductsComponent';
import SubHeader from '../subHeader/SubHeader'
function App() {
  return (
    <div className="Main" style={{ fontFamily: 'Roboto' }}>
      <div className="Headers">
        <div className="HeaderGrup"><Header/></div>
        <div className="SubHeaderItem"><SubHeader /></div>
      </div>
      <div className="MiddleGroup">
        <div className="SideMenuItem"><Sidebar /></div>
        <div className="MainItem"><ProductsComponent /></div>
      </div>
    </div>

  );
}

export default App;
