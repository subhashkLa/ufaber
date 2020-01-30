import React, { Component } from 'react';
import { createMentor } from './Api';
import { Redirect } from 'react-router-dom';

class Mentor extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            sector: "",
            posting: "",
            cgpa: "",
            sscpercentage: "",
            hscpercentage: "",
            intership: "",
            working_at: "",
            other_acheivement_score: "",
            error: "",
            redirecttoPage: false,
        }
    }

    componentDidMount() {
        this.userData = new FormData();
    }

    handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        this.userData.set(name, value);
        this.setState({error: ""});
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();

        createMentor(this.userData).then(data => {
            if(data.error) {
                this.setState({ error: "" })
            } else {
                this.setState({ redirecttoPage: true });
            }
        })        
    }

    renderForm = (name, sector, working_at, intership, cgpa, hscpercentage, other_acheivement_score, posting, sscpercentage) => (
        <form className="">
            <div className="form-group">
                <input accept="image/*" type="file" onChange={this.handleChange("photo")} className="form-control" />  
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="name" onChange={this.handleChange("name")} value={name} placeholder="Enter the Mentor Name" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="sector" onChange={this.handleChange("sector")} value={sector} placeholder="Which sector do your work?" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="posting" onChange={this.handleChange("posting")} value={posting} placeholder="posting" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="cgpa" onChange={this.handleChange("cgpa")} value={cgpa} placeholder="Graduate Mark or CGPA" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="sscpercentage" onChange={this.handleChange("sscpercentage")} value={sscpercentage} placeholder="Enter your 10th Percentage" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="hscpercentage" onChange={this.handleChange("hscpercentage")} value={hscpercentage} placeholder="Enter your 12th Percentage" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="intership" onChange={this.handleChange("intership")} value={intership} placeholder="Intership detail" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="working_at" onChange={this.handleChange("working_at")} value={working_at} placeholder="Currently working at" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="other_acheivement_score" onChange={this.handleChange("other_acheivement_score")} value={other_acheivement_score} placeholder="other_acheivement_score" />
            </div>

            <button onClick={this.handleSubmit} className="btn btn-block btn-primary btn-raised">Upload</button>
        </form>
    )

    render() {
        const { name, sector, working_at, intership, cgpa, error, hscpercentage, other_acheivement_score, posting, sscpercentage, redirecttoPage } = this.state;
        if(redirecttoPage) {
           return <Redirect to="/" />
        }        
        return (
            <div className="container mt-5">
                <h1 className="mb-5">Enter the Mentor Data</h1>
                {this.renderForm(name, sector, working_at, intership, cgpa, hscpercentage, other_acheivement_score, posting, sscpercentage)}
            </div>
        )
    }
}

export default Mentor;