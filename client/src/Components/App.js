import './App.css';
import TopNav from './TopNav';
import About from './About';
import SignupForm from './SignupForm';
import CardContainer from './CardContainer';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react';
import FullCar from './Fullcar';
import AddCarForm from './AddCarForm';

function App() {
  // This useState is for displaying car info
  const [carData, SetCarData] = useState("")
  //  This Usestate is for the current user who is loggedin
  const [user, setuser] = useState("")
  const [session, setSession] = useState("")
  // This Use state is loggin in. 
  const [loginDetails, setloginDetails] = useState({ email: "", password: "" })

  const [newUser, setnewUser] = useState({
    name: "",
    password: "",
    email: "",
    photographer: ""
  })
  /// Location is set based on the url after http://localhost:4000/ --- so if the url is  http://localhost:4000/cars location.pathname will be cars
  const location = useLocation()

  // for displaying car info 
  useEffect(() => {
    if (location.pathname.includes("cars")) {
      fetch(`${location.pathname}`)
        .then(res => res.json())
        .then(data => SetCarData(data))
        .then(console.log("new fetch "))
    }
  }, [location])



  // Sets user in state from the user session. 
  // this is for if a user refreshes the page or revisists the page
  useEffect(() => {
    fetch("/me")
      .then(r => r.json())
      .then(data => setuser(data))

  }, [])


  // Lougs a user out  and sets usestate to null 
  function handleLogout() {
    fetch("/logout",
      { method: "DELETE" })
      .then((r) => {
        if (r.ok) { setuser({ email: "", password: "" }); }
      });
  }




  // for chaning the form to signup 
  function newUserChangeHanldler(e) {

    if (e.target.name == "photographer") { setnewUser(data => data = { ...data, [e.target.name]: e.target.checked }) }
    else {
      setnewUser(data => data = { ...data, [e.target.name]: e.target.value })
    }
  }


  //submitting new user requests
  function newUserSubmitHandler(e) {
    e.preventDefault()
    console.log(e)
    console.log(newUser)
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: newUser.email,
        password: newUser.password,
        name: newUser.name,
        photographer: newUser.photographer
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setuser(user));
      }
    });
  }


  // for chaning the form to login 
  function changeHanldler(e) {
    setloginDetails(data => data = { ...data, [e.target.name]: e.target.value })
  }


  //submitting login requests
  function submitHandler(e) {
    e.preventDefault()
    console.log(e)
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginDetails.email,
        password: loginDetails.password

      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setuser(user));
      }
    });
  }

     function handleAddCar(addedCar) {
      SetCarData((cars) => [...cars, addedCar]);
  }

  return (
    <div className="App">
      <TopNav changeHanldler={changeHanldler} submitHandler={submitHandler} loginDetails={loginDetails} user={user} handleLogout={handleLogout} />
      <Routes >
        <Route path="/about/*" element={<About />} />
        <Route path="/signup/*" element={<SignupForm newUserSubmitHandler={newUserSubmitHandler} newUserChangeHanldler={newUserChangeHanldler} newUser={newUser} />} />
        <Route exact path="/cars" element={<CardContainer user={user} carData={carData} />} />
        <Route path="/cars/*" element={<FullCar car={carData} />} />
        <Route path="/car-form" element={<AddCarForm handleAddCar={handleAddCar} user={user}/>} />
      </Routes>
    </div>
  );
}
export default App;



















