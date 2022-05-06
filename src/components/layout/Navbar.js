import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from '../pages/Home';
import Empresa from '../pages/Empresa';
import Contato from '../pages/Contato';

import './Navbar.module.css';

function Navbar() {
    return (
        <Router>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/empresa">EMPRESA</Link></li>
                <li><Link to="/contato">CONTATO</Link></li>
            </ul>
            <Routes>
                <Route exact path='/'
                    element={
                        <Home />
                    }
                />
                <Route path='/empresa'
                    element={
                        <Empresa />
                    }
                />
                <Route path='/contato'
                    element={
                        <Contato />
                    }
                />
            </Routes>
        </Router>
    );
}

export default Navbar;
