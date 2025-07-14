import { Link } from 'react-router-dom'

const AuthHead = ({title, paragraph, link, linkText}) => {
  return (
    <div className='text-center'>
      <h2 className='text-5xl font-medium pb-3'>{title}</h2>
      <p className='text-sm text-gray-500'>{paragraph} <Link to={link} className='text-blue-500 hover:underline'>{linkText}</Link></p>
    </div>
  )
}

export default AuthHead