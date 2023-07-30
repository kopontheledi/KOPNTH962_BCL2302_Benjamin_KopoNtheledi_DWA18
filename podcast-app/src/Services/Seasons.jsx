import React from 'react';

const Seasons = ({ seasons }) => {
  const renderSeasonPreview = () => {
    if (!seasons || seasons.length === 0) {
      return <p>No seasons available.</p>;
    }

    const previewCount = 3; // Show a preview of 3 seasons (you can adjust this value)
    const seasonPreview = seasons.slice(0, previewCount).join(', ');
    const remainingSeasons = seasons.length > previewCount ? `...and ${seasons.length - previewCount} more` : '';

    return (
      <div>
        <p>Seasons: {seasonPreview}</p>
        {remainingSeasons && <p>{remainingSeasons}</p>}
      </div>
    );
  };

  return <div>{renderSeasonPreview()}</div>;
};

export default Seasons;
