import {TypeArr} from "../App.tsx";
import {ChangeEvent, FC} from "react";

type PropsMain = {
    arr: TypeArr,
    // setArr: () => void,
}

const Main: FC<PropsMain> = ({arr}) => {
    const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) =>
        console.log(e.currentTarget.value)


    return (
        <div>
            <div className="mx-16 min-h-8 w-auto bg-gray-400 p-2 flex">
                <div>{arr.todo}</div>
                <div>
                    <input
                        type="checkbox"
                        checked={arr.check}
                        onChange={onChangeCheck}
                    />
                </div>
            </div>
        </div>
    );
};

export default Main;