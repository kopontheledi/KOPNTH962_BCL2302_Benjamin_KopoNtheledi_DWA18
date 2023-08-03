const FavoritePodcast = () => {
  const favoritePodcasts = JSON.parse(localStorage.getItem("favoritePodcasts")) || [];
  return (
    <div>
      <h2>Favorite Podcasts</h2>
      {favoritePodcasts.length > 0 ? (
        <ul>
          {favoritePodcasts.map((podcast) => (
            <li key={podcast.id}>{podcast.title}</li>
          ))}
        </ul>
      ) : (
        <p>No favorite podcasts yet. Start adding some!</p>
      )}
    </div>
  );
};
export default FavoritePodcast;