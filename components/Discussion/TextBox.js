class TextBox extends React.Component{
    constructor(props){
        super(props)
        this.state = {value:''}
        this.button = "ANSWER"

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event){
        console.log(event)
        this.setState({value: event.target ? event.target.value : undefined})
    }

    handleSubmit(event){
        alert(this.state.value)
    }

    render(){
        let btn_disappear = this.state.show ? "visible" : "invisible"

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    <textarea class="w-full m-3 p-6 rounded" value={this.state.value} onChange={this.handleChange} />
                    </label>
                </form>

                <span class="m-0 p-0">
                    <span  class="inline mx-6">
                        <button class="inline">
                            <img class="w-5 h-5" src={"./img/like.svg"}/>
                        </button>
                        <p class="inline mx-3">{this.props.likes}</p>
                        <button class="inline">
                            <img class="w-5 h-5" src={"./img/dislike.svg"}/>
                        </button>
                    </span>
                    <button class="inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-6 float-right" onClick={this.handleSubmit}>SUBMIT</button>
                </span>
            </div>
        )
    }
}

export default TextBox