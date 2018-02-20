import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxPromise from 'redux-promise';

import reducers from './reducers';
import PostIndexComponent from './components/posts_index';
import NewPostComponent from './components/posts_new';
import PostsShowComponent from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/posts/new' component={NewPostComponent}/>
          <Route path='/posts/:id' component={PostsShowComponent}/>
          <Route path='/' component={PostIndexComponent}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
