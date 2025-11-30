import { BrowserRouter, Route, Routes } from "react-router";
import AuthPage from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AuthPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
