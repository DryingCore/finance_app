import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { TextField, Button, Box } from '@mui/material';

interface IFormInput {
    email: string;
    password: string;
}

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto', gap: '16px' }}
        >
            <TextField
                label="Email"
                {...register('email')}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
            />
            <TextField
                label="Password"
                type="password"
                {...register('password')}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ''}
            />
            <Button type="submit" variant="contained" color="primary">
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;
