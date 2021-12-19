import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Dashboard from "../pages/Dashboard";
import NewPost from "../pages/NewPost";
import PostDetail from "../pages/PostDetail";
import PostEdit from "../pages/PostEdit";

const AppRouter = () => {
  return(
    <Router>
        <Navbar/>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/newpost" component={NewPost}/>
      <Route path="/postdetail/:postId" component={PostDetail}/>
      <Route path="/edit/:postId" component={PostEdit}/>
    </Switch>
  </Router>
  )
};
export default AppRouter;
