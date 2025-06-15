import {
  FiBell, FiCalendar,
  FiCheck,
  FiClock,
  FiDownload,
  FiEdit,
  FiHeart,
  FiHome,
  FiLock,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMinus,
  FiPhone,
  FiPlus,
  FiSearch,
  FiSettings,
  FiShare2,
  FiShoppingCart,
  FiStar,
  FiTrash2,
  FiUpload,
  FiUser,
  FiX
} from 'react-icons/fi';
import {
  HiBell, HiCalendar,
  HiCheck,
  HiClock,
  HiCog,
  HiDownload,
  HiHeart,
  HiHome,
  HiLocationMarker,
  HiMail,
  HiMenu,
  HiMinus,
  HiPencil,
  HiPhone,
  HiPlus,
  HiSearch,
  HiShare,
  HiShoppingCart,
  HiStar,
  HiTrash,
  HiUpload,
  HiUser,
  HiX
} from 'react-icons/hi';
import {
  MdAccessTime,
  MdAdd,
  MdCalendarToday,
  MdCheck, MdClose,
  MdDelete,
  MdDownload,
  MdEdit,
  MdEmail,
  MdFavorite,
  MdHome,
  MdLocationOn,
  MdLock,
  MdMenu,
  MdNotifications,
  MdPerson,
  MdPhone,
  MdRemove,
  MdSearch,
  MdSettings,
  MdShare,
  MdShoppingCart,
  MdStar,
  MdUpload
} from 'react-icons/md';
import {
  RiAddLine,
  RiCalendarLine,
  RiCheckLine, RiCloseLine,
  RiDeleteBinLine,
  RiDownloadLine,
  RiEditLine,
  RiHeartLine,
  RiHomeLine,
  RiLockLine,
  RiMailLine,
  RiMapPinLine,
  RiMenuLine,
  RiNotificationLine,
  RiPhoneLine,
  RiSearchLine,
  RiSettingsLine,
  RiShareLine,
  RiShoppingCartLine,
  RiStarLine,
  RiSubtractLine,
  RiTimeLine,
  RiUploadLine,
  RiUserLine
} from 'react-icons/ri';
import { create } from 'zustand';

const createIconPack = (icons) => ({
    name: icons.name,
    icons: icons.icons.map(icon => ({
        icon: icon.icon,
        name: icon.name
    }))
});

