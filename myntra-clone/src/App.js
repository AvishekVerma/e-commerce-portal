import { useState } from 'react';
import './App.css';
import Cart from './component/cart/Cart';
import List from './component/list/List';
import Login from './component/login/Login';
import Offer from './component/Offer/Offer';
import logo from './images/logo.webp'
function App() {

  const [userData, setUserData] = useState(localStorage.getItem('user') || null)

  const changeUserData =(data) => {
    console.log(data);
    // localStorage.setItem('name', 'Avishek')
    // sessionStorage.setItem('lastName', 'Verma')
    setUserData(data);
  }

  const handleLogout =() => {
    localStorage.removeItem('user')
    setUserData('')
  }

  return (
    <div className="App">
      {userData ?<><header>
        <img src={logo} alt='img' />
        <div className='right-header'>
          <Offer />
          <Cart />
        <label className='switch'>
          <input type="checkbox"  />
          <span className='slider round'> </span>
        </label>
        <button href ="" className='logout-linkButton' onClick={handleLogout} >Logout</button>
        </div>
      </header>
      <div className='body-container'>  
        <List />
      </div>
      </>
       : <Login changeUserData={changeUserData} />}
      </div>
  );
}

export default App;
