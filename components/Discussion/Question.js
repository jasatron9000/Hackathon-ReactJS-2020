import React, { Component } from 'react'
import TextBox from './TextBox'

export default class Question extends Component {
    render() {
        return (
            <div class="w-flex rounded overflow-hidden shadow-lg m-6 bg-gray-200 pb-3">
                <div class="px-6 py-4">
                    <h1 class="font-bold text-xl mb-2">
                        {this.props.posts.title}
                    </h1>
                    <hr class="m-3 border-gray-400"/>
                    <p class="text-gray-700 text-base px-6">
                    {this.props.posts.body}
                    </p>
                    <hr class="m-3 border-gray-400"/>
                    <TextBox likes={30}/>
                </div>
            </div>

        )
    }
}
