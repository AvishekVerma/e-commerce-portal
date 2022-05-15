import { useState } from 'react';
import './App.css';
import Login from './component/login/Login';

function App() {

  const [userData, setUserData] = useState(localStorage.getItem('user') || null)

  const changeUserData =(data) => {
    console.log(data);
    // localStorage.setItem('name', 'Avishek')
    // sessionStorage.setItem('lastName', 'Verma')
    setUserData(data);
  }

  return (
    <div className="App">
      {userData ?<><header>
        {/* <img src={} alt='img' /> */}
        <div className='right-header'>
        <label className='switch'>
          <input type="checkbox"  />
          <span className='slider round'> </span>
        </label>
        <button href ="" className='logout-linkButton' >Logout</button>
        </div>
      </header>
      <div className='body-container'>  
        {/* <List /> */}
      </div>
      </>
       : <Login changeUserData={changeUserData} />}
      </div>
  );
}

export default App;
