import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addedPost } from "../features/posts/postSlice";
/* import { nanoid } from "@reduxjs/toolkit"; */

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId,setUserId] = useState("")
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(state => state.users)
  const canSave = Boolean(title) && Boolean(content) && Boolean(userId) 

  const onSubmit = () => {
    /* const newPost = {
      id: nanoid(),
      title,
      content,
    }; */
    if (title && content) {
      dispatch(addedPost(title,content,userId));
      setTitle("");
      setContent("");
      setUserId("");
      history.push("/");
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
                <h3 className="card-title">Create New Post</h3>
              </div>
              <form className="form">
                <div className="card-body">
                  <div className="form-group mb-3">
                    <label className="mb-1">Post Title</label>
                    <input
                      type="text"
                      className="form-control form-control-solid"
                      placeholder="enter post title..."
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                   <div className="form-group mb-3">
                    <label className="mb-1">Author</label>
                    <select
                      class="form-select"
                      id="postAuthor"
                      value={userId}
                      onChange={(e)=>setUserId(e.target.value)}
                    >
                    <option selected>--</option>
                    {users.map((user)=>(
                      <option value={user.id}>{user.name}</option>
                    ))
                    }
                    </select>
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
                    disabled = {!canSave}
                  >
                    Submit
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

export default NewPost;
