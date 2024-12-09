import React from 'react';

const SearchSuggestions = ({ suggestions, setSearchText }) => {
  return (
    <div className="absolute z-10 w-full bg-white mt-12 rounded-md shadow-lg max-h-60 overflow-y-auto">
      {suggestions.map((suggestion) => (
        <div
          key={suggestion.info.id}
          className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          onClick={() => setSearchText(suggestion.info.name)}
        >
          <p className="font-semibold">{suggestion.info.name}</p>
          <p className="text-sm text-gray-500">{suggestion.info.cuisines.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchSuggestions;

