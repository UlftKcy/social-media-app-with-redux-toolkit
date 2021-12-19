import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import Author from "./Author.js";
import ReactionButtons from "./ReactionButtons.js";
import TimeAgo from "./TimeAgo.js";

const PostList = () => {
  const postLists = useSelector((state) => state.posts);
  const history = useHistory();
  return (
    <div className="row">
      {postLists?.map((postList, index) => (
        <div className="col-12 col-sm-8 col-md-6 col-lg-4">
          <div className="card bg-light border-dark my-3">
            <div className="card-header d-flex justify-content-between  align-items-center flex-wrap">
              <div>
                <h4 className="card-title">{postList.title}</h4>
                <small className="text-muted">
                  <TimeAgo timeStamp={postList.date} />
                </small>
              </div>
              <div className="card-toolbar">
                <button
                  className="btn btn-success"
                  onClick={() => history.push(`/postdetail/${postList.id}`)}
                >
                  View Post
                </button>
              </div>
            </div>
            <div
              className="card-body"
              style={{ height: "150px", overflow: "auto" }}
            >
              <p className="card-text">{postList.content}</p>
            </div>
            <div className="card-footer text-muted d-flex justify-content-between">
              <Author userId={postList.user} />
              <ReactionButtons post={postList} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
