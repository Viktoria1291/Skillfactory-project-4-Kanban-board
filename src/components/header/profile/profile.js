import { IconChevron } from "../../shared/icons/icon-chevron";
import { IconProfile } from "../../shared/icons/icon-profile";
import css from './profile.module.scss'
import { useState } from "react";
import { Rectangle } from "../../shared/icons/rectangle";

export const Profile = () => {
    const [isMenuShown, setIsMenuShown] = useState(false);

    return (
        <div className={css.profile}
            onClick={() => setIsMenuShown(!isMenuShown)}>
            <IconProfile />
            <div className={`${css.chevron} ${isMenuShown ? css.up : ''}`}>
                <IconChevron />
            </div>

            {isMenuShown && <div className={css.menu}>
                <div className={css.rectangle}><Rectangle /></div>
                <div className={css.menu_item}>Profile</div>
                <div className={css.menu_item}>Log Out</div>
            </div>
            }
        </div>
    )
}