import { FaArrowLeftLong, FaPlus } from 'react-icons/fa6'
import { useLocation, useNavigate } from 'react-router-dom'

const CreateTemplateHeader = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const currentPath = location.pathname.split('/').pop()
  const handleRouteChange = () => {
    navigate('/dashboard/create-site');
  }
  return (
    <header>
      <div className="container mx-auto py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-textGray hover:text-primary transition-colors"
          >
            <FaArrowLeftLong />
            <span>Back</span>
          </button>
          {/* Button Group */}
          <div className="flex items-center gap-2 bg-white rounded-full w-fit">
            <button
              type='button'
              onClick={() => navigate('/templates/recommended')}
              className={`btn rounded-full text-xs py-5 px-10 transition-colors duration-200 ${currentPath === 'recommended'
                ? 'bg-primary text-white'
                : 'text-textGray hover:text-primary'
                }`}
            >
              Recommended Template
            </button>
            <button
              type='button'
              onClick={() => navigate('/templates/my-templates')}
              className={`btn text-xs py-5 px-10 rounded-full transition-colors duration-200 ${currentPath === 'my-templates'
                ? 'bg-primary text-white'
                : 'text-textGray hover:text-primary'
                }`}
            >
              My Templates
            </button>
          </div>
          <div className='flex items-center justify-end'>
            <button type='button' className='btn text-xs py-4 px-5 rounded-2xl flex items-center gap-2 justify-center bg-white text-black shadow-card' onClick={handleRouteChange}>
              <FaPlus />
              Blank page
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default CreateTemplateHeader