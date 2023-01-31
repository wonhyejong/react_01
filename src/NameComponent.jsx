import React from 'react';

const NameComponent = () => {
    const name = "홍길동"
    const style = {
        color:'yellow',
        backgroundColor:'#000'
    }
    return (
        <>
            <h1 style={style}>{name}</h1>
            <h2 className='title2'>리액트</h2>

        </>
    );
};

export default NameComponent;

/* 
jsx 
1.여는태그 닫는태그 <h1> </h1> 
  단독태그 < /> <img />
2. jsx 에서 자바스크립트 사용시 {}
3. class =>  className 
4. 인라인으로 css 작성시  style={{color:'#aaa'}}
5.

*/