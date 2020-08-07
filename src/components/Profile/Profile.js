import React, {useState} from "react";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({profile, updateStatus, status, isOwner, updateProfilePhoto, updateProfile}) => {

    const [editMode, setEditMode] = useState(false);

    return (
        <div>
            <ProfileInfo profile={profile} updateStatus={updateStatus}
                         status={status} isOwner={isOwner}
                         updateProfilePhoto={updateProfilePhoto} editMode={editMode}
                         setEditMode={setEditMode} updateProfile={updateProfile}/>
            { !editMode && <MyPostsContainer />}
        </div>
    );
}

export default Profile;