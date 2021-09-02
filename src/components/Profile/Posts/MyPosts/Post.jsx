import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img className={s.avatar} src={props.avatar} />
      <span className={s.nickname}>{props.name}:</span>
      <span className={s.postText}>{props.post}</span>
      <span className={s.likesCount}>
        {props.likesCount}
        <img className={s.like} src="https://cdn.icon-icons.com/icons2/906/PNG/512/thumb-up_icon-icons.com_69847.png" />

      </span>
      <span className={s.dislikesCount}>
        {props.dislikesCount}
        <img className={s.dislike} src="https://pngimg.com/uploads/dislike/dislike_PNG81.png" />
      </span>

    </div>
  )
}

export default Post;