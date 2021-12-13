import React, { Component } from 'react'

class Form extends Component {
constructor(props) {
    super(props)

    this.state = {
         username:'',
         comment:'',
         topic:'laravel'

    }
}
handleUsernameChange=event=>{
    this.setState({
         username:event.target.value
    })
}
handleCommentChnage=event=>{
    this.setState({
        comment:event.target.value
    })
}

handleTopicChange=event=>{
    this.setState({
      topic:event.target.value
    })
}
handleFormSubmit=event=>{
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)

    event.preventDefault()
}
 

    render() {
        const { username, comment, topic}=this.state  
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div>
                <label>Username</label>
                <input type='text' value={username} onChange={this.handleUsernameChange}/>
                </div>
                <div>
                <label>Comment</label>
                <textarea value={comment} onChange={this.handleCommentChnage}></textarea>
                </div>
                <div>
                <label>Topic</label>
                <select value={topic} onChange={this.handleTopicChange}>
                    <option value="asp.net">ASp.NET CORE C#</option>
                    <option value="spring">Sprint JAva</option>
                    <option value="django">Django Python</option>
                    <option value="laravel">Laravel Php</option>
                </select>
               </div>
<button type='submit' >Submit</button>
            </form>
        )
    }
}

export default Form
