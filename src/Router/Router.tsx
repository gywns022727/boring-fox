import React, { useState } from "react";
import GlobalStyle from "../Style";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoadingContext, CountContext } from "../Components/Context/ContextApi";
import { AnimatePresence } from "framer-motion";
import Main from "../Page/Main";
import Ark from "../Page/Ark";
import NotFound from "../Page/404";

export default function Router() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCount, setIsCount] = useState<number>(1);

  return (
    <>
      <GlobalStyle />
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        <CountContext.Provider value={{ isCount, setIsCount }}>
          <AnimatePresence>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/:pageNumber" element={<Main />} />
                <Route path="/ark" element={<Ark />} />
              </Routes>
            </BrowserRouter>
          </AnimatePresence>
        </CountContext.Provider>
      </LoadingContext.Provider>
    </>
  );
}
