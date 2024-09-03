import React, { useState } from 'react'
import './App.css'
import CategoryNews from './components/CategoryNews'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import LoadingBar from 'react-top-loading-bar'

function App() {

  const apiKey = process.env.REACT_APP_NEWSKEY

  const [progress, setProgress] = useState(0)

  const [mode, setMode] = useState('light')
  const [btn, setBtn] = useState("Light Mode")

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setBtn("Dark Mode")
      document.body.style.background = "gray"
    }
    else {
      setMode('light')
      setBtn("Light mode")
      document.body.style.background = "#fff"
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar mode={mode} btn={btn} toggleMode={toggleMode} />
        <LoadingBar
            color='#f11946'
            progress={progress}
          />
        <Routes>
          <Route exact path='/' element={<News apiKey={apiKey} setProgress={setProgress} mode={mode} key="home" />} />
          <Route exact path='/business' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='business' key="business" />} />
          <Route exact path='/entertainment' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='entertainment' key="entertainment" />} />
          <Route exact path='/general' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='general' key="general" />} />
          <Route exact path='/health' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='health' key="health" />} />
          <Route exact path='/science' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='science' key="science" />} />
          <Route exact path='/sports' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='sports' key="sports" />} />
          <Route exact path='/technology' element={<CategoryNews apiKey={apiKey} setProgress={setProgress} mode={mode} country='in' category='technology' key="technology" />} />
        </Routes>
        <Footer mode={mode} />

      </div>
    </BrowserRouter>
  );
}

export default App;
