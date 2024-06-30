import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField, Button, Box, Alert } from '@mui/material';

interface IFormInput {
    email: string;
    password: string;
}

const schema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<IFormInput>({
        resolver: yupResolver(schema),
    });

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        try {
            setLoading(true);
            const response = await axios.post('https://authapi-production-e35b.up.railway.app/api/user/login', {
                email: data.email,
                password: data.password,
            });
            // Reset form and clear errors on successful login
            reset();
            setErrorMessage(null);

            // Aqui é onde você normalmente lidaria com o token de sessão ou JWT
            const authToken = response.data.token;

            // Armazenar o token em localStorage (exemplo simples)
            localStorage.setItem('authToken', authToken);

            // Redirecionar o usuário para a página principal, por exemplo
            // history.push('/dashboard'); // depende de como você gerencia a navegação

            // Handle successful authentication here
            console.log('Login successful:', response.data);
        } catch (error) {
            // Handle error
            setErrorMessage('Invalid email or password');
            console.error('Login failed:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ display: 'flex', flexDirection: 'column', width: '300px', margin: '0 auto', gap: '16px', backgroundColor: 'white', padding: '16px', borderRadius: '8px' }}
        >
            {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
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
            <Button type="submit" variant="contained" color="primary" disabled={loading}>
                {loading ? 'Loading...' : 'Login'}
            </Button>
        </Box>
    );
};

export default LoginForm;
