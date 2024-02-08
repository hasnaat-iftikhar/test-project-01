import { Route, Routes } from "react-router-dom";

// Page
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar";

// Temp
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <main className="max-w-[1920px] mx-auto relative">
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </main>
  );
}

export default App;
