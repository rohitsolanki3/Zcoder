import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Signin } from "./pages/signin-page";
import { Signup } from "./pages/signup-page";
import { Homepage } from "./pages/homepage";
import { Logout } from "./pages/logout";

function App() {
  return <>
    <BrowserRouter>
        <Routes>
            <Route path="/signin" element={<Signin/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/homepage" element={<Homepage/>} />
            <Route path="/logout" element={<Logout/>} />

        </Routes>
    </BrowserRouter>
  </>;
}

export default App;