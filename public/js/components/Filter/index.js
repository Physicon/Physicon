import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    setFilter
} from '../../actions'

import  {
    getFilter
} from '../../selectors'

const subj = ["Алгебра", "Английский язык", "Биология", "География", "Геометрия", "Естествознание", "Информатика", "История", "Математика", "Обществознание", "Окружающий мир", "Робототехника", "Русский язык", "Физика", "Химия"]
const genre = ["Задачник", "Рабочая тетрадь", "Тренажер ВПР-2017", "Тренажер ЕГЭ-2018"]
const grade = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11"]


class Filter extends Component {
    constructor (props) {
        super(props);
    }

    changeSelect (name, {target}) {
        this.props.setFilter({[name]: target.value})
    }

    search (e) {
        e.preventDefault();

        this.props.setFilter({'title': this.searchInput.value})
    }

    render() {
        const {filter} = this.props

        return (
            <form className="filter">
                <div className="filter__inner">
                    <div className="filter__col">
                        <select value={filter.subj} className="filter__select" id="subj" name="subj" onChange={this.changeSelect.bind(this, "subj")}>
                            <option value="">Все предметы</option>
                            {subj.map((val, index)=> <option key={index} value={val}>{val}</option>)}
                        </select>
                    </div>
                    <div className="filter__col">
                        <select value={filter.genre} className="filter__select" id="genre" name="genre" onChange={this.changeSelect.bind(this, "genre")}>
                            <option value="">Все жанры</option>
                            {genre.map((val, index)=> <option key={index} value={val}>{val}</option>)}
                        </select>
                    </div>
                    <div className="filter__col">
                        <select value={filter.grade} className="filter__select" id="grade" name="grade" onChange={this.changeSelect.bind(this, "grade")}>
                            <option value="">Все классы</option>
                            {grade.map((val, index)=> <option key={index} value={val}>{val}</option>)}
                        </select>
                    </div>
                    <div className="filter__col">
                        <input className="filter__search" type="text" placeholder={filter.title || "Поиск"} id="search" name="search" ref={(input) => { this.searchInput = input }}/>
                        <button className="filter__search-btn" type="submit" title="Найти" onClick={this.search.bind(this)}></button>
                    </div>
                </div>
            </form>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    filter: getFilter(state, ownProps)
})


const mapDispatchToProps = {
    setFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)