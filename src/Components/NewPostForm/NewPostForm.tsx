import { TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import './NewPostForm.scss';
import { validationRules } from './validation';
import { IPost } from '../../type/type';
import { Link } from 'react-router-dom';
import { useCreateNewUserMutation } from '../../redux/slices/postsApi';
import { Alert } from '@mui/material';
import { AppDispatch } from '../../redux/store';
import { useDispatch } from 'react-redux';
import { pushNewPost } from '../../redux/slices/postSlice';

const NewPostForm = () => {
    const dispatch: AppDispatch = useDispatch();
    const [createNewUser, {isError, isSuccess}] = useCreateNewUserMutation();
    const { 
        register, 
        handleSubmit,
        formState: { errors }, 
        reset
    } = useForm<IPost>();


    const onSubmit = async (data: IPost) => {
        try {
         const result = await createNewUser(data).unwrap();
         reset();
         dispatch(pushNewPost(data));
        } catch (error) {
            console.log(error);
    } 
    }

    if(isError){
        return (
            <>
            <Alert severity="error">
              Ошибка создания поста
          </Alert>
          <Link to="/" className="form-container__home-link">
               Главная
          </Link>
          </>
        
        );
    }

    if(isSuccess){
        return (
            <>
              <Alert severity="success">
                Новый пост создан
            </Alert>
            <Link to="/" className="form-container__home-link">
                Главная
            </Link>
            </>
          
        );
    }

    return (
        <div className="form-container">
            <Link to="/" className="form-container__home-link">
                На главную
            </Link>
            <h2 className="form-container__title">Создание поста</h2>
            <form className="form-container__form" onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    {...register('userId', validationRules.userId)}
                    label="User ID"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={!!errors.userId}
                    helperText={errors.userId?.message}
                />
                <TextField
                    {...register('id', validationRules.id)}
                    label="ID"
                    variant="outlined"
                    type="number"
                    fullWidth
                    error={!!errors.id}
                    helperText={errors.id?.message}
                />
                <TextField
                    {...register('title', validationRules.title)}
                    label="Заголовок"
                    variant="outlined"
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title?.message}
                />
                <TextField
                    {...register('body', validationRules.body)}
                    label="Текст поста"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    error={!!errors.body}
                    helperText={errors.body?.message}
                />
                <Button 
                    variant="contained" 
                    type="submit"
                    fullWidth
                >
                    Создать пост
                </Button>
            </form>
        </div>
    );
};

export default NewPostForm;