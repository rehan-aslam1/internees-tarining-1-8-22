import React, { Component } from "react";
import axios from "axios";
class PostClass extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.com/posts")
      .then((res) => {
        this.setState({
          data: res.data,
        });
      })
      .catch((error) => console.log(error));
  }
//   async componentDidMount() {
//     try {
//         const {data} = await axios.get("https://jsonplaceholder.com/posts");
//         this.setState({
//             data,
//           });
//     } catch (error) {
//         console.log(error)
//     }

//   }
  render() {
    const { data } = this.state;
    return (
      <>
        {/* {data && data.map((post) => {
          return (
            <ul key={post.id}>
              <li>{post.name}</li>
            </ul>
          );
        })} */}
        {data?.map((post) => {
          return (
            <ul key={post.id}>
              <li>{post.name}</li>
            </ul>
          );
        })}
      </>
    );
  }
}

export default PostClass;
