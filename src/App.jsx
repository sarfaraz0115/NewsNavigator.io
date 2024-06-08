import React,{useState} from 'react'
import Navbar from './assets/Components/Navbar.jsx'
import NewsContainer from './assets/Components/NewsContainer.jsx'
import Footer from './assets/Components/Footer.jsx'
import TopDiv from './assets/Components/TopDiv.jsx'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [progress, setProgress] = useState(0);
  const [results, setresults] = useState(0);
  const [rotate, setRotate] = useState('0deg');
  const [modeIcon, setModeIcon] = useState('.//src//assets//Images&Icons//nightMode.png');
  const [background, setBackground] = useState('white');
  const [secondaryBg, setsecondaryBg] = useState('#F2EAD3')
  const [fontColor, setFontColor] = useState('black');

  const changeMode =()=>{
    setRotate(rotate === '0deg' ? '360deg' : '0deg')
    setBackground(background === 'white' ? 'rgb(32 34 38)' : 'white');
    setsecondaryBg(secondaryBg === '#F2EAD3' ? '#1f1f1f' : '#F2EAD3');
    setFontColor(fontColor === 'black' ? 'white' : 'black');
    setModeIcon(modeIcon === './/src//assets//Images&Icons//nightMode.png' ? './/src//assets//Images&Icons//dayMode.png' : './/src//assets//Images&Icons//nightMode.png');
}

  return (
    <div className='position-static full-height' style={{backgroundColor:`${background}`, color:`${fontColor}`}}>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <BrowserRouter>
        <Navbar changeMode={changeMode} modeIcon={modeIcon} rotate={rotate} background={secondaryBg} fontColor={fontColor}/>
        <TopDiv totalResults={results} background={background} fontColor={fontColor} secondaryBg={secondaryBg}/>  
        <Routes> 
          <Route path='/' element={<NewsContainer key='general' category='general' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/general' element={<NewsContainer key='general' category='general' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/business' element={<NewsContainer key='business' category='business' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/sport' element={<NewsContainer key='sport' category='sport' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/entertainment' element={<NewsContainer key='entertainment' category='entertainment' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/technology' element={<NewsContainer key='technology' category='technology' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/health' element={<NewsContainer key='health' category='health' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
          <Route path='/science' element={<NewsContainer key='science' category='science' setProgress={setProgress} setresults={setresults} results={results} background={secondaryBg} fontColor={fontColor}/>}/>
        </Routes>
        </BrowserRouter>
      <Footer background={secondaryBg}/>
    </div>
  )
}

export default App
