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
      terms: false,
      gender: '',
      count: '',
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
              onChange={handleTelChange}
            />
          </div>
          <div>
            <label htmlFor="select"></label>
          </div>

          <div>
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
            >
              <option value="">select gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div>
            <input
              id="terms"
              name="terms"
              type="checkbox"
              value={formik.values.terms}
              onChange={formik.handleChange}
            />
            <label htmlFor="terms">Terms & conditions</label>
          </div>

          <div>
            <label htmlFor="count">count</label>
            <input
              type="number"
              name="count"
              id="count"
              value={formik.values.count}
              onChange={formik.handleChange}
            />
          </div>

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
