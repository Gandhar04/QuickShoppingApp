import styles from './Container.module.css'

function HeaderContainer({children}) {
  return (
    <div className={styles.HeaderContainer}>{children}</div>
  )
}

export default HeaderContainer