import { Routes, Route } from "react-router-dom";
import ProgramViewPage from "./pages/ProgramViewPage";
import ApplicationViewPage from "./pages/ApplicationViewPage";
import OpportunityViewPage from "./pages/OpportunityViewPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<ProgramViewPage />} />
      <Route path="/application" element={<ApplicationViewPage />} />
      <Route path="/opportunity" element={<OpportunityViewPage />} />
    </Routes>
  );
};

export default App;
