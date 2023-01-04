const validate = (values) => {
  const errors = {};

  if (!values.firstName) {
    errors.firstName = "First name is required";
  } else {
    delete errors.firstName;
  }


  if (!values.lastName) {
    errors.lastName = "Last name is required";
  } else {
    delete errors.lastName;
  }


  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "email is not valid";
  } else {
    delete errors.email;
  }


  if (!values.job) {
    errors.job = "Job is required";
  } else {
    delete errors.job;
  }

  
  if (!values.cellPhone) {
    errors.cellPhone = "Cell phone is required";
  } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(values.cellPhone)) {
    errors.cellPhone = "Cell phone is not valid";
  } else {
    delete errors.cellPhone;
  }


  if (!values.bio) {
    errors.bio = "Bio is required";
  } else if (values.bio.length>100) {
    errors.bio = "Bio is too long!";
  } else {
    delete errors.bio;
  }

  
  if (!values.country) {
    errors.country = "Country is required";
  } else {
    delete errors.country;
  }

  if (!values.state) {
    errors.state = "State is required";
  } else {
    delete errors.state;
  }

  if (!values.status) {
    errors.status = "Status is required";
  }else if (values.status.length>50) {
    errors.status = "Status is too long";
  } else {
    delete errors.status;
  }




  return errors;
};

export default validate;
