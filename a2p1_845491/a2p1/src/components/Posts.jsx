import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import LoadingIndicator from "./LoadingIndicator";
import ErrorIndicator from "./ErrorIndicator";

function Posts() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);

  async function fetchAndUpdateData() {
    try {
      {
        let res = await axios.get(
          // method : 'get',
          `https://reqres.in/api/users`
        )
        setPosts(res?.data?.data)
        console.log("list of posts",posts)
      }
    } catch (error) {
      {
        setError(true)
      }
    }
  }

  // useEffect(()=>{
  //   fetchAndUpdateData() // when page loads data also load automatically components mount happends
  // },[]);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h1>List of Posts</h1>
      <button onClick={fetchAndUpdateData}>
        Click to display list of posts
      </button>
      {posts?.map((postUser)=>(
        <Post key={postUser.id} {...postUser}/>
      ))}
    </div>
  );
}

export default Posts;