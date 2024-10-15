import {FC} from "react";
import {TypeArr} from "../App.tsx";

type TypePropsMain = {
    arr: TypeArr;
    setArr: (check: boolean) => void;
}

const Main: FC<TypePropsMain> = ({arr, setArr}) => {

    return (
        <div>
            <div className="mx-16 min-h-8 w-auto bg-gray-400 p-2 flex">
                <div>{arr.todo}</div>
                {/*<div>*/}
                {/*    <input type="checkbox" checked={arr.check} onClick={setArr(!arr.check)}/>*/}
                {/*</div>*/}
                <button
                    onClick={() => {
                        console.log("ARR : ", arr.todo)
                    }}
                >
                    PRESS MY
                </button>
                <button
                    onClick={() => {
                        setArr({arr.todo = "HELLO"})
                    }}
                >
                    PRESS MY SET ARR
                </button>
            </div>
        </div>
);
};

export default Main;