import { Link, NavLink } from 'react-router-dom';
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
    FaRegLaughWink,
    FaHeart
} from 'react-icons/fa';
import logoImg from '../assets/img/logo.png';

const Sidebar = ({
    image,
    collapsed,
    toggled,
    handleToggleSidebar,
    handleCollapsedChange
}) => {
    return (
        <ProSidebar>
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
                    <NavLink to="/" />
                </MenuItem>
                <SubMenu title={'About'} icon={<FaRegLaughWink />}>
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>Contacts Us</MenuItem>
                    <MenuItem>Board of Directors</MenuItem>
                    <MenuItem>Procudure Manual</MenuItem>
                    <MenuItem>Elany Staff</MenuItem>
                </SubMenu>
                
                <SubMenu title={'Publications'} icon={<FaList />}>
                    <MenuItem>Annual Reports</MenuItem>
                    <MenuItem>Bulletins</MenuItem>
                    <MenuItem>Newsletter</MenuItem>
                    <MenuItem>Compliance Advisor</MenuItem>
                    <MenuItem>ELANY Ellaborates</MenuItem>
                    <MenuItem>Video Library</MenuItem>
                    <MenuItem>Forms</MenuItem>
                    <MenuItem>Electronic Part</MenuItem>
                </SubMenu>
                
                <MenuItem icon={<FaGem />}>
                    ELANY Says <Link to="/components" />
                </MenuItem>

                <SubMenu title={'Coverage Codes'} icon={<FaList />}>
                    <MenuItem>Coverage Codes</MenuItem>
                    <MenuItem>Export List Codes</MenuItem>
                    <MenuItem>Insured Business Description Codes</MenuItem>
                </SubMenu>

                <SubMenu title={'Electronico Filling Portal'} icon={<FaList />}>
                    <MenuItem>Registered User Login</MenuItem>
                    <MenuItem>To Register a New User/EFS Resourc</MenuItem>
                </SubMenu>

                <SubMenu title={'Market Data'} icon={<FaList />}>
                    <SubMenu title={'NY Premium & Transactions by RiskType'}>
                        <MenuItem>Summary Report</MenuItem>
                        <MenuItem>Risk Type (SIC Codes) by Coverage Category</MenuItem>
                    </SubMenu>
                    <MenuItem>NY Premium by Coverage Category</MenuItem>
                    <MenuItem>NY Statistics By Other Categories</MenuItem>
                    <MenuItem>Wholesalers vs. Retailers Summary</MenuItem>
                    <SubMenu title={'NY Premium by Insurers'}>
                        <MenuItem>Top 10 Insurers</MenuItem>
                        <MenuItem>Top 25 Insurance Groups</MenuItem>
                        <MenuItem>Premium by Each Foregin Insurers</MenuItem>
                    </SubMenu>
                </SubMenu>

                <SubMenu title={'NY E&S Insurer Reports'} icon={<FaList />}>
                    <SubMenu title={'NY E&S Insurers'}>
                        <MenuItem>Foreign with Statistical Reports</MenuItem>
                        <MenuItem>Alien</MenuItem>
                        <MenuItem>LLoyd's Syndicates</MenuItem>
                    </SubMenu>
                </SubMenu>
                
                <SubMenu title={'Cybersecurity Compliance'} icon={<FaList />}>
                    <MenuItem>CyberCompass</MenuItem>
                    <MenuItem>CyberCompass FAQs</MenuItem>
                    <MenuItem>CyberCompass Awareness Training</MenuItem>
                </SubMenu>
                
                <SubMenu title={'Statutes / Regulations'} icon={<FaList />}>
                    <MenuItem>Statutes</MenuItem>
                    <MenuItem>Regulations</MenuItem>
                </SubMenu>

                <SubMenu title={'Calendar of Events'} icon={<FaList />}>
                    <MenuItem>Upcoming Events</MenuItem>
                    <MenuItem>Past Events</MenuItem>
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