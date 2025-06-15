import { useEffect, useMemo, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import WebFont from 'webfontloader';

const popularFonts = [
  'Poppins', 'Inter', 'OV Soge', 'Abril Fatface', 'Aclonica', 
  'Acme', 'Actay', 'Actor', 'Adamina', 'Roboto', 'Montserrat',
  'Open Sans', 'Lato', 'Raleway', 'Oswald', 'Source Sans Pro'
];

const FontSelector = ({ onFontSelect, searchTerm, selectedFont }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    WebFont.load({
      google: {
        families: popularFonts
      },
      active: () => setFontsLoaded(true),
    });
  }, []);

  const filteredFonts = useMemo(() => {
    if (!searchTerm) return popularFonts;
    const lowercaseSearch = searchTerm.toLowerCase();
    return popularFonts.filter(font => 
      font.toLowerCase().includes(lowercaseSearch)
    );
  }, [searchTerm]);

  if (!fontsLoaded) {
    return <div className="w-full mt-6">Loading fonts...</div>;
  }

  return (
    <div className="w-full mt-6">
      <div className="w-full max-h-[400px] overflow-y-auto bg-white rounded-lg shadow-sm">
        {filteredFonts.map((font) => (
          <button
            key={font}
            onClick={() => onFontSelect(font)}
            className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0"
          >
            <span style={{ fontFamily: font }}>
              {font}
            </span>
            {selectedFont === font && (
              <BsCheckCircleFill className="text-green-500 ml-2 text-lg" />
            )}
          </button>
        ))}
        {filteredFonts.length === 0 && (
          <div className="text-gray-500 py-4 text-center">
            No fonts found matching "{searchTerm}"
          </div>
        )}
      </div>
    </div>
  );
};

export default FontSelector; 