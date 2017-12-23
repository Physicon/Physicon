import React, {Component} from 'react'

class Filter extends Component {
    constructor (props) {
        super(props);


    }

    render() {
        return (
            <form className="filter">
                <div className="filter__col">
                    <select className="filter__select" id="subj" name="subj">
                        <option value="">Все предметы</option>
                        <option>Алгебра</option>
                        <option>Английский язык</option>
                        <option>Биология</option>
                        <option>География</option>
                        <option>Геометрия</option>
                        <option>Естествознание</option>
                        <option>Информатика</option>
                        <option>История</option>
                        <option>Математика</option>
                        <option>Обществознание</option>
                        <option>Окружающий мир</option>
                        <option>Робототехника</option>
                        <option>Русский язык</option>
                        <option>Физика</option>
                        <option>Химия</option>
                    </select>
                </div>
                <div className="filter__col">
                    <select className="filter__select" id="genre" name="genre">
                        <option value="">Все жанры</option>
                        <option>Задачник</option>
                        <option>Рабочая тетрадь</option>
                        <option>Тренажер ВПР-2017</option>
                        <option>Тренажер ЕГЭ-2018</option>
                    </select>
                </div>
                <div className="filter__col">
                    <select className="filter__select" id="grade" name="grade">
                        <option value="">Все классы</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                        <option>11</option>
                    </select>
                </div>
                <div className="filter__col">
                    <input className="filter__search" type="text" placeholder="Поиск" id="search" name="search"/>
                    <button className="filter__search-btn" type="submit" title="Найти"></button>
                </div>
            </form>
        )
    }
}

export default Filter