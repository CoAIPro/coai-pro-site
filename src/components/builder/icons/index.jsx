import { useIconStore } from "@/store";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { useRef } from "react";
import { HexColorPicker } from "react-colorful";
import { CiSearch } from "react-icons/ci";
import { FiUpload } from "react-icons/fi";

const Icons = () => {
    const {
        selectedPack,
        searchQuery,
        selectedStyle,
        selectedColor,
        selectedGradient,
        iconSize,
        iconPadding,
        showColorPicker,
        showGradientPicker,
        selectedIcon,
        setSelectedPack,
        setSearchQuery,
        setSelectedStyle,
        setSelectedColor,
        setSelectedGradient,
        setIconSize,
        setIconPadding,
        setShowColorPicker,
        setShowGradientPicker,
        setSelectedIcon,
        getFilteredIcons,
        getIconPacks,
        addCustomIcon
    } = useIconStore();

    const fileInputRef = useRef(null);
    const iconPacks = getIconPacks();
    const filteredIcons = getFilteredIcons();

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "image/svg+xml") {
            const reader = new FileReader();
            reader.onload = (e) => {
                addCustomIcon({
                    icon: <img src={e.target.result} alt="Custom Icon" className="w-6 h-6" />,
                    name: file.name.replace('.svg', '')
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const renderIcon = (icon) => {
        const IconComponent = icon.icon;
        return <IconComponent size={iconSize} />;
    };

    return (
        <div className="flex h-full relative">
            {/* Left Sidebar */}
            <div className="w-full border-r border-gray-200 p-4 flex flex-col gap-4">
                {/* Search */}
                <div className="relative">
                    <input
                        type="text"
                        className="w-full h-full bg-[#EEF2FF] pl-10 pr-3 py-2 rounded-xl"
                        placeholder="Search Icons..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xl">
                        <CiSearch />
                    </span>
                </div>

                {/* Icon Packs */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-500">Icon Packs</h4>
                    <Tabs value={selectedPack} onValueChange={setSelectedPack}>
                        <TabsList className="flex flex-col gap-1">
                            {iconPacks.map((pack) => (
                                <TabsTrigger
                                    key={pack.id}
                                    value={pack.id}
                                    className="px-3 py-2 text-sm rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white hover:bg-gray-100"
                                >
                                    {pack.name}
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </Tabs>
                </div>

                {/* Style Controls */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-500">Style</h4>
                    <div className="grid grid-cols-2 gap-2">
                        {['outline', 'fill', 'bulk', 'two-tone'].map((style) => (
                            <button
                                key={style}
                                type="button"
                                className={`px-3 py-2 text-sm rounded-lg capitalize ${
                                    selectedStyle === style
                                        ? 'bg-primary text-white'
                                        : 'bg-[#EEF2FF] hover:bg-gray-100'
                                }`}
                                onClick={() => setSelectedStyle(style)}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color Controls */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-500">Color</h4>
                    <div className="grid grid-cols-2 gap-2">
                        <button
                            type="button"
                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#EEF2FF] hover:bg-gray-100"
                            onClick={() => {
                                setSelectedColor('#000000');
                                setSelectedGradient(null);
                            }}
                        >
                            <div className="w-4 h-4 rounded-full bg-black"></div>
                            <span>Black</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#EEF2FF] hover:bg-gray-100"
                            onClick={() => setShowGradientPicker(!showGradientPicker)}
                        >
                            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
                            <span>Gradient</span>
                        </button>
                        <button
                            type="button"
                            className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#EEF2FF] hover:bg-gray-100"
                            onClick={() => setShowColorPicker(!showColorPicker)}
                        >
                            <div className="w-4 h-4 rounded-full" style={{ backgroundColor: selectedColor }}></div>
                            <span>Custom</span>
                        </button>
                    </div>
                    {showColorPicker && (
                        <div className="absolute z-50 mt-2">
                            <HexColorPicker color={selectedColor} onChange={setSelectedColor} />
                        </div>
                    )}
                    {showGradientPicker && (
                        <div className="absolute z-50 mt-2 p-4 bg-white rounded-xl shadow-lg">
                            <div className="grid grid-cols-3 gap-2">
                                <button
                                    className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                                    onClick={() => setSelectedGradient("linear-gradient(to right, #3B82F6, #8B5CF6)")}
                                />
                                <button
                                    className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-orange-500"
                                    onClick={() => setSelectedGradient("linear-gradient(to right, #EC4899, #F97316)")}
                                />
                                <button
                                    className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-blue-500"
                                    onClick={() => setSelectedGradient("linear-gradient(to right, #22C55E, #3B82F6)")}
                                />
                            </div>
                        </div>
                    )}
                </div>

                {/* Size Controls */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-500">Size</h4>
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min="16"
                            max="48"
                            value={iconSize}
                            onChange={(e) => setIconSize(Number(e.target.value))}
                            className="w-full"
                        />
                        <span className="text-sm">{iconSize}px</span>
                    </div>
                </div>

                {/* Padding Controls */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-500">Padding</h4>
                    <div className="flex items-center gap-2">
                        <input
                            type="range"
                            min="0"
                            max="24"
                            value={iconPadding}
                            onChange={(e) => setIconPadding(Number(e.target.value))}
                            className="w-full"
                        />
                        <span className="text-sm">{iconPadding}px</span>
                    </div>
                </div>

                {/* Custom Icons Upload */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-medium text-gray-500">Custom Icons</h4>
                    <button
                        type="button"
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-lg bg-[#EEF2FF] hover:bg-gray-100"
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <FiUpload />
                        <span>Upload SVG</span>
                    </button>
                    <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".svg"
                        onChange={handleFileUpload}
                    />
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 overflow-auto absolute top-0 bg-white">
                <div className="grid grid-cols-6 gap-4">
                    <TooltipProvider>
                        {filteredIcons.map((icon, index) => (
                            <Tooltip key={index}>
                                <TooltipTrigger asChild>
                                    <button
                                        type="button"
                                        className="p-4 rounded-lg hover:bg-gray-100 flex items-center justify-center"
                                        onClick={() => setSelectedIcon(icon)}
                                        style={{
                                            color: selectedColor,
                                            background: selectedGradient,
                                            padding: `${iconPadding}px`
                                        }}
                                    >
                                        {renderIcon(icon)}
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{icon.name}</p>
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </TooltipProvider>
                </div>
            </div>

            {/* Preview Panel */}
            {selectedIcon && (
                <div className="w-64 border-l border-gray-200 p-4 flex flex-col gap-4 absolute  right-40 top-0 bg-white">
                    <h4 className="text-sm font-medium text-gray-500">Preview</h4>
                    <div className="flex items-center justify-center p-8 bg-gray-50 rounded-lg">
                        <div
                            style={{
                                color: selectedColor,
                                background: selectedGradient,
                                padding: `${iconPadding}px`
                            }}
                        >
                            {renderIcon(selectedIcon)}
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary/90"
                        onClick={() => {
                            // TODO: Implement icon insertion
                            console.log('Insert icon:', selectedIcon);
                        }}
                    >
                        Insert Icon
                    </button>
                </div>
            )}
        </div>
    );
};

export default Icons;