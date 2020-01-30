import React, { Component } from 'react';
import { singleMentor, updateMentor } from './Api';
import { Redirect } from 'react-router-dom';

class Update extends Component {
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

    init = userId => {
        singleMentor(userId)
        .then(data => {
            if(data.error) {
                this.setState({ redirectToProfile: false })
            }else {
                this.setState({ id: data._id, name: data.name, sector: data.sector, posting: data.posting, cgpa: data.CGPA, sscpercentage: data.sscpercentage, hscpercentage: data.hscpercentage, intership: data.intership, working_at: data.working_at, other_acheivement_score: data.other_acheivement_score })
            }
        });
    }

    componentDidMount() {
        this.userData = new FormData();
        const userId = this.props.match.params.userId;
        this.init(userId);
    }

    handleChange = name => event => {
        const value = name === 'photo' ? event.target.files[0] : event.target.value;
        this.userData.set(name, value);
        this.setState({error: ""});
        this.setState({[name]: value});
    }

    handleSubmit = event => {
        event.preventDefault();
        
        const userId = this.props.match.params.userId;
        updateMentor(userId, this.userData).then(data => {
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
                <input type="text" className="form-control" name="name" onChange={this.handleChange("name")} value={name} placeholder="name" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="sector" onChange={this.handleChange("sector")} value={sector} placeholder="sector" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="posting" onChange={this.handleChange("posting")} value={posting} placeholder="posting" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="cgpa" onChange={this.handleChange("cgpa")} value={cgpa} placeholder="cgpa" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="sscpercentage" onChange={this.handleChange("sscpercentage")} value={sscpercentage} placeholder="sscpercentage" />
            </div>
            <div className="form-group">
                <input type="text" className="form-control" name="hscpercentage" onChange={this.handleChange("hscpercentage")} value={hscpercentage} placeholder="hscpercentage" />
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
                <h1>Updata Mentor</h1>
                {this.renderForm(name, sector, working_at, intership, cgpa, hscpercentage, other_acheivement_score, posting, sscpercentage)}
            </div>
        )
    }
}

export default Update;