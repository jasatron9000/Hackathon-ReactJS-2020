function answerQ() {
    let testMessage = "TEST"
    console.log(testMessage)
}

function Question ({question}){
    return(
    <div class="w-flex rounded overflow-hidden shadow-lg m-6 bg-gray-200 pb-6">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{question.Head}</div>
            <p class="text-gray-700 text-base px-6">
            {question.Body}
            </p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" onClick={answerQ}>ANSWER</button>
        </div>
    </div>
    )
}

export default Question