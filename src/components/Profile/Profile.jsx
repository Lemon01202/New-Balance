import s from "./Profile.module.css";
import MyPostsContainer from "./Posts/MyPostsContainer"
import ProfileInfoContainer from "./ProfileInfo/ProfileInfoContainer";

const Profile = (props) => {
  if (props.isAuth) {
    return (
      <div className={s.profile}>
        <ProfileInfoContainer userProfile={props.userProfile} status={props.userStatus} />
        <MyPostsContainer userProfile={props.userProfile} />
      </div>
    )
  }
}

export default Profile;