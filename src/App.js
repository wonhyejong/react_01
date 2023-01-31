import './App.css';
import MovieList from './components/MovieLIst/MovieList';
import UserList from './components/UserList/UserList';
import { useState } from 'react';
import NewsList from './components/NewsList/NewsList';
import Tabs from './components/Tabs/Tabs';
function App() {
  const [num,setNum] = useState(0) ;
  const [name,setName] =useState('미니');
  const [isOn ,setIsOn] = useState(false);
  const plus = () => {
    setNum(number => number + 1)
  }
  const minus = () =>{
    setNum(number => number-1)
  }
  const changeName = () => {
    setName(name === '미니' ? '미키' : '미니') ;
  }
  const showUserList = () => {
      setIsOn(isOn => !isOn)
  }
  return (
   
    <div className="App">
      <Tabs />
      <NewsList />
      <div className='count-box'>
        <h2>{num}</h2>
        <button onClick={plus}>1씩증가</button>
        <button onClick={minus} >1씩감소</button>
      </div>
      <div className='name-box'>
          <h2>{name}</h2>
          <button onClick={changeName}>누굴까?</button>
      </div>
      <button onClick={showUserList}>사용자 리스트</button>
      <div className={isOn ? `userListBox on` : `userListBox off`}>
        <UserList />
      </div>
      <MovieList />
     
    </div>
  );
}

export default App;

// state 상태값 useState  내부에서 상태관리 
// props 상위 컴퍼넌트에서 전달 받은 상태   

