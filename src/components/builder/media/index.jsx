import audio from "../../../assets/images/media/audio.svg"
import embedUrl from "../../../assets/images/media/embaded.svg"
import gif from "../../../assets/images/media/gif.svg"
import image from "../../../assets/images/media/image.svg"
import video from "../../../assets/images/media/video.svg"
import vimeo from "../../../assets/images/media/vimeo.svg"

const Media = () => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-medium">Media</h2>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-5 lg:grid-cols-3">
                <button type="button" className="flex flex-col text-center items-center bg-[#EEF2FF] rounded-xl justify-between gap-3 p-3">
                    <img src={image} alt="image" />
                    <h3 className="text-xs font-medium">Image</h3>  
                </button>
                <button type="button" className="flex flex-col text-center items-center bg-[#EEF2FF] rounded-xl justify-between gap-3 p-3">
                    <img src={video} alt="video" />
                    <h3 className="text-xs font-medium">Video</h3>
                </button>
                <button type="button" className="flex flex-col text-center items-center bg-[#EEF2FF] rounded-xl justify-between gap-3 p-3">
                    <img src={audio} alt="audio" />
                    <h3 className="text-xs font-medium">Audio</h3>
                </button>
                <button type="button" className="flex flex-col text-center items-center bg-[#EEF2FF] rounded-xl justify-between gap-3 p-3">
                    <img src={vimeo} alt="vimeo" />
                    <h3 className="text-xs font-medium">Vimeo</h3>
                </button>
                <button type="button" className="flex flex-col text-center items-center bg-[#EEF2FF] rounded-xl justify-between gap-3 p-3">
                    <img src={embedUrl} alt="embedUrl" />
                    <h3 className="text-xs font-medium">Embed URL</h3>
                </button>
                <button type="button" className="flex flex-col text-center items-center bg-[#EEF2FF] rounded-xl justify-between gap-3 p-3">
                    <img src={gif} alt="gif" />
                    <h3 className="text-xs font-medium">GIF</h3>
                </button>
            </div>
        </>
    );
};

export default Media;