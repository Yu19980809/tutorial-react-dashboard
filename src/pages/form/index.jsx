import { Box, Button, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as yup from 'yup'
import useMediaQuery from '@mui/material/useMediaQuery'
import Header from '../../components/Header'

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required( 'required' ),
  lastName: yup.string().required( 'required' ),
  email: yup.string().email( 'invalid email' ).required( 'required' ),
  contact: yup.string()
    .matches( phoneRegExp, 'Phone number is not valid' )
    .required( 'required' ),
  address1: yup.string().required( 'required' ),
  address2: yup.string().required( 'required' )
})

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  contact: '',
  address1: '',
  address2: ''
}

const Form = () => {
  const isNonMobile = useMediaQuery( '( min-width: 600px )' )

  const handleFormSubmit = values => console.log( 'form submit', values )

  return (
    <Box m='20px'>
      <Header title='CREATE USER' subtitle='Create a New User Profile' />

      <Formik
        initialValues={ initialValues }
        validationSchema={ checkoutSchema }
        onSubmit={ handleFormSubmit }
      >
        { ( { values, errors, touched, handleBlur, handleChange, handleSubmit } ) => (
          <form onSubmit={ handleSubmit }>
            <Box
              display='grid'
              gap='30px'
              gridTemplateColumns='repeat( 4, minmax( 0, 1fr ) )'
              sx={{ '& > div': { gridColumn: isNonMobile ? undefined : 'span 4' } }}
            >
              <TextField
                type='text'
                variant='filled'
                label='First Name'
                name='firstName'
                value={ values.firstName }
                fullWidth
                helperText={ touched.firstName && errors.firstName }
                error={ !!touched.firstName && !!errors.firstName }
                sx={{ gridColumn: 'span 2' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
              />

              <TextField
                type='text'
                variant='filled'
                label='Last Name'
                name='lastName'
                value={ values.lastName }
                fullWidth
                helperText={ touched.lastName && errors.lastName }
                error={ !!touched.lastName && !!errors.lastName }
                sx={{ gridColumn: 'span 2' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
              />

              <TextField
                type='text'
                variant='filled'
                label='Email'
                name='email'
                value={ values.email }
                fullWidth
                helperText={ touched.email && errors.email }
                error={ !!touched.email && !!errors.email }
                sx={{ gridColumn: 'span 4' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
              />

              <TextField
                type='text'
                variant='filled'
                label='Contact Number'
                name='contact'
                value={ values.contact }
                fullWidth
                helperText={ touched.contact && errors.contact }
                error={ !!touched.contact && !!errors.contact }
                sx={{ gridColumn: 'span 4' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
              />

              <TextField
                type='text'
                variant='filled'
                label='Address 1'
                name='address1'
                value={ values.address1 }
                fullWidth
                helperText={ touched.address1 && errors.address1 }
                error={ !!touched.address1 && !!errors.address1 }
                sx={{ gridColumn: 'span 4' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
              />

              <TextField
                type='text'
                variant='filled'
                label='Address 2'
                name='address2'
                value={ values.address2 }
                fullWidth
                helperText={ touched.address2 && errors.address2 }
                error={ !!touched.address2 && !!errors.address2 }
                sx={{ gridColumn: 'span 4' }}
                onChange={ handleChange }
                onBlur={ handleBlur }
              />
            </Box>

            <Box display='flex' justifyContent='end' mt='20px'>
              <Button type='submit' variant='contained' color='secondary'>
                Create New User
              </Button>
            </Box>
          </form>
        ) }
      </Formik>
    </Box>
  )
}

export default Form
