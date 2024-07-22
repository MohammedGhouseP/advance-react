function Post({ avatar,email,first_name,last_name }) {
  return (
    <div>
      <img src={avatar} alt="" />
      <p>Name : {first_name} {last_name}</p>
      <p>Email : {email}</p>
    </div>
  );
}

export default Post;
