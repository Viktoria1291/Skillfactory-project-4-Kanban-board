import css from './header.module.scss';
import { Profile } from "./profile/profile";

export const Header = () => {
    return (
        <header className={css.header}>
            <h1>Kanban board</h1>
            <Profile />
        </header>
    )
}