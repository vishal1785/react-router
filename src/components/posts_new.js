import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { addPost } from '../actions';

class NewPostComponent extends Component {

    renderField(field)  {

    const className = `form-group ${ field.meta.touched && field.meta.error ? 'has-danger' : ''}`;
    return (
        <div className={className}>
            <label> {field.label} </label>
            <field.type type="text" {...field.input} className="form-control"/>
            <div className="text-help">
                {field.meta.touched ? field.meta.error : ''} 
            </div>
        </div>
    );
}

onSubmit(values){
    this.props.addPost(values, () => {
        this.props.history.push('/')
    });
}

render() {
    const { handleSubmit } = this.props;
    return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <h3>Create a New Post</h3>
            <hr/>
            <Field label="Title" type="input" name="title" component={this.renderField}/>
            <Field label="Category" type="input" name="categories" component={this.renderField}/>
            <Field label="Content" type="textarea" name="content" component={this.renderField}/>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link className="btn btn-danger" to="/"> Cancel </Link>
        </form>
    );
  }
}

function validate(values){
    const errors= {};

    if(!values.title){
        errors.title = "Please enter a title";
    }
    if(!values.categories){
        errors.categories = "Please enter a category";
    }
    if(!values.content){
        errors.content = "Please enter some content";
    }
    return errors;
}


export default reduxForm({
    validate,
    form: 'NewPostForm' // some unique name for the form
})
(
    connect(null,{ addPost })(NewPostComponent)
);

