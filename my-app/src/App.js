import React from 'react';
import './App.css';
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import { createStore, applyMiddlware } from "redux";

const store = createStore(() => [], {}, applyMiddlware());

function App() {
  return (
    // The store holds the state tree inside of our application 
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
