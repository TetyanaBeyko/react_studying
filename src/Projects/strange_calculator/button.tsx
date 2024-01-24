import styles from "./strange_calsulator.module.scss";

type ButtonProps = {
    state: boolean
    setState: CallableFunction
    innerText: string
}

function Button(props: ButtonProps) {

    const handleModal = () => {
        props.setState(!props.state);
    }

    return (
        <button className={styles.button} onClick={handleModal}>{props.innerText}</button>
    )
}

export default Button;