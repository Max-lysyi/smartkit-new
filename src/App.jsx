import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Functional from "./components/Functional";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import MedicinesPage from "./components/MedicinesPage"; 
import DounloadApp from "./components/DounloadApp";
import Questions from "./components/Questions"
import "./App.scss";

function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <main>
                <div className="light__bg">
                  <div className="wrapper">
                    <Hero />
                  </div>
                </div>

                <Functional />

                <div className="wrapper">
                  <Testimonials />
                </div>
                <div className="wrapper">
                  <DounloadApp />
                </div>
                <div className="wrapper">
                  <Questions />
                </div>
              </main>
            </>
          }
        />

        <Route path="/medicines" element={<MedicinesPage />} />
      </Routes>

      <div className="footer__bg">
        <div className="wrapper">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
