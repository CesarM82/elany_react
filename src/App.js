import { useState } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

import Sidebar from './components/sidebar';
import Footer from './components/footer';
import './App.scss';
 
function App() {
    const [collapsed, setCollapsed] = useState(false);
    const [toggled, setToggled] = useState(false);

    const handleCollapsedChange = () => {
        setCollapsed(!collapsed);
    };

    const handleToggleSidebar = (value) => {
        setToggled(value);
    };    
    return (
        <div className="App">
                <div className={`app ${toggled ? 'toggled' : ''}`}>
                    <Sidebar
                        collapsed={collapsed}
                        toggled={toggled}
                        handleToggleSidebar={handleToggleSidebar}
                        handleCollapsedChange={handleCollapsedChange}
                    />
                    <main>
                        <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
                            <FaBars />
                        </div>
                        <Switch>
                            <Route path="/about" component={About} />
                            <Route path="/profile" component={Profile} />
                            <Route path="/not-found" component={NotFound} />
                            <Route path="/" exact component={Home}/>
                            <Redirect to="/not-found"/>
                        </Switch>
                        <Footer/>
                    </main>
                </div>
        </div>
    );
}

export default App;
