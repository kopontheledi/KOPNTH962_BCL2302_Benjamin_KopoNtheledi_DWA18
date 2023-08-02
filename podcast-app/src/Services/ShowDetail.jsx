import React, { useEffect, useState } from "react";

const ShowDetail = ({ show, onBack }) => {
  const [showData, setShowData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchShowData = async () => {
      try {
        const response = await fetch(
          `https://podcast-api.netlify.app/shows/${show.id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch show data");
        }
        const data = await response.json();
        setShowData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching show data:", error);
        setIsLoading(false);
      }
    };

    fetchShowData();
  }, [show.id]);

  return (
    <div>
      <button onClick={onBack}>Back to All Shows</button>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <h2>{show.title}</h2>
          <p>{showData.description}</p>
          {/* Display other details of the show */}
        </div>
      )}
    </div>
  );
};

export default ShowDetail;
