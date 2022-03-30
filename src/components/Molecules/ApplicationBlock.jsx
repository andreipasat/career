
const ApplicationBlock = (props) => {
    const htmlSvg = (svg) => {
        return { __html: svg  };
    };
    return (
        <div>
            <div className="space-y-12 w-full h-36">
                <div className="w-full flex justify-between">
                    <span className=" text-neutral text-xl font-tt_commons">{props.application.amount}</span>
                    <span dangerouslySetInnerHTML={htmlSvg(props.application.svg)} />
                </div>

                <div className=" text-gray-3 font-tt_commons text-lg">
                    {props.application.name}
                </div>
            </div>
        </div>
    )
}

export default ApplicationBlock
