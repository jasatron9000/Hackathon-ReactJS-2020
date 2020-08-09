import TextBox from './TextBox'

let likeStyle = "inline w-5 h-5"
let dislikeStyle = "inline w-5 h-5"

function answerQ() {
    let testMessage = "TEST"
    console.log(testMessage)
}

function dislikeState(){
    console.log('dislikeSta')
    likeStyle = "inline w-5 h-5"
    dislikeStyle = "inline w-6 h-6"
}

function likeState(){
    likeStyle = "inline w-6 h-6"
    dislikeStyle = "inline w-5 h-5"
}

function Question ({question}){
    return(
    <div class="w-flex rounded overflow-hidden shadow-lg m-6 bg-gray-200 pb-3">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{question.Head}</div>
            <hr class="m-3 border-gray-400"/>
            <p class="text-gray-700 text-base px-6">
            {question.Body}
            </p>
            <hr class="m-3 border-gray-400"/>
            <TextBox likes={30}/>
        </div>
    </div>
    )
}

export default Question