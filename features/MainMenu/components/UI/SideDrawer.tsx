
import { BiArrowBack } from "react-icons/bi"

interface SideDrawerProps {
    onClose?: React.MouseEventHandler
    children?: React.ReactNode
    className?: String
    drawerTitle: String
}

//TODO Slide animation from the left

/** 
 * Drawer template that will slide from the left with dark backdrop
 * @props onBackdropClick: function listener when user click outside of the drawer / the backdrop shadow
*/
const SideDrawer: React.FC<SideDrawerProps> = (props) => {
    return (
        <>
            <div onClick={props.onClose} className="bg-black opacity-50 fixed z-10 w-screen h-screen">
            </div>
            <div className={`bg-neutral-800 w-1/3 fixed z-20 top-0 left-0 h-screen flex flex-col `}>
                <div className="flex gap-2 items-center h-14 pl-4 mt-4 ">
                    <BiArrowBack onClick={props.onClose} size={32} /> <p>{props.drawerTitle}</p>
                </div>
                <div className={`${props.className}`}>
                    {props.children}
                </div>
            </div>
        </>
    )
}

export default SideDrawer