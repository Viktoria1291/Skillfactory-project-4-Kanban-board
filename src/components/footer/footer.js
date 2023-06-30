import css from './footer.module.scss';
import { useTasks } from "../../hooks/task/use-task";

export const Footer = (props) => {
    const { getActiveTaskCount, getFinishedTaskCount } = useTasks();

    return (
        <footer className={css.footer}>
            <span>Active tasks: {getActiveTaskCount()}</span>
            <span>Finished tasks: {getFinishedTaskCount()}</span>
            <span>Kanban board by Viktoria Stepanova, 2023</span>
        </footer>
    )
}