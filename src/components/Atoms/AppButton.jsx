const AppButton = (props) => {
    return (
        <a href="#" onClick={props.onClick} className="bg-blue text-white text-sm-2 px-3 py-2 border border-blue rounded">
            {props.children}
        </a>
    )
}

export default AppButton;
