import React from 'react';
import './App.css';
import Post from "./components/Post";
import PostForm from "./components/PostForm";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    // The store holds the state tree inside of our application 
    // The Provider should wrap the application
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
