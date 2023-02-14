import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppCard from "../pages/AppCard";
import AppClass from "../pages/AppClass";
import AppForm from "../pages/AppForm";
import AppMentor from "../pages/AppMentor";
import AppMentorButton from "../pages/AppMentorsButton";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppCard />} />
        <Route path="/class" element={<AppClass />} />
        <Route path="/form" element={<AppForm />} />
        <Route path="/mentor" element={<AppMentor />} />
        <Route path="/change" element={<AppMentorButton />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
