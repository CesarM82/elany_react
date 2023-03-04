import { BrowserRouter as NavLink, Link } from 'react-router-dom';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import {
    FaUser,
    FaAngleDoubleLeft,
    FaAngleDoubleRight,
    FaTachometerAlt,
    FaGem,
    FaList,
    FaRegLaughWink
} from 'react-icons/fa';
import logoImg from '../assets/img/logo.png';
import sidebarBg from '../assets/img/logo.png';

const Sidebar = ({
    image,
    collapsed,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange
}) => {
    return (
        <ProSidebar
            image={image ? sidebarBg : false}
            collapsed={collapsed}
            toggled={toggled}
            onToggle={handleToggleSidebar}
            breakPoint="md"
        >
        {/* Header */}
        <SidebarHeader>
            <Menu iconShape="circle">
            {collapsed ? (
                <MenuItem
                    icon={<FaAngleDoubleRight />}
                    onClick={handleCollapsedChange}
                ></MenuItem>
            ) : (
                <MenuItem
                    suffix={<FaAngleDoubleLeft />}
                    onClick={handleCollapsedChange}
                >
                    <div>
                        <img src={logoImg}></img>
                    </div>
                </MenuItem>
            )}
            </Menu>
        </SidebarHeader>
        {/* Content */}
        <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem
                    icon={<FaTachometerAlt />}
                    suffix={<span className="badge red">NEW</span>}
                >
                    Home
                    <Link to="/" />
                </MenuItem>
                <SubMenu title={'About'} icon={<FaRegLaughWink />}>
                    <MenuItem>About Us <Link to="/about" onClick={() => window.location.reload()}/></MenuItem>
                    <MenuItem>Contacts Us <Link to="/contactUs"/> </MenuItem>
                    <MenuItem>Board of Directors <NavLink to="/" /></MenuItem>
                    <MenuItem>Procudure Manual<NavLink to="/" /></MenuItem>
                    <MenuItem>Elany Staff<Link to="/" /></MenuItem>
                </SubMenu>
                
                <SubMenu title={'Publications'} icon={<FaList />}>
                    <MenuItem>Annual Reports<Link to="/" /></MenuItem>
                    <MenuItem>Bulletins<Link to="/" /></MenuItem>
                    <MenuItem>Newsletter<Link to="/" /></MenuItem>
                    <MenuItem>Compliance Advisor<Link to="/" /></MenuItem>
                    <MenuItem>ELANY Ellaborates<Link to="/" /></MenuItem>
                    <MenuItem>Video Library<Link to="/" /></MenuItem>
                    <MenuItem>Forms<Link to="/" /></MenuItem>
                    <MenuItem>Electronic Part<Link to="/" /></MenuItem>
                </SubMenu>
                
                <MenuItem icon={<FaGem />}>
                    ELANY Says <Link to="/" />
                </MenuItem>

                <SubMenu title={'Coverage Codes'} icon={<FaList />}>
                    <MenuItem>Coverage Codes<Link to="/" /></MenuItem>
                    <MenuItem>Export List Codes<Link to="/" /></MenuItem>
                    <MenuItem>Insured Business Description Codes<Link to="/" /></MenuItem>
                </SubMenu>

                <SubMenu title={'Electronico Filling Portal'} icon={<FaList />}>
                    <MenuItem>Registered User Login<Link to="/" /></MenuItem>
                    <MenuItem>To Register a New User/EFS Resourc<Link to="/" /></MenuItem>
                </SubMenu>

                <SubMenu title={'Market Data'} icon={<FaList />}>
                    <SubMenu title={'NY Premium & Transactions by RiskType'}>
                        <MenuItem>Summary Report<Link to="/" /></MenuItem>
                        <MenuItem>Risk Type (SIC Codes) by Coverage Category<Link to="/" /></MenuItem>
                    </SubMenu>
                    <MenuItem>NY Premium by Coverage Category<Link to="/" /></MenuItem>
                    <MenuItem>NY Statistics By Other Categories<Link to="/" /></MenuItem>
                    <MenuItem>Wholesalers vs. Retailers Summary<Link to="/" /></MenuItem>
                    <SubMenu title={'NY Premium by Insurers'}>
                        <MenuItem>Top 10 Insurers<Link to="/" /></MenuItem>
                        <MenuItem>Top 25 Insurance Groups<Link to="/" /></MenuItem>
                        <MenuItem>Premium by Each Foregin Insurers<Link to="/" /></MenuItem>
                    </SubMenu>
                </SubMenu>

                <SubMenu title={'NY E&S Insurer Reports'} icon={<FaList />}>
                    <SubMenu title={'NY E&S Insurers'}>
                        <MenuItem>Foreign with Statistical Reports<Link to="/foreign-reports" /></MenuItem>
                        <MenuItem>Alien<Link to="/alien" /></MenuItem>
                        <MenuItem>LLoyd's Syndicates<Link to="/syndicates" /></MenuItem>
                    </SubMenu>
                </SubMenu>
                
                <SubMenu title={'Cybersecurity Compliance'} icon={<FaList />}>
                    <MenuItem>CyberCompass<Link to="/cyber"/></MenuItem>
                    <MenuItem>CyberCompass FAQs<Link to="/cyberfaq"/></MenuItem>
                    <MenuItem>CyberCompass Awareness Training<Link to="/cyberat" /></MenuItem>
                </SubMenu>
                
                <SubMenu title={'Statutes / Regulations'} icon={<FaList />}>
                    <MenuItem>Statutes<Link to="/statues" /></MenuItem>
                    <MenuItem>Regulations<Link to="/regulations" /></MenuItem>
                </SubMenu>

                <SubMenu title={'Calendar of Events'} icon={<FaList />}>
                    <MenuItem>Upcoming Events<Link to="/upcoming-events" /></MenuItem>
                    <MenuItem>Past Events<Link to="/past-events" /></MenuItem>
                </SubMenu>
            </Menu>
        </SidebarContent>
        {/* Footer */}
        <SidebarFooter style={{ textAlign: 'center' }}>
            <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
            <Link
                className="sidebar-btn"
                style={{ cursor: 'pointer' }}
                to="/profile"
            >
                <FaUser />
                <span>My Account</span>
            </Link>
            </div>
        </SidebarFooter>
        </ProSidebar>
    );
};

export default Sidebar;