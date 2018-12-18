import React, { Component } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

import Results from './results/results';

export const Title = styled.h2`
  font-size: 1em;
  font-style: italic;
  font-weight: 200;
  margin: 1em 0;
  text-align: center;
`;

export const Label = styled.label`
  margin: 0.25em 0.5em;
`;

export const Button = styled.button`
  background: #d77a61;
  border-radius: 45px;
  -webkit-border-radius: 45px;
  -moz-border-radius: 45px;
  color: black;
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
    this.state = { jobs: undefined, keywords: undefined, location: undefined };
  }

  render() {
    const { jobs, keywords, location } = this.state;

    return (
      <div className="container">
        <div className="formik">
          <Title> Job Finding Made Easy </Title>
          <Formik
            initialValues={{
              keywords: '',
              location: '',
              email: ''
            }}
            onSubmit={async (values) => {
              const results = await request(values);
              this.setState({ jobs: results[0], keywords: results[1], location: results[2] });
            }}
            render={() => (
              <Form autoComplete="off">
                <Label htmlFor="keywords">
                  Job Description
                </Label>
                <Field
                  id="keywords"
                  name="keywords"
                  type="text"
                  placeholder="Python, JavaScript"
                />
                <br />
                <Label htmlFor="location">
                  Location
                </Label>
                <Field
                  id="location"
                  name="location"
                  type="text"
                  placeholder="San Fransisco"
                />
                <br />
                <Label htmlFor="email">
                  Email
                </Label>
                <Field
                  id="email"
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
          <Results jobs={jobs} keywords={keywords} location={location} />
        </div>
      </div>
    );
  }
}
