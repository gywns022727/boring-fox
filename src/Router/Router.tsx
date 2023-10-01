import React from "react";
import GlobalStyle from "../Style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "../Page/Main";

export default function Router() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
