import React,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { updatedPost } from "../features/posts/postSlice";

const PostEdit = () => {
  const { postId } = useParams();
  const postEditPage = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  const [title, setTitle] = useState(postEditPage.title);
  const [content, setContent] = useState(postEditPage.content);
  const history = useHistory();
  const dispatch = useDispatch();
 
  const onSubmit = () => {
      /* const editDetail = {
        id:postEditPage.id,
        title,
        content
      } */
    if (title && content) {
      dispatch(updatedPost(postEditPage.id,title,content))
      history.push(`/postdetail/${postEditPage.id}`);
    } else {
      alert("Gerekli tüm alanları doldurunuz.");
    }
  };
  return (
    <div className="d-flex justify-content-center align-items-center">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6">
          <div className="card card-custom">
            <div className="card-header mb-2">
              <h3 className="card-title">Edit Post</h3>
            </div>
            <form className="form">
              <div className="card-body">
                <div className="form-group mb-3">
                  <label className="mb-1">Post Title</label>
                  <input
                    type="text"
                    className="form-control form-control-solid"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-group mb-3">
                  <label className="mb-1" for="exampleTextarea">
                    Post Content
                  </label>
                  <textarea
                    className="form-control form-control-solid"
                    rows="3"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                  ></textarea>
                </div>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <button
                  type="reset"
                  className="btn btn-success me-2"
                  onClick={onSubmit}
                >
                  Save
                </button>
                <button type="reset" className="btn btn-secondary">
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PostEdit;
