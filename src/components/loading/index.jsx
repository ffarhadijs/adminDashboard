import styles from "./style.module.css"
export const Loading=()=>{

    return(
        <div className={styles.container}>
        <span className={styles.loader}></span>
        </div>
    )
}