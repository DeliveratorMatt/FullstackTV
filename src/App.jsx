/**
 * React TV is an web streaming platform that allows users to browse
 * through the episodes of a variety of different shows.
 */

import { useState } from "react";
import { tvShows } from "./shows/data.js";
import ShowDetails from "./shows/ShowDetails.jsx";
import ShowSelection from "./shows/ShowSelection.jsx";

export default function App() {
  const [selectedShow, setSelectedShow] = useState();

  return (
    <>
      <header>
        <h1>React TV</h1>
        <ShowSelection shows={tvShows} setSelectedShow={setSelectedShow} />
      </header>
      <main>
        <ShowDetails show={selectedShow} />
      </main>
    </>
  );
}
