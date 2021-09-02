import { connect } from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.posts
  }
}

let MyPostsContainer = connect(mapStateToProps)(MyPosts);


export default MyPostsContainer;