const iconPacks = {
    feather: createIconPack({
        name: 'Feather Icons',
        icons: [
            { icon: FiHome, name: "Home" },
            { icon: FiUser, name: "User" },
            { icon: FiSettings, name: "Settings" },
            { icon: FiMail, name: "Mail" },
            { icon: FiPhone, name: "Phone" },
            { icon: FiMapPin, name: "Location" },
            { icon: FiShoppingCart, name: "Cart" },
            { icon: FiHeart, name: "Heart" },
            { icon: FiStar, name: "Star" },
            { icon: FiShare2, name: "Share" },
            { icon: FiDownload, name: "Download" },
            { icon: FiUpload, name: "Upload" },
            { icon: FiTrash2, name: "Delete" },
            { icon: FiEdit, name: "Edit" },
            { icon: FiPlus, name: "Add" },
            { icon: FiMinus, name: "Remove" },
            { icon: FiCheck, name: "Check" },
            { icon: FiX, name: "Close" },
            { icon: FiMenu, name: "Menu" },
            { icon: FiSearch, name: "Search" },
            { icon: FiBell, name: "Notification" },
            { icon: FiCalendar, name: "Calendar" },
            { icon: FiClock, name: "Clock" },
            { icon: FiLock, name: "Lock" },
        ]
    }),
    heroicons: createIconPack({
        name: 'Heroicons',
        icons: [
            { icon: HiHome, name: "Home" },
            { icon: HiUser, name: "User" },
            { icon: HiCog, name: "Settings" },
            { icon: HiMail, name: "Mail" },
            { icon: HiPhone, name: "Phone" },
            { icon: HiLocationMarker, name: "Location" },
            { icon: HiShoppingCart, name: "Cart" },
            { icon: HiHeart, name: "Heart" },
            { icon: HiStar, name: "Star" },
            { icon: HiShare, name: "Share" },
            { icon: HiDownload, name: "Download" },
            { icon: HiUpload, name: "Upload" },
            { icon: HiTrash, name: "Delete" },
            { icon: HiPencil, name: "Edit" },
            { icon: HiPlus, name: "Add" },
            { icon: HiMinus, name: "Remove" },
            { icon: HiCheck, name: "Check" },
            { icon: HiX, name: "Close" },
            { icon: HiMenu, name: "Menu" },
            { icon: HiSearch, name: "Search" },
            { icon: HiBell, name: "Notification" },
            { icon: HiCalendar, name: "Calendar" },
            { icon: HiClock, name: "Clock" },
        ]
    }),
    material: createIconPack({
        name: 'Material Icons',
        icons: [
            { icon: MdHome, name: "Home" },
            { icon: MdPerson, name: "User" },
            { icon: MdSettings, name: "Settings" },
            { icon: MdEmail, name: "Mail" },
            { icon: MdPhone, name: "Phone" },
            { icon: MdLocationOn, name: "Location" },
            { icon: MdShoppingCart, name: "Cart" },
            { icon: MdFavorite, name: "Heart" },
            { icon: MdStar, name: "Star" },
            { icon: MdShare, name: "Share" },
            { icon: MdDownload, name: "Download" },
            { icon: MdUpload, name: "Upload" },
            { icon: MdDelete, name: "Delete" },
            { icon: MdEdit, name: "Edit" },
            { icon: MdAdd, name: "Add" },
            { icon: MdRemove, name: "Remove" },
            { icon: MdCheck, name: "Check" },
            { icon: MdClose, name: "Close" },
            { icon: MdMenu, name: "Menu" },
            { icon: MdSearch, name: "Search" },
            { icon: MdNotifications, name: "Notification" },
            { icon: MdCalendarToday, name: "Calendar" },
            { icon: MdAccessTime, name: "Clock" },
            { icon: MdLock, name: "Lock" },
        ]
    }),
    remix: createIconPack({
        name: 'Remix Icons',
        icons: [
            { icon: RiHomeLine, name: "Home" },
            { icon: RiUserLine, name: "User" },
            { icon: RiSettingsLine, name: "Settings" },
            { icon: RiMailLine, name: "Mail" },
            { icon: RiPhoneLine, name: "Phone" },
            { icon: RiMapPinLine, name: "Location" },
            { icon: RiShoppingCartLine, name: "Cart" },
            { icon: RiHeartLine, name: "Heart" },
            { icon: RiStarLine, name: "Star" },
            { icon: RiShareLine, name: "Share" },
            { icon: RiDownloadLine, name: "Download" },
            { icon: RiUploadLine, name: "Upload" },
            { icon: RiDeleteBinLine, name: "Delete" },
            { icon: RiEditLine, name: "Edit" },
            { icon: RiAddLine, name: "Add" },
            { icon: RiSubtractLine, name: "Remove" },
            { icon: RiCheckLine, name: "Check" },
            { icon: RiCloseLine, name: "Close" },
            { icon: RiMenuLine, name: "Menu" },
            { icon: RiSearchLine, name: "Search" },
            { icon: RiNotificationLine, name: "Notification" },
            { icon: RiCalendarLine, name: "Calendar" },
            { icon: RiTimeLine, name: "Clock" },
            { icon: RiLockLine, name: "Lock" },
        ]
    })
};

const useIconStore = create((set, get) => ({
    selectedPack: 'feather',
    searchQuery: '',
    selectedStyle: 'outline',
    selectedColor: '#000000',
    selectedGradient: null,
    iconSize: 24,
    iconPadding: 4,
    showColorPicker: false,
    showGradientPicker: false,
    selectedIcon: null,
    customIcons: [],

    setSelectedPack: (pack) => set({ selectedPack: pack }),
    setSearchQuery: (query) => set({ searchQuery: query }),
    setSelectedStyle: (style) => set({ selectedStyle: style }),
    setSelectedColor: (color) => set({ selectedColor: color }),
    setSelectedGradient: (gradient) => set({ selectedGradient: gradient }),
    setIconSize: (size) => set({ iconSize: size }),
    setIconPadding: (padding) => set({ iconPadding: padding }),
    setShowColorPicker: (show) => set({ showColorPicker: show }),
    setShowGradientPicker: (show) => set({ showGradientPicker: show }),
    setSelectedIcon: (icon) => set({ selectedIcon: icon }),
    addCustomIcon: (icon) => set((state) => ({ customIcons: [...state.customIcons, icon] })),

    getIconPacks: () => Object.entries(iconPacks).map(([id, pack]) => ({ id, ...pack })),
    getFilteredIcons: () => {
        const { selectedPack, searchQuery, customIcons } = get();
        const pack = iconPacks[selectedPack];
        const icons = [...pack.icons, ...customIcons];
        
        if (!searchQuery) return icons;
        
        return icons.filter(icon => 
            icon.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
}));

export default useIconStore; 