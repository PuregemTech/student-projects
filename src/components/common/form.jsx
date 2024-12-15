import React, {Component} from 'react';
import Joi from 'joi-browser';
import Input from './input';
import InputWithoutLabel from './inputwithoutlabel';

import Select from './select';

class Form extends Component {
  state = {
    data: {},
    errors: {},
  };

  validate = () => {
    const options = {
      abortEarly: false,
    };
    const {error} = Joi.validate (this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details)
      errors[item.path[0]] = item.message;
    return errors;

    // console.log (result);

    // const {data} = this.state;
    // const errors = {};
    // if (data.username.trim () === '')
    //   errors.username = 'Username is required';
    // if (data.password.trim () === '')
    //   errors.password = 'Password is required';
    // return Object.keys (errors).length === 0 ? null : errors;
  };

  validateProperty = ({name, value}) => {
    const obj = {[name]: value};
    const schema = {[name]: this.schema[name]};
    const {error} = Joi.validate (obj, schema);
    return error ? error.details[0].message : null;

    // if (input.name === 'username') {
    //   if (input.value.trim () === '') return 'Username is required';
    // }
    // if (input.name === 'password') {
    //   if (input.value.trim () === '') return 'Password is required';
    // }
  };

  handleSubmit = e => {
    e.preventDefault ();

    const errors = this.validate ();
    console.log (errors);
    this.setState ({errors: errors || {}});
    if (errors) return;

    this.doSubmit ();
  };

  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors};
    const errorMessage = this.validateProperty (input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = {...this.state.data};
    data[input.name] = input.value;
    //data.username = e.target.value;
    this.setState ({data, errors});
  };

  renderButton (label) {
    return (
      <button
        disabled={this.validate ()}
        className="btn btn-primary"
        style={{width: '100%', maxWidth: '300px'}}
      >
        {label}
      </button>
    );
  }

  renderSelect (name, label, options) {
    const {data, errors} = this.state;

    return (
      <Select
        name={name}
        value={data[name]}
        label={label}
        options={options}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInput (name, label, type = 'text', placeholder) {
    const {data, errors} = this.state;

    return (
      <Input
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }

  renderInputWithoutLabel (name, label, type = 'text', placeholder) {
    const {data, errors} = this.state;

    return (
      <InputWithoutLabel
        placeholder={placeholder}
        type={type}
        name={name}
        value={data[name]}
        label={label}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  }
}

export default Form;
