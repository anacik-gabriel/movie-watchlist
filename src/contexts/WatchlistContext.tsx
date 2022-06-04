import React, { useContext, useEffect, useState } from "react";
import { imdbMovie } from "../types/imdbTypes";

export interface IWatchlistContext {
  watchlist: imdbMovie[];
  setWatchlist: React.Dispatch<React.SetStateAction<imdbMovie[]>>;
}

const WatchlistContext = React.createContext<IWatchlistContext>({
  watchlist: [],
  setWatchlist: (() => {}) as React.Dispatch<React.SetStateAction<imdbMovie[]>>,
});

const WatchlistContextProvider = (props: { children: React.ReactNode }) => {
  const [watchlist, setWatchlist] = useState<imdbMovie[]>(
    JSON.parse(localStorage.getItem("watchlist") || "[]")
  );
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);
  return (
    <WatchlistContext.Provider value={{ watchlist, setWatchlist }}>
      {props.children}
    </WatchlistContext.Provider>
  );
};

export default WatchlistContextProvider;

export const useWatchlistContext = () => useContext(WatchlistContext);
