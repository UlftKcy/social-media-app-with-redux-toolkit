import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import Author from "../components/Author.js";
import ReactionButtons from "../components/ReactionButtons.js";
import TimeAgo from "../components/TimeAgo.js";

const PostDetail = () => {
  const { postId } = useParams();
  const postDetailPage = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  const history = useHistory();

  return (
    <div className="container-fluid">
      <div
        className="row d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-sm-8">
          <div className="card bg-light" style={{ height: "80vh" }}>
            <div className="card-header d-flex justify-content-between bg-primary text-white">
              <h5 className="card-title">{postDetailPage.title}</h5>
              <span className="card-toolbar">
                <TimeAgo timeStamp={postDetailPage.date} />
              </span>
            </div>
            <div className="card-body mt-2">
              <p className="card-text mb-5 text-left">
                {postDetailPage.content}
              </p>
              <Author userId={postDetailPage.user} />
            </div>
            <div className="card-footer d-flex justify-content-between">
              <ReactionButtons post={postDetailPage} />
              <div>
                <button
                  onClick={() => history.push(`/edit/${postDetailPage.id}`)}
                  className="btn btn-primary me-2"
                >
                  Edit
                </button>
                <button className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
