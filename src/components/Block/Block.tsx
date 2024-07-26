import {FC} from "react";
import './Block.scss';

interface BlockProps {
    id:string
    color: string
    time: number
    handleClickResetTimerBlock:()=>void
}

const Block:FC<BlockProps> = ({id,color, time,handleClickResetTimerBlock}) => {
    return (
        <div key={id} className="block"
             onClick={handleClickResetTimerBlock}
             style={{backgroundColor: color}}>
            <span>{time}</span>
        </div>
    );
}

export default Block;