import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";

import profileImg from '../assets/img/profile1.jpg';

function Profile() {
    const [selectedTab, setSelectedTab] = useTabs([
        "account",
        "company",
        "team",
        "billing",
      ]);
    return (
        <>
            <div className="profile-page">
                <header className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            <div className="flex justify-center items-center col-span-1">
                                <img className="w-20 h-20 rounded-full" src={profileImg}></img>
                            </div>
                            <div className='flex flex-col col-span-1 lg:col-span-2'>
                                <h1 className='xl:text-3xl lg:text-2xl md:text-xl sm:text-lg'>Emma Stone</h1>
                                <p className='pb-4'>United States</p>
                                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-1 border border-blue-700 rounded text-sm'>
                                    Update info 
                                </button>
                            </div>
                            <div className='col-span-1 lg:col-span-3'>
                                <h1 className='text-3xl text-red-700 text-right'>93%</h1>
                                <p className='text-xs text-right'>W A T C H</p>
                            </div>
                        </div>
                    </div>
                </header>
                <main>
                    <nav className="flex border-b border-gray-300">
                        <TabSelector
                            isActive={selectedTab === "account"}
                            onClick={() => setSelectedTab("account")}
                        >
                        My Account
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === "company"}
                            onClick={() => setSelectedTab("company")}
                        >
                            Company
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === "team"}
                            onClick={() => setSelectedTab("team")}
                            >
                            Team Members
                        </TabSelector>
                        <TabSelector
                            isActive={selectedTab === "billing"}
                            onClick={() => setSelectedTab("billing")}
                            >
                            Billing
                        </TabSelector>
                    </nav>
                    <div className="p-4">
                        <TabPanel hidden={selectedTab !== "account"}>My Account</TabPanel>
                        <TabPanel hidden={selectedTab !== "company"}>Company</TabPanel>
                        <TabPanel hidden={selectedTab !== "team"}>Team Members</TabPanel>
                        <TabPanel hidden={selectedTab !== "billing"}>Billing</TabPanel>
                    </div>
                </main>
            </div>  
        </>
    );
}
  
export default Profile;