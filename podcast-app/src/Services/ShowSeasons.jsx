import React from "react";
import { Link, useParams } from "react-router-dom";

function ShowSeasons() {
  const { id } = useParams();

  // Fetch the season data for the specific show using 'id' if needed

  return (
    <div>
      <h2>Seasons View</h2>
      {/* Render the seasons information here */}
      <Link to={`/show/${id}`}>Back to Show View</Link>
    </div>
  );
}

export default ShowSeasons;
