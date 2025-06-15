import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import bottomImg from "../../../assets/images/modals/templates/bottom.png";
import howItWorksImg from "../../../assets/images/modals/templates/how-it-works.png";
import overviewImg from "../../../assets/images/modals/templates/overview.png";
import peopleImg from "../../../assets/images/modals/templates/people.png";


const Templates = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [activeTab, setActiveTab] = useState("Section");


    const tabs = ["Pro", "Templates", "Section", "Header", "Footer",];


    const handleChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    return (
        <>

            {/* search btn */}
            <div className="w-full relative">
                <input type="text" className="w-full h-full bg-[#EEF2FF] pl-14 pr-3 py-5 rounded-xl" placeholder="Search Templates,  Sections..." />
                <span className="absolute left-4 top-1/2 -translate-y-[50%] text-2xl">
                    <CiSearch />
                </span>
            </div>

            {/* upload btn */}
            <>
                <input type="file" id="file-upload" onChange={handleChange} className="hidden" />
                <label
                    htmlFor="file-upload"
                    className="w-full text-center bg-primary py-5 text-white rounded-xl block cursor-pointer mt-5"
                >
                    Upload Files
                </label>
                {selectedFile && (
                    <p className="mt-4 p-3 bg-slate-100 rounded-xl">
                        Selected file: <strong>{selectedFile.name}</strong>
                    </p>
                )}
            </>


            {/* tabs */}
            <div className="w-full flex justify-between items-center text-xs lg:text-sm pt-8 mb-3 border-b">
                {
                    tabs?.map((tab, idx) =>
                        <button key={idx} onClick={() => setActiveTab(tab)} className={`border-b ${activeTab == tab ? "border-b-primary" : "border-b-transparent"} pb-3 duration-300`}>
                            {tab}
                        </button>
                    )
                }
            </div>

            {/* images */}
            <div className="space-y-4 pt-4">
                <img src={overviewImg} className="w-full h-full object-contain" alt="overview image" />
                <img src={peopleImg} className="w-full h-full object-contain" alt="people image" />
                <img src={howItWorksImg} className="w-full h-full object-contain" alt="how it works image" />
                <img src={bottomImg} className="w-full h-full object-contain" alt="image" />
            </div>

        </>
    );
};

export default Templates;