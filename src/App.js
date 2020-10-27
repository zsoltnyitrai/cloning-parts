import React from 'react';
import './App.css';
import {AiOutlineRise} from 'react-icons/ai'
import {AiOutlineAlignRight} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home'
import Yahoo from './pages/Yahoo' 
import Reddit from './pages/Reddit' 
import Header from './components/Header'
import Button from 'react-bootstrap/Button'


function App() {
  const basicSubreddits=[
    {title:'home',
    icon: <AiFillHome/>,
    link:'link'
    },
    {title:'popular',
    icon:<AiOutlineRise/>,
    link:'link'
    },
    {title:'All',
    icon:<AiOutlineAlignRight/>,
    link:'link'
    },
]
  return (
    <div className="App">
      {/* <Header basicSubreddits={basicSubreddits}/> */}
      <Router>
        <div className='text-center main-button-container'>
        <Link to='/home'><Button>Home</Button></Link>
        <Link to='/yahoo'><Button>Yahoo</Button></Link>
        <Link to='/reddit'><Button>Reddit</Button></Link>
        </div>
        <Route 
          path='/home'
          exact render={()=><Home
          title={'home-page'}
            />
          }/>
        <Route 
          path='/yahoo'
          exact render={()=><Yahoo
          title={'yahoo-page'}
            />
          }/>
          <Route 
          path='/reddit'
          exact render={()=><Reddit
          title={'reddit-page'}
            />
          }/>
      </Router>
      
    </div>
  );
}

export default App;


