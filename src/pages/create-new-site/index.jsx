import BuilderBox from "@/components/builder/builder-box"
import BuilderSection from "@/components/builder/section"
import DashboardHeader from "@/components/reuse/dashboard-header"

const CreateNewSite = () => {
  return (
    <div className="relative z-10 w-full h-full">
      <DashboardHeader />
      <div className="flex relative mt-5">
        <BuilderBox />
        <BuilderSection />
      </div>
    </div>
  )
}

export default CreateNewSite