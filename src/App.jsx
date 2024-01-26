import './App.css';
// Components
// Pages
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
import PageNotFound from './pages/PageNotFound';
import BlogPage from './pages/BlogPage';
import ProjectsPage from './pages/ProjectsPage'
import TeamPage from './pages/TeamPage';
// React Router Dom

import { 
  BrowserRouter,
  Routes, Route,
  NavLink
  
} from 'react-router-dom' //v6.11
function App() {
  

  return (
    <div className="App wrapper">
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route index path='/' element={<HomePage telegram_link="https://t.me/reactanvar" instagram_link="https://www.instagram.com/react_anvar"   github_link="https://github.com/react-anvar-demo" youtube_link="https://youtube/reactanvar"  twitter_link="https://twitter.com/reactanvar" heroSection_image="https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oUWl1AAwlABqwzFfCFeDgdnU9HEtrSAQIAbbQ5~tplv-tej9nj120t-origin.webp" />}/>
          <Route path='*' element={<PageNotFound/>}/>
          <Route path='/loyihalar' element={<ProjectsPage/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
