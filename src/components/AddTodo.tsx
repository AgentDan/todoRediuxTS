
const AddTodo = () => {
    return (
        <div className="h-[300px] w-[250px] bg-gray-400 border-2 border-black rounded-2xl m-2">
            <div className="m-2">
                <input
                    className="p-2 rounded-xl"
                    type="text"
                />
            </div>
            <div className="m-2 ">
                <button
                    className="p-2 rounded-xl cursor-pointer hover:bg-red-300 bg-gray-300 border-2 border-black">PRESS
                    MY
                </button>
            </div>
            <div className="m-2">

            </div>
        </div>
    );
};

export default AddTodo;