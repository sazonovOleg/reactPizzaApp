import React from 'react';
import {Categories, SortPopup, PizzaBlock} from "../";

export default function Home({items}) {
    return (
        <div className="container">
            <div className="content__top">
                <Categories items={["Мясные","Вегетарианские","Гриль","Острые","Закрытые"]}/>
                <SortPopup items={["популярности", "цене", "алфавиту"]} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items.map((obj) => ( console.log(obj.name),
                        <PizzaBlock
                            key={`${obj.name}_${obj.id}`}
                            {...obj}
                        />))
                }
            </div>
        </div>
    );
}
