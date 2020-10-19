import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Questions from "./Questions"
import Question from "./Question"
import ModifyQuestion from "./ModifyQuestion"
import Home from "./Home"
import AddQuestion from "./AddQuestion"
import PageNotFound from "../common/PageNotFound"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <ToastContainer autoClose={2000} hideProgressBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/questions" exact component={Questions} />
        <Route path="/questions/:id" exact component={Question} />
        <Route path="/modifyquestion" exact component={ModifyQuestion} />
        <Route path="/addquestion" exact component={AddQuestion} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
