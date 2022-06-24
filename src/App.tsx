import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import WatchlistContextProvider from "./contexts/WatchlistContext";
import Details from "./routes/Details";
import Homepage from "./routes/Homepage";
import MyList from "./routes/MyList";
import Search from "./routes/Search";

const App = () => {
  return (
    <WatchlistContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/mylist" element={<MyList />} />
          <Route path="search/:query" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </WatchlistContextProvider>
  );
};

export default App;
