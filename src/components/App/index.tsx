import { Header } from '../Header'

import styles from './styles.module.scss'

export const App = () => {
    return (
        <div className={styles.appWrapper}>
            <Header />
        </div>
    )
}