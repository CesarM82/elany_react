import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About'
import NotFound from './pages/NotFound';

import Sidebar from './components/sidebar';
import Footer from './components/footer';
import './App.scss';
 
function App() {
    const history = useHistory();
    const [collapsed, setCollapsed] = useState(false);
    const [image, setImage] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };

    const handleImageChange = (checked) => {
        setImage(checked);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };    
    return (
        <div className="App">
            <Router history={history}>
                <div className={`app ${toggled ? 'toggled' : ''}`}>
                    <Sidebar
                        image={image}
                        collapsed={collapsed}
                        toggled={toggled}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                    />
                    <main>
                        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                            <FaBars />
                        </div>
                        <div><Link to="about">About</Link></div>
                        <Switch>
                            <Route path="/about" element={<About/>} />
                            <Route path="/not-found" component={NotFound} />
                            <Route path="/" exact>
                                <Home image={image} handleImageChange={handleImageChange} />
                            </Route>
                        </Switch>
                        <Footer/>
                    </main>
                </div>
            </Router>
        </div>
    );
}

export default App;
