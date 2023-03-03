import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Sidebar from './components/sidebar';
import './App.css';
import './assets/scss/elany.scss';
 
function App() {
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
            <Router>
                <Sidebar
                    image={image}
                    collapsed={collapsed}
                    toggled={toggled}
                    handleToggleSidebar={handleToggleSidebar}
                    handleCollapsedChange={handleCollapsedChange}
                />
                <Switch>
                    <Route path="/not-found" component={NotFound} />
                    <Route path="/" exact>
                        <Home image={image} handleImageChange={handleImageChange} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
