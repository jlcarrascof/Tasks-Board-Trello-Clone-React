import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import Main from './components/Main.jsx'

function App() {

  return (
    <>
      <Header></Header>
      <div className="content flex">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
    </>
  )
}

export default App
