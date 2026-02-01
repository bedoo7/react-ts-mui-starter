import { Route, Routes } from "react-router";
import Hello from "./components/Hello";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Hello />} />
    </Routes>
  );
}
