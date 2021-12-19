import React from "react";
import { useDispatch } from "react-redux";
import { addedReactions } from "../features/posts/postSlice";
const reactionEmoji = {
  heart: "❤️",
  eyes: "👀",
};
const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        className="btn-sm border-0"
        key={name}
        onClick={() =>
          dispatch(addedReactions({ postId: post.id, reaction: name }))
        }
      >
        {emoji}
        {post.reactions[name]}
      </button>
    );
  });
  return <div className="btn-group">{reactionButtons}</div>;
};

export default ReactionButtons;
