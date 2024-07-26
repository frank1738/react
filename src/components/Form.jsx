import { useFormik } from 'formik';

const Form = () => {
  const handleFormSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
    console.log(values);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.firstname) {
      errors.firstname = 'name is required';
    }
    if (!values.lastname) {
      errors.lastname = 'last name is required';
    }

    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      firstname: '',
      lastname: '',
      phone: '',
    },
    validate,
    onSubmit: handleFormSubmit,
  });

  const handleTelChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      formik.handleChange(e);
    }
  };
  return (
    <div>
      {' '}
      <div className="profile">
        <h1>Just use React</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstname">first name</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              {...formik.getFieldProps('firstname')}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <p>{formik.errors.firstname}</p>
            )}
          </div>
          <div>
            <label htmlFor="lastname">Last name</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              {...formik.getFieldProps('lastname')}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <p>{formik.errors.lastname}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              {...formik.getFieldProps('email')}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="phone"
              name="phone"
              {...formik.getFieldProps('phone')}
              // value={formik.values.phone}
              onChange={handleTelChange}
              // onBlur={formik.handleBlur}
            />
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
