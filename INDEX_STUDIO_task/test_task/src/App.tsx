import * as React from "react";
import './App.css';
import MainListPage from "./components/MainListPage";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
            <MainListPage/>
        </ErrorBoundary>

    </div>

  );
}

export default App;
