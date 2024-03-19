import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [phone, setPhone] = useState('');
  
  function handleNameChange(name) {
    setName(name);
  }
  function handleEmailChange(email) {
    setEmail(email);
  }
  function handlePhoneChange(phone) {
    setPhone(phone);
  }
  function AddPersonalInfo(e) {
    e.preventDefault();
    // 感觉是要做成数据group 遍历 来实现add 不太好直接加一个component 参数不好传递
    
  }
  let PersonalInfo = {
    name: name,
    email: email,
    phone: phone
  }

  return (
    <div className="App">
      <header>CV Generator</header>
      <Personal AddPersonalInfo={AddPersonalInfo} onSetName={handleNameChange} onSetEmail={handleEmailChange} onSetPhone={handlePhoneChange} />
      <Edu />
      <Exp />
      <Display pInfo={PersonalInfo}/>
    </div>
  );
}
function Personal({AddPersonalInfo, onSetName, onSetEmail, onSetPhone}){
  return(
    <div className="Personal">
      <form  onSubmit={AddPersonalInfo} >
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" onChange={(e)=>onSetName(e.target.value)}></input>
        <label for="email">Email:</label>
        <input type="text" id="email" name="email" onChange={(e)=>onSetEmail(e.target.value)}></input>
        <label for="phone">Phone:</label>
        <input type="text" id="phone" name="phone" onChange={(e)=>onSetPhone(e.target.value)}></input>
        <button >Edit </button>
        <button type="submit">Add</button>
      </form>
    </div>
  
  )
}

function Display({pInfo}) {
  return (
    <div className="Display">
      <h1>Resume</h1>
      <div>
        <h2>Personal information</h2>

      <p>Name: {pInfo.name}</p>
      <p>Email:{pInfo.email}</p>
      <p>Phone:{pInfo.phone}</p>
      </div>
      <div>
        <h2>Experience</h2>
      </div>
      <div>
        <h2>Education</h2>

      </div>
      </div>
  )
}



function Edu() {
  return (
    <div className="Edu">
      <form>
        <label for="school">School:</label>
        <input type="text" id="school" name="school"></input>
        <label for="degree">Degree:</label>
        <input type="text" id="degree" name="degree"></input>
        <label for="graduationDate">Graduation Date:</label>
        <input type="text" id="graduationDate" name="graduationDate"></input>
        
      </form>
    </div>

  )
}

function Exp() {
  return (
    <div className="Exp">
      <form>
        <label for="company">Company:</label>
        <input type="text" id="company" name="company"></input>
        <label for="position">Position:</label>
        <input type="text" id="position" name="position"></input>
        <label for="startDate">Start Date:</label>
        <input type="text" id="startDate" name="startDate"></input>
        <label for="endDate">End Date:</label>
        <input type="text" id="endDate" name="endDate"></input>
        </form>
      </div>

  )
}








export default App
