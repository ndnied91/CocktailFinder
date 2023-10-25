import React from 'react';
import axios from 'axios';
import { Form, useNavigation } from 'react-router-dom';

import { redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

//action - handling the form submittion

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    let err = error?.response?.data?.msg;

    toast.error(err.toUpperCase());

    return error;
  }
};

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  // console.log(res);
  return (
    <Form className="form" method="POST">
      <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
        our newsletter
      </h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          required
        />
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          className="form-input"
          name="lastName"
          id="lastName"
          required
        />
      </div>
      {/* name */}
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          className="form-input"
          name="email"
          placeholder="@test emails only allowed"
          id="email"
          required
        />
      </div>

      {!isSubmitting ? (
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: '0.5rem' }}
        >
          {isSubmitting ? 'Submitting..' : 'Submit'}
        </button>
      ) : (
        <button
          type="submit"
          className="btn btn-block"
          style={{ marginTop: '0.5rem', opacity: '.5' }}
          disabled
        >
          Submitting..
        </button>
      )}
    </Form>
  );
};

export default Newsletter;
