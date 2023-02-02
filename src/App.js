import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";

//components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Summarize from "./components/Summarize.jsx";
import ArticleExtraction from "./components/ArticleExtraction";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div>
        <Home />
      {/* <Summarize /> */}
      {/* <ArticleExtraction /> */}
        
      </div>

      {/* Toast  */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}

export default App;
