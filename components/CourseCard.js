export const CourseCard = ({ code, name }) => {
  return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg cards">
		  
		  <div className="px-6 py-4">
			<div className="font-bold text-xl mb-2">{code}</div>
			<p className="text-gray-700 text-base">
			  <a className='no-underline hover:text-white'>{name}</a>
			</p>
		  </div>
		</div>
  )
}

export default CourseCard