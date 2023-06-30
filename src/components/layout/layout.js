import css from './layout.module.scss'
import { TaskProvider } from '../../hooks/task/task-provider'

export const Layout = (props) => {
    return (
        <TaskProvider>
            <div className={css.layout}>
                {props.children}
            </div>
        </TaskProvider>
    )
}