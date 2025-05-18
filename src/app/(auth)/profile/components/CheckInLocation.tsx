const CheckInLocation = () => {
  const favoritePlacesList = [
    'Paris, France',
    'Kyoto, Japan',
    'Rome, Italy',
    'New York City, USA',
    'Santorini, Greece',
  ];
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Check In Location</h2>
      {favoritePlacesList.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {' '}
          {/* Increased gap */}
          {favoritePlacesList.map((place) => (
            <span
              key={place}
              className="bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700 shadow-sm transition-all hover:bg-blue-200 hover:shadow-md" // Updated classes
            >
              {place}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No favorite places added yet.</p>
      )}
    </div>
  );
};
export default CheckInLocation;
