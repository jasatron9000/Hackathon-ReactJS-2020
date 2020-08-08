export const CourseCard = ({course}) => {
  return (
		<div className="max-w-sm rounded overflow-hidden shadow-lg cards">		  
		  <div className="px-6 py-4">
			<div className="font-bold text-xl mb-2">{course._id}</div>
			<p className="text-gray-700 text-base">
			  <a href='/courseExams' className='no-underline hover:text-white'>{course.title}</a>
			</p>
			<p className="text-gray-700 text-base">
			  <a href='/courseExams/' className='no-underline hover:text-white'>{course.description}</a>
			</p>
		  </div>
		</div>
  )
}

function answerQ2() {
    let testMessage = "TEST"
    console.log(testMessage)
}

function Question2 ({question}){
    return(
    <div class="w-flex rounded overflow-hidden shadow-lg m-6 bg-gray-200 pb-6">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{question.Head}</div>
            <p class="text-gray-700 text-base px-6">
            {question.Body}
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" onClick={answerQ2}>ANSWER</button>
        </div>
    </div>
    )
}

function Discussion2() {
    const questionTest = {
        Head: "Q1: Help me Help me Help me Help me Help me Help me Help me",
        Body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies nec ligula at fringilla. Phasellus auctor orci ac lacus venenatis aliquam. Nullam a lacinia ipsum, at finibus enim. In malesuada nec nulla volutpat fringilla. Nullam ultricies risus eu lacus posuere convallis. Mauris id ipsum gravida mauris consequat iaculis non sit amet dolor. Nulla facilisi. Nullam iaculis nibh leo, maximus porttitor erat dapibus nec. Aenean pharetra justo ut libero pellentesque imperdiet. "
    }
    
    return(
        <div>
            <div>
                <div class="float-left h-screen w-64 m-6" >

                </div>
            </div>
            <Question question={questionTest}/>
        </div>
    )
}

export default CourseCard