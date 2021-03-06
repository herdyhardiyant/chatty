import SideDrawer from "../UI/SideDrawer"
import UsernameSetting from "./UsernameSetting"
import Button from "../UI/Button"
import { BUTTON_STYLES } from "../UI/Button"
import ProfilePictureSetting from "./ProfilePictureSetting"

interface ProfileSettingProps {
    onClose: React.MouseEventHandler
}

/** 
 * Profile Setting on the left drawer. It will slide out after the users click their profile picture. See figma design
*/

const ProfileSetting: React.FC<ProfileSettingProps> = (props) => {

    return (
        <SideDrawer drawerTitle="Profile Setting" onClose={props.onClose}>
            <ProfilePictureSetting />
            <UsernameSetting />
            <Button buttonStyle={BUTTON_STYLES.ghostWhite} >Logout</Button>
        </SideDrawer>
    )

}

export default ProfileSetting