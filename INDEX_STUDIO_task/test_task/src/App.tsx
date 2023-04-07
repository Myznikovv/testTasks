import * as React from "react";
import './App.css';
import VerticalSkeletonList from "./components/VerticalSkeletonList";
import useCards from "./Hooks/useCards";
import VerticalCardList from "./components/VerticalCardList";
import Spinner from "./components/Icons/Spinner/Spinner";

function App() {
 const {loading,newCardsLoading} = useCards();

  return (
    <div className="App">
        {loading?<VerticalSkeletonList/>:<VerticalCardList/>}
        {newCardsLoading?<Spinner/>:null}
    </div>

  );
}

export default App;
