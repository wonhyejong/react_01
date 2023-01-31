import React from 'react';
import productData from "./../../data/productData.json";
import TabUl from './TabUl';
import { useState } from 'react';
import './tabs.css';
const Tabs = () => {
    const tabData = productData;
    const [dataIndex,setDataIndex] = useState(0);
    const handleTab = (e,index) => {
        e.preventDefault();
        setDataIndex(index)
    }
    return (
        <div className='tab'>
            <div className='tab-title'>
                {
                    tabData.map((item,index)=><button onClick={(e)=>{handleTab(e,index)}} className={dataIndex === index ? "btn active":"btn"} key={item.id}>{item.title}</button>)
                }
            </div>
            <div className='tab-body'>
                <TabUl />
            </div>
        </div>
    );
};

export default Tabs;