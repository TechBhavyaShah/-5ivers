import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AdminRoutes from "./components/admin/AdminRoutes";
import NormalRoutes from "./components/NormalRoutes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/*" element={<NormalRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route
                    path="*"
                    element={
                        <p className="text-center fs-1 mt-5">
                            There's nothing here: 404!
                        </p>
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
