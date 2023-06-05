import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./components/AddUser";
import Profile from "./components/Profile";
import PendingRequest from "./components/PendingRequest";
import Task from "./components/Task";
import ProfileDetails from "./components/ProfileDetails";
import ResetPassword from "./components/ResetPassword";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addUser" element={<AddUser />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/pendingRequest" element={<PendingRequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
