import CanvasWrapper from '../canvas/CanvasWrapper';
import DashboardHeader from '../ui/dashboard-header';
import BuilderSection from './section';

const BuilderPage = () => {
  return (
    <div className="relative z-10 w-full h-full">
      <DashboardHeader />
      <BuilderSection />

      <CanvasWrapper />
    </div>
  )
}

export default BuilderPage