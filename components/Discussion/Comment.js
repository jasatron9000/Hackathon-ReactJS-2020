function Comment ({comment}){
    //Takes a list of comment 
    return (
        <div class="flex rounded overflow-hidden shadow-lg m-6 bg-gray-200 p-6">
            <div class="inline float-left p-3">
                <img class="w-4 w-4" src="./img/like.svg"/>
                <p>{comment.points}</p>
                <img class="w-4 h-4" src="./img/dislike.svg"/>
            </div>
            <div class="inline">
                <p>{comment.message}</p>
                <p class="font-bold text-sm">By: {comment.user}</p>
            </div>
        </div>
    )
}

export default Comment