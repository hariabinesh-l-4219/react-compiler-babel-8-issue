export const Badge = ({
    variant = "primary",
    ...rest
}) => {
    const className = `badge badge-${variant}`;
    return (
        <div className={className} {...rest}></div>
    );
}