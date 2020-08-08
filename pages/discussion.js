import Question from '../components/Discussion/Question.js'

function Discussion() {
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

export default Discussion
