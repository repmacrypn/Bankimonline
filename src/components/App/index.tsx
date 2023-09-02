import { Header } from '../Header'
import { Main } from '../Main'

import styles from './styles.module.scss'

export const App = () => {
    return (
        <div className={styles.appWrapper}>
            <Header />
            <Main />
        </div>
    )
}