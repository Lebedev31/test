import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPost } from '../../type/type';


interface initialProps {
    postsId: string[];
    favoritesArrayId: string[];
    newPostArray: IPost[];
}

const initialState: initialProps = {
    postsId: [],
    favoritesArrayId: [],
    newPostArray: [],
};

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<string>) => {
            state.favoritesArrayId.push(action.payload);
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favoritesArrayId = state.favoritesArrayId.filter((item) => item !== action.payload);
        },
        
        deletePost: (state, action: PayloadAction<string>) => {
            state.postsId.push(action.payload);
        },

        pushNewPost: (state, action: PayloadAction<IPost>)=>{
            state.newPostArray.push(action.payload);
        }

    },
});

export const {addFavorite, removeFavorite, deletePost, pushNewPost} = postsSlice.actions;
export default postsSlice.reducer;