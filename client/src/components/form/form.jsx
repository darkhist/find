import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';

const Title = styled.h3`
  margin: 1em 0;
  text-align: center;
`;

const Label = styled.label`
  margin: 0.25em;
`;

const Button = styled.button`
  background: #2bbbad;
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  font-size: 0.75em;
  margin: 1em;
  padding: 0.25em;
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
          <Label> Enter Job Keywords: </Label>
          <Field
            name="keywords"
            type="text"
            placeholder="Python, Java, etc"
          />
          <br />
          <Label> Enter Location: </Label>
          <Field name="location" type="text" placeholder="New York" />
          <br />
          <Label> Email: </Label>
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
