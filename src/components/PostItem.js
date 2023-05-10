const PostItem = (props) => {
  const { post } = props;

  return (
    <div>
      <h2>{post.title}</h2>
      <span>{post.count}</span>
    </div>
  );
};

export default PostItem;