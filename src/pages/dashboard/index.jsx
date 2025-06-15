import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"
import { default as dashShape, default as noSiteThumb } from "../../assets/images/dashboard/object.svg"

const Dashboard = () => {
  // const navigate = useNavigate()
  // const gridData = useBuilderStore((s) => s.gridData);

  // const handleExport = () => {
  //   const jsonOutput = JSON.stringify(gridData, null, 2);
  //   console.log("Generated JSON:", jsonOutput);
  // };
  const navigate = useNavigate()
  return (
    <div className='space-y-5'>
      <div className='flex justify-between items-center bg-white p-5 rounded-lg gap-5 shadow-card'>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px] bg-[#EEF2FF] border-none">
            <SelectValue placeholder="Select sites" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">All Sites</SelectItem>
              <SelectItem value="oldest">Oldest</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="gradient" size="gradient" onClick={() => navigate('/dashboard/create-site')}>
          Create New Site
        </Button>
      </div>
      <div className='py-8 px-5 bg-white rounded-lg shadow-card relative overflow-hidden'>
        <img src={dashShape} alt="thumb" className='absolute top-0 right-0' />
        <div className='space-y-2'>
          <h2 className='text-4xl font-bold'>Discover the <span className='text-primary'>CoAI.Pro</span></h2>
          <p className='text-sm text-gray-500'>Easily view, edit, and manage every site you've created — all from one clean dashboard.</p>
        </div>
      </div>
      <div className='flex justify-center items-center min-h-[400px]'>
        <img src={noSiteThumb} alt="thumb" />
      </div>
      {/* <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">🧱 Coai Pro Page Builder</h1>
        <LayoutSelector />
        <GridCanvas />
        <button onClick={handleExport} className="mt-6 bg-black text-white px-4 py-2 rounded">
          Export JSON
        </button>
      </div> */}
    </div>
  )
}

export default Dashboard