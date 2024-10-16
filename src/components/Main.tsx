import {TypeArr} from "../App.tsx";
import {ChangeEvent, FC} from "react";

type PropsMain = {
    arr: TypeArr,
    setArr: (arr: TypeArr) => void,
}

const Main: FC<PropsMain> = ({arr, setArr}) => {
    const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setArr({...arr, todo: e.currentTarget.value})
    }

    const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Checked : ", e.currentTarget.checked)
        setArr({...arr, check: !arr.check})
    }

    const onClickEnter = () => {
        console.log(arr.todo)
    }

    return (
        <div>
            <div className="mx-16 min-h-8 w-auto bg-gray-400 p-2 flex">
                <div>
                    <input
                        type="text"
                        onChange={onChangeCheck}
                    />
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={arr.check}
                        onChange={onChangeChecked}
                    />
                </div>
                <div>
                    <button
                        onClick={onClickEnter}
                    >PRESS MY
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;