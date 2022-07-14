import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
// k nên dùng lazy ơ đây.
import HomePage from '../Pages/home/index';
import AbountPage from '../Pages/about/index';
import ContactPage from '../Pages/contact/index';
import EducationPage from '../Pages/education/index';
import ProtfolioPage from '../Pages/Portfolio/index';

const RootRouter = () => {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/myCvApp/home" element={<HomePage />} />
            <Route path="/myCvApp/AboutPage" element={<AbountPage />} />
            <Route path="/myCvApp/ContactPage" element={<ContactPage />} />
            <Route path="/myCvApp/EducationPage" element={<EducationPage />} />
            <Route path="/myCvApp/ProtfolioPage" element={<ProtfolioPage />} />
            {/* <Route path="/*" element={<ErrorPage />} /> */}
          </Routes>
      </BrowserRouter>
    )
};
export default React.memo(RootRouter);