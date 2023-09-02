/* eslint-disable linebreak-style */
/* eslint-disable indent */
import ReactDOM from 'react-dom/client'

import { App } from './components/App'

import './styles/resourses/nullstyle.scss'

// Отображаем основной компонент App на странице

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />,
)
