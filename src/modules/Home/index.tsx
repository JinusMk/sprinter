import { Settings } from './Settings'
import Allocation from './Allocation'
import styles from './styles.css'
import Tasks from './Tasks'

 const Home = () => {
  return (
    <div className={styles.container}>
      <Settings />
      <div className={styles.row}>
        <Tasks />
        <Allocation />
      </div>
    </div>
  )
}

export default Home
