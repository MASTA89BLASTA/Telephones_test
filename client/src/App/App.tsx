import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
      </Route>
    </Routes>
  );
}

export default App;