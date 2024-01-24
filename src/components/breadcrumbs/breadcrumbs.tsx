import styles from "./breadcrumbs.module.scss"

type BreadcrumbsProps = {
    names: string[],
}

function Breadcrumbs(props: BreadcrumbsProps) {
    return (
        <div className={styles.fon}>
            {props.names.map((element) => (
                <span key={element}>{element}</span>
            ))}
        </div>
    )
}

export default Breadcrumbs;