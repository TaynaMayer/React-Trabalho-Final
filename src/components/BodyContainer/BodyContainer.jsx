export const BodyContainer = (props) => {
    return (
        <div style={{
            width: "1000px",
            margin: "auto"
        }}>
            {props.children}
        </div>
    )
}