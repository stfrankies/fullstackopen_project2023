import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Home from './pages/Home'
import CreateRecipe from './pages/CreateRecipe'

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />                
                <Route path="/create-recipe" element={<CreateRecipe />} />
            </Routes>
        </Router>
    )
}

export default App
