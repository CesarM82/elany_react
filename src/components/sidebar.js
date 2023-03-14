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
    collapsed,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange
}) => {
    return (
        <ProSidebar
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
                    <MenuItem>About Us <Link to="about"/></MenuItem>
                    <MenuItem>Contacts Us <Link to="contactUs"/> </MenuItem>
                    <MenuItem>Board of Directors <NavLink to="board" /></MenuItem>
                    <MenuItem>Procudure Manual<NavLink to="procedure-maual" /></MenuItem>
                    <MenuItem>Elany Staff<Link to="staff" /></MenuItem>
                </SubMenu>
                
                <SubMenu title={'Publications'} icon={<FaList />}>
                    <MenuItem>Annual Reports<Link to="anual-reports" /></MenuItem>
                    <MenuItem>Bulletins<Link to="bulletines" /></MenuItem>
                    <MenuItem>Newsletter<Link to="newsletter" /></MenuItem>
                    <MenuItem>Compliance Advisor<Link to="comliance-advisor" /></MenuItem>
                    <MenuItem>ELANY Ellaborates<Link to="elany-ellaborates" /></MenuItem>
                    <MenuItem>Video Library<Link to="video-library" /></MenuItem>
                    <MenuItem>Forms<Link to="forms" /></MenuItem>
                    <MenuItem>Electronic Part<Link to="electronic-part" /></MenuItem>
                </SubMenu>
                
                <MenuItem icon={<FaGem />}>
                    ELANY Says <Link to="elany-says" />
                </MenuItem>

                <SubMenu title={'Coverage Codes'} icon={<FaList />}>
                    <MenuItem>Coverage Codes<Link to="corverage-codes" /></MenuItem>
                    <MenuItem>Export List Codes<Link to="export-codes" /></MenuItem>
                    <MenuItem>Insured Business Description Codes<Link to="insured-codes" /></MenuItem>
                </SubMenu>

                <SubMenu title={'Electronico Filling Portal'} icon={<FaList />}>
                    <MenuItem>Registered User Login<Link to="registered-login" /></MenuItem>
                    <MenuItem>To Register a New User/EFS Resourc<Link to="to-resource" /></MenuItem>
                </SubMenu>

                <SubMenu title={'Market Data'} icon={<FaList />}>
                    <SubMenu title={'NY Premium & Transactions by RiskType'}>
                        <MenuItem>Summary Report<Link to="summary-report" /></MenuItem>
                        <MenuItem>Risk Type (SIC Codes) by Coverage Category<Link to="rist-category" /></MenuItem>
                    </SubMenu>
                    <MenuItem>NY Premium by Coverage Category<Link to="ny-pre-category" /></MenuItem>
                    <MenuItem>NY Statistics By Other Categories<Link to="ny-stat-category" /></MenuItem>
                    <MenuItem>Wholesalers vs. Retailers Summary<Link to="whole-summary" /></MenuItem>
                    <SubMenu title={'NY Premium by Insurers'}>
                        <MenuItem>Top 10 Insurers<Link to="top-100" /></MenuItem>
                        <MenuItem>Top 25 Insurance Groups<Link to="top-25" /></MenuItem>
                        <MenuItem>Premium by Each Foregin Insurers<Link to="premium-insurers" /></MenuItem>
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