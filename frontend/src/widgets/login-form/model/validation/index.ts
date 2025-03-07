import { object, string } from 'yup';

export const validationSchema = object().shape({
    email: string()
        .trim()
        .email('Некорректный формат электронной почты')
        .required('Электронная почта обязательна'),
    password: string()
        .trim()
        .min(8, 'Пароль должен содержать минимум 8 символов')
        .max(128, 'Пароль не может превышать 128 символов')
        .required('Пароль обязателен'),
});

export const initialValues = {
    password: '',
    email: '',
};
