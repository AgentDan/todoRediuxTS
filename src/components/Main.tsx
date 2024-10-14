
const Main = ({arr, setArr}) => {
    return (
        <div>
            <div className="mx-16 min-h-8 w-auto bg-gray-400 p-2 flex">
                <div>{arr.todo}</div>
                <div>
                    <input type="checkbox" checked={arr.check} onClick={setArr(!arr.check)}/>
                </div>
            </div>
        </div>
    );
};

export default Main;