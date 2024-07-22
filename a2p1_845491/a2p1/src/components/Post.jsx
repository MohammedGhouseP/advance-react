function Post({avatar,email,first_name,last_name }) {
  return (
    <div>
      <img src={avatar} alt="" />
      <p> <b>Name: </b> {first_name} {last_name}</p>
      <p><b>Email: </b> {email}</p>
    </div>
  );
}

export default Post;
