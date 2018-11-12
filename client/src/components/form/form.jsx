import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const Title = styled.h4`
  margin: 1em 0;
  text-align: center;
`;

const Label = styled.label`
  margin: 0.25em 0.5em;
`;

const Button = styled.button`
  background: #f4989c;
  border: 2px solid black;
  -webkit-border-radius: 45px;
  -moz-border-radius: 45px;
  border-radius: 45px;
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em;
  width: 5em;
`;

const SearchForm = () => (
  <div>
    <Title> Search for Jobs! </Title>
    <Formik
      initialValues={{
        keywords: '',
        location: '',
        email: ''
      }}
      /* TODO: Github Jobs API Call Goes Here */
      onSubmit={values => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
        }, 500);
      }}
      render={() => (
        <Form>
          <Label> Job Description </Label>
          <Field
            name="keywords"
            type="text"
            placeholder="Python, Java, Amazon"
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
          <Label> Full Time? </Label>
          <Field name="full-time" type="checkbox" />
          <br />
          <Button> Search </Button>
        </Form>
      )}
    />
  </div>
);

export default SearchForm;
