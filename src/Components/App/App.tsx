import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
import { store } from '../../redux/store';
import { CardList } from '../CardBlock/CardList/CardList';
import './App.scss';
import Post from '../CardBlock/Post/Post';
import NewPostForm from '../NewPostForm/NewPostForm';

const App = () => {
  return (
    <Provider store={store}>
      <Router basename="/test">
        <Container className="container">
          <div className="app">
            <Routes >
              <Route path="/" element={<CardList />} />
              <Route path="/products/:id" element={<Post />} />
              <Route path="/new-post" element={<NewPostForm />} />
            </Routes>
          </div>
        </Container>
      </Router>
    </Provider>
  );
};

export default App;
