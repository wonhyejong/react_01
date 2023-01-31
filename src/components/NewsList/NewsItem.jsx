import React from 'react';

const NewsItem = ({title,info,img}) => {
    return (
        <li className='news-item'>
            <div className='item-img'>
                <img src={img} alt="" />
            </div>
            <div className='item-infobox'>
                 <span className='info-title'>{title}</span>
                 <span className='info-company'>{info}</span>
            </div>
        </li>
    );
};

export default NewsItem;