import { Routes, Route, Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MyPage from './pages/MyPage'
import Nav from './components/Nav'
import './App.css'
import SearchPage from './pages/SearchPage'
import BoardPage from './pages/BoardPage'
import WritePage from './pages/WritePage'
import ErrorPage from './pages/404Page'
import SavesPage from './pages/SavesPage'
import LikePage from './pages/LikeListPage'
import TagPage from './pages/TagPage'
import styled from 'styled-components'
import WriteListPage from './pages/WriteListPage'

const Content = styled.div`
  position: relative;
  top: 120px;
  width: 100%;
  margin: 0 auto;
`

function App() {
  const Layout = () => {
    return (
      <>
        <Nav />
        <Content>
          <Outlet />
        </Content>
      </>
    )
  }

  return (
    <>
      <div className='app'>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='/recent' element={<HomePage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/mypage' element={<MyPage />} />
            <Route path='/:userName' element={<WriteListPage />} />
            <Route path='/write/:postId' element={<SavesPage />} />
            <Route path='/like' element={<LikePage />} />
            <Route path='/boards/:boardId' element={<BoardPage />} />
            <Route path='/tags/:tagName' element={<TagPage />} />
            
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/*' element={<ErrorPage />} />
          </Route>
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </div>
    </>
  )
}

export default App