import {ChangeEvent, FC} from "react";
import './BlockList.scss';

interface BlockListProps {
    color: string
    sortOrder: 'none' | 'asc' | 'desc'
    handleClickAddBlock: () => void
    handleClickSortBlocks: () => void
    handleChangeColor: (event: ChangeEvent<HTMLInputElement>) => void
    handleClickShuffleAndAnimationActivatedBlocks: () => void
}

const BlockList: FC<BlockListProps> = (
    {
        color,
        sortOrder,
        handleClickAddBlock,
        handleClickSortBlocks,
        handleChangeColor,
        handleClickShuffleAndAnimationActivatedBlocks
    }) => {

    const sortOrderColor = `${sortOrder === 'none' ? 'sort__button--white' : sortOrder === 'asc' 
                                                          ? 'sort__button--blue' : 'sort__button--red'}`;

    const sortOrderCategory = sortOrder === 'none' ? 'Сортировка'
                                                         : sortOrder === 'asc' ? 'По возрастанию' : 'По убыванию';

    return (
        <div className="block-list">
            <div className="block-list__item">
                <button className="block-list__button"
                        onClick={handleClickShuffleAndAnimationActivatedBlocks}><span>Перемешать</span>
                </button>
                <input type="text" placeholder="Введите цвет FEX" value={color} onChange={handleChangeColor}/>
                <button className="block-list__button" onClick={handleClickAddBlock}><span>Добавить блок</span></button>
                <button className={`sort__button ${sortOrderColor}`} onClick={handleClickSortBlocks}>
                    <span>{sortOrderCategory}</span>
                </button>
            </div>
        </div>
    );
}

export default BlockList;
