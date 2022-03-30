import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import SidebarIcons from "./components/Organisms/SidebarIcons";
import Sidebar from "./components/Organisms/Sidebar";
import Dashboard from "./components/Pages/Dashboard";
import JobsSearch from "./components/Pages/JobSearch";
import {useState} from "react";

function App() {
    const [sidebarType, setSidebarType] = useState(false);
    const toggleSidebar = (flag) => {
        setSidebarType(flag)
    }
    return (
        <div className="App bg-gray-b">
            <Router>
            <div className="relative min-h-screen flex">
                {sidebarType && <div className="bg-white w-72">
                                        <Sidebar toggleSidebar={toggleSidebar} />
                                    </div>
                }
    
    
                {!sidebarType && <div className="bg-white w-[107]">
                                        <SidebarIcons toggleSidebar={toggleSidebar} />
                                    </div>
                }
                
    
                <div className="p-12 flex-1 max-w-6xl">
                    
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/job-search" element={<JobsSearch />} />
                        </Routes>
                    
                </div>
            </div>
            </Router>
        </div>
)
}

export default App
