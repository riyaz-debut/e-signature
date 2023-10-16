import "./App.css";
import * as Yup from "yup";
import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik, Form } from "formik";
import RegexTypes from "./regex/regexFile";
function App() {
  const [initialValues, setinitialValues] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    signature: "",
    userId:"2"
  });
  // const validationSchema = Yup.object({
  //   name: Yup.string()
  //     .required("name is Required")
  //     .matches(RegexTypes.emailRegex, "email you entered is invalid"),
  //   email: Yup.string()
  //     .required("email is Required")
  //     .matches(RegexTypes.emailRegex, "email you entered is invalid"),
  //   mobilenumber: Yup.string()
  //     .required("please enter your Mobile Number")
  //     .max(10, "value does not exceed 10 characters")
  //     .matches(RegexTypes.phoneNumberRegex, "Number you entered is invalid"),
  //   Signature: Yup.string().required("Signature is Required"),
  // });
  const onSubmit = (values) => {
    values.userId=Math.floor(Math.random() * 100)+1
    axios
      .post("http://localhost:3001/user", values)
      .then((res) => {
        console.log(res, "response");
        window.location.reload();
      })
      .catch((error) => {
      console.log("something missing", error);
    });
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          mobilenumber: "",
          signature: "",
        }}
        onSubmit={onSubmit}
        enableReinitialize={true}
        // validationSchema={validationSchema}
      >
        {({ handleBlur, handleChange, values, errors, touched, isValid }) => (
          // <Form>
          <div class="content">
            <div class="container">
              <div class="row align-items-stretch no-gutters contact-wrap">
                <div class="col-md-12">
                  <div class="form h-100">
                    <h3>e-signature Form</h3>
                    <Form method="post" id="contactForm" name="contactForm">
                      <div class="row">
                        <div class="col-md-6 form-group mb-3">
                          <label for="" class="col-form-label">
                            Name *
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            onBlur={handleBlur}
                            placeholder="Your name"
                          />
                          {errors.name && touched.name ? (
                            <p className="form-error">{errors.name}</p>
                          ) : null}
                        </div>

                        <div class="col-md-6 form-group mb-3">
                          <label for="" class="col-form-label">
                            Email *
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            onBlur={handleBlur}
                            placeholder="Your email"
                          />
                          {errors.email && touched.email ? (
                            <p className="form-error">{errors.email}</p>
                          ) : null}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 form-group mb-3">
                          <label for="" class="col-form-label">
                            Mobile Number *
                          </label>
                          <input
                            type="text"
                            class="form-control"
                            name="mobilenumber"
                            onChange={handleChange}
                            value={values.mobilenumber}
                            onBlur={handleBlur}
                            placeholder="Mobile number"
                          />
                          {errors.mobilenumber && touched.mobilenumber ? (
                            <p className="form-error">{errors.mobilenumber}</p>
                          ) : null}
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-12 form-group mb-3">
                          <label for="message" class="col-form-label">
                            Signature *
                          </label>
                          <textarea
                            class="form-control"
                            name="signature"
                            cols="30"
                            rows="4"
                            onChange={handleChange}
                            value={values.signature}
                            onBlur={handleBlur}
                            placeholder="Signature"
                          ></textarea>
                          {errors.signature && touched.signature ? (
                            <p className="form-error">{errors.signature}</p>
                          ) : null}
                        </div>
                      </div>
                      <div class="row">
                        <div class="col-md-12 form-group center-align-btn">
                          <input
                            type="submit"
                            value="Save"
                            class="btn btn-primary rounded-0 py-2 px-4"
                          />
                          <input
                            type="submit"
                            value="Cancel"
                            class="btn btn-secondary rounded-0 py-2 px-4"
                          />
                        </div>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          //</Form>
        )}
      </Formik>
    </>
  );
}

export default App;
