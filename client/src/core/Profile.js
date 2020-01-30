import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { singleMentor,remove } from './Api';
import Delete from './Delete';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: "",
            redirect: false
        }
    }

    init = userId => {
        singleMentor(userId)
        .then(data => {
            if(data.error) {
               console.log(data.error)
            }else {
                this.setState({ user: data })
            }
        });  
    }

    componentDidMount() {
        const userId = this.props.match.params.userId;
        this.init(userId);
    }

    deleteAccount = () => {
        const userId = this.props.match.params.userId;
        remove(userId).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                this.setState({ redirect: true })
            }
        });
    };

    deleteConfirmed = () => {
        let answer = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (answer) {
            this.deleteAccount();
        }
    };

    render() {
        const { user, redirect } = this.state;
        if(redirect) {
            return <Redirect to="/" />
        }
        return(
            <div className="container mt-5" style={{ textAlign: "center" }}> 
                <img src={`http://localhost:4000/mentor/photourl/${user._id}`} width="200" height="200" alt={user.name} />
                <br /><br />
                <Link className="btn btn-raised btn-primary" to={`/update/${user._id}`}>Update Profile</Link>
                &nbsp;
                <Link className="btn btn-raised btn-primary" to={`/task/${user._id}`}>Give task</Link>
                &nbsp;
                <button
                onClick={this.deleteConfirmed}
                className="btn btn-raised btn-danger"
                >
                    Delete Profile
                </button>
                <h4 className="mt-3">Name: {user.name}</h4>
                <h4>Sector: {user.sector}</h4>
                <h4>Intership: {user.intership}</h4>
                <h4>posting: {user.posting}</h4>
                <h4>CGPA: {user.CGPA}</h4>
                <h4>10th Percentage: {user.sscpercentage}</h4>
                <h4>12th Percentage: {user.hscpercentage}</h4>
                <h4>Working At: {user.working_at}</h4>
                <h4>Other Acheivement Score: {user.other_acheivement_score}</h4>
            </div>
        );
    }
}

export default Profile;