import React, { Component } from 'react';
import { taskGiver } from './Api';
import { Redirect } from 'react-router-dom';

class TaskMentor extends Component {
    constructor() {
        super();
        this.state = {
            task: "",
            error: "",
            redirecttoPage: false,
        }
    }

    handleChange = task => (event) => {
        this.setState({[task]: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const userId = this.props.match.params.userId;
        const { task } = this.state;
        const Users = {
            task: task,
        };
        taskGiver(Users, userId).then(data => {
            if(data.error) {
                this.setState({ error: "" })
            } else {
                this.setState({ redirecttoPage: true });
            }
        }).catch(err => {
            console.log(err);
        });      
    }

    renderForm = (task) => (
        <form className="">
            <div className="form-group">
                <input type="text" className="form-control" name="task" onChange={this.handleChange("task")} value={task} placeholder="Give them a task" />
            </div>
            <button onClick={this.handleSubmit} className="btn btn-block btn-primary btn-raised">Give Task</button>
        </form>
    )

    render() {
        const { task, redirecttoPage } = this.state;
        if(redirecttoPage) {
           return <Redirect to="/" />
        }        
        return (
            <div className="container mt-5">
                <h1 className="mb-5">Enter the Mentor Task</h1>
                {this.renderForm(task)}
            </div>
        )
    }
}

export default TaskMentor;