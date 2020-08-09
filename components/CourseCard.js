export const CourseCard = ({course}) => {
  return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg cards">		  
		  <div className="px-6 py-4">
			<div className="font-bold text-xl mb-2">{course._id}</div>
			<p className="text-gray-700 text-base">
			  <a href='/courseExams' className='no-underline hover:text-white'>{course.title}</a>
			</p>
			<p className="text-gray-700 text-base">
			  <a href='/examq/' className='no-underline hover:text-white'>{course.description}</a>
			</p>
		  </div>
		</div>
  )
}

export default CourseCard