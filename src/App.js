import { Route, Routes } from "react-router-dom";

// components
import DropdownMenu from './components/DropdownMenu';
import NavBar from './components/NavBar';

// pages
import Home from './pages/Home';
import VolunteerProfile from './pages/VolunteerProfile';
import Login from './pages/Login';
import OrganizationProfile from './pages/OrgProfilePage';
import EventList from './pages/EventList';
import EventCalendar from './pages/EventCalendar';
import Test from './pages/Test';

function App() {

    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/VolunteerProfile" element={<VolunteerProfile />} />
            <Route path="/NavBar" element={<NavBar />} />
            <Route path="/EventList" element={<EventList />} />
            <Route path="/OrgProfile" element={<OrganizationProfile />} />
            <Route path="/EventCalendar" element={<EventCalendar />} />
            <Route path="/Dropdown" element={<DropdownMenu />} />
            <Route path="/Test" element={<Test />} />
        </Routes>
    )
}

export default App;