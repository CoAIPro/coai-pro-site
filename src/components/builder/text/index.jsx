import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import FontSelector from './FontSelector';

const Text = () => {
    const [selectedFont, setSelectedFont] = useState('');
    const [searchTerm, setSearchTerm] = useState('');

    const handleFontSelect = (font) => {
        setSelectedFont(font);
        // Here you would typically update the selected text element's font in your builder
        console.log('Selected font:', font);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <div>
            {/* search btn */}
            <div className="w-full relative">
                <input 
                    type="text" 
                    className="w-full h-full bg-[#EEF2FF] pl-14 pr-3 py-5 rounded-xl" 
                    placeholder="Search fonts..." 
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <span className="absolute left-4 top-1/2 -translate-y-[50%] text-2xl">
                    <CiSearch />
                </span>
            </div>

            {/* Font Selector */}
            <FontSelector 
                onFontSelect={handleFontSelect} 
                searchTerm={searchTerm} 
                selectedFont={selectedFont}
            />

            {selectedFont && (
                <div className="mt-4 p-4 bg-[#EEF2FF] rounded-xl">
                    <p className="text-sm text-gray-600">Selected Font:</p>
                    <p className="text-lg" style={{ fontFamily: selectedFont }}>{selectedFont}</p>
                </div>
            )}

            {/* Add a Google Font selector component to the website builder interface. This component should include a scrollable box (horizontal scroll on the right side) that displays a list of popular Google Fonts for users to choose from.

            The font options should include (but are not limited to):
            Poppins, Inter, OV Soge, Abril, Aclonica, Acme, Actay, Actor, Adamina, and more.

            The font selection box should be:

            Fully scrollable horizontally to accommodate many fonts

            Responsive and take 100% of the available width (no need to manually set a fixed width)

            Styled to clearly display font names using their respective font styles, so users can preview them before selecting

            Users should be able to click a font name to apply it to the selected text or element in the website builder. */}
        </div>
    );
};

export default Text;