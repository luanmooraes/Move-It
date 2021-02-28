import styles from '../styles/components/Profile.module.css'

export function Profile () {
    return(
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/65193369?s=400&u=b5a3963b62ea55e53bcd67eecfb098e99000dfa1&v=4://avatars.githubusercontent.com/u/65193369?s=460&u=b5a3963b62ea55e53bcd67eecfb098e99000dfa1&v=4" alt="Luan Moraes"/>
            <div>
                <strong>Luan Moraes</strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level 1
                </p>
            </div>
        </div>
    );

}