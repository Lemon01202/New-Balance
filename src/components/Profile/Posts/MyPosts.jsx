import s from "./MyPosts.module.css";
import Post from "./MyPosts/Post";
const MyPosts = (props) => {

  let postElements = props.posts
    .map(p => (<Post name={p.name} post={p.post} likesCount={p.likesCount} key={p.id} dislikesCount={p.dislikesCount} avatar={p.avatar} />));
  return (
    <div className={s.item}>
      {postElements}
    </div>
  )
}

export default MyPosts;