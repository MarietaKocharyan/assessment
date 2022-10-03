import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const userSchema = yupResolver(
    yup
        .object({
            first_name: yup.string().required('Name is required'),
            last_name: yup.string().required('Name is required'),
            email: yup.string().email('Please enter a valid email address').required('Email address required'),
            gender: yup.string().required('Please select gender'),
            social_insurance_number: yup.string().required('Please select SSN'),
            username: yup.string().required('Username Title is required'),
            phone_number: yup.string().required('phone_number Title is required'),
            date_of_birth: yup.string().required('date_of_birth Title is required'),
        })
        .required()
);