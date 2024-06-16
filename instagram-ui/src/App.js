import './App.css';
import Feed from './components/Feed';
import { Route, Routes } from 'react-router-dom';
import HomePageLayout from './components/HomePageLayout';
import MessagePage from './components/MessagePage';
import SearchPage from './components/SearchPage';
import NotificationPage from './components/NotificationPage';


function App() {
  return (

          <Routes>
            <Route element={<HomePageLayout/>}>
              <Route index element={<Feed />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/notification' element={<NotificationPage />} />
              <Route path='/messages' element={<MessagePage />} />
            </Route>
          </Routes>
  );
}

export default App;
