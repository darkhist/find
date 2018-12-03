import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

import Results from './results/results';

const Title = styled.h4`
  font-style: italic;
  margin: 1em 0;
  text-align: center;
`;

const Label = styled.label`
  margin: 0.25em 0.5em;
`;

const Button = styled.button`
  background: #d77a61;
  border-radius: 45px;
  -webkit-border-radius: 45px;
  -moz-border-radius: 45px;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em;
  width: 5em;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const request = async (formData) => {
  const response = await fetch('https://mis407team4.herokuapp.com/search', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });
  return response.json();
};

export default class SearchForm extends Component {
  constructor() {
    super();
    this.state = { data: undefined };
  }

  render() {
    const { data } = this.state;

    return (
      <div className="formik-results">
        <div className="formik">
          <Title> Search for jobs! </Title>
          <Formik
            initialValues={{
              keywords: '',
              location: '',
              email: ''
            }}
            onSubmit={async (values) => {
              const results = await request(values);
              this.setState({ data: results });
            }}
            render={() => (
              <Form autoComplete="off">
                <Label> Job Description </Label>
                <Field
                  name="keywords"
                  type="text"
                  placeholder="Python, JavaScript, etc"
                />
                <br />
                <Label> Location </Label>
                <Field
                  name="location"
                  type="text"
                  placeholder="New York, 11211"
                />
                <br />
                <Label> Email </Label>
                <Field
                  name="email"
                  type="email"
                  placeholder="jane.doe@gmail.com"
                />
                <br />
                <Button type="submit"> Search </Button>
              </Form>
            )}
          />
        </div>
        <div className="results-container">
          <Results results={data} />
        </div>
      </div>
    );
  }
}
