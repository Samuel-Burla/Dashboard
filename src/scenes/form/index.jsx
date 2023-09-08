import { Formik } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField, useMediaQuery } from "@mui/material";
///import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

const phoneRegex =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("required"),
  lastName: Yup.string().required("required"),
  email: Yup.string().email().required("required"),
  contact: Yup.string()
    .matches(phoneRegex, "Phone number not valid")
    .required("required"),
  address1: Yup.string().required("required"),
  address2: Yup.string().required("required"),
});

const Form = () => {
  const handleFormSubmit = (values) => {
    console.log(values);
  };
  const isNonMobile = useMediaQuery("(min-width : 600px)");
  return (

    <Box m="20px">
      <Header title="Form" subtitle="Create a new user"/>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        handleFormSubmit={handleFormSubmit}
      >
        {({
          values,
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": {
                  gridColumn: isNonMobile ? undefined : "span 4",
                },
              }}
            >
              <TextField
                fullWidth
                placeholder="First Name"
                type="text"
                variant="filled"
                name="firstName"
                values={values.firstName}
                onBlur={handleBlur}
                onChange={handleChange}
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                placeholder="Last Name"
                type="text"
                variant="filled"
                values={values.lastName}
                onBlur={handleBlur}
                onChange={handleChange}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                type="text"
                placeholder="Email"
                variant="filled"
                values={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                placeholder="Contact"
                variant="filled"
                values={values.contact}
                onBlur={handleBlur}
                onChange={handleChange}
                name="contact"
                error={!!touched.contact && !!errors.contact}
                helperText={touched.contact && errors.contact}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                placeholder="Address 1"
                variant="filled"
                values={values.address1}
                onBlur={handleBlur}
                onChange={handleChange}
                name="address1"
                error={!!touched.address1 && !!errors.address1}
                helperText={touched.address1 && errors.address1}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                type="text"
                placeholder="Address 2"
                variant="filled"
                values={values.firstNamaddress2}
                onBlur={handleBlur}
                onChange={handleChange}
                name="address2"
                error={!!touched.address2 && !!errors.address2}
                helperText={touched.address2 && errors.address2}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained" color="secondary"> 
                Create user
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Form;
