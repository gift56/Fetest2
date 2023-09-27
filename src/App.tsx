import { Routes, Route } from "react-router-dom";
import ProgramViewPage from "./pages/ProgramViewPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProgramViewPage />} />
    </Routes>
  );
};

export default App;
