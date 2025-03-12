import { useState } from "react";
import "./shows.css";

/** Allows users to browse through the episodes of the given show */
export default function ShowDetails({ show }) {
  const [selectedEpisode, setSelectedEpisode] = useState();

  if (!selectedEpisode) {
    return (
      <section className="details">
        <h2>Show Details</h2>
        <p>Select a show to learn more.</p>
      </section>
    );
  }
  return <div className="show-details"></div>;
}
