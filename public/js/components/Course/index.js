import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    buyCourse
} from '../../actions'


class Course extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const {item} = this.props

        return (
            <div className="course">
                <div className="course__pic">
                    <img src={item.urlImg} className="course__img" alt="Алгебра" />
                    {item.status === "demo" &&
                        <div className="course__try">
                            <a href="#" className="course__try-btn">Попробовать</a>
                        </div>
                    }
                </div>
                <div className="course__info">
                    <div className="course__row course__row--title">{item.title}</div>
                    <div className="course__row course__row--grade">{item.grade.includes(";") ? (Math.min.apply(null, item.grade.split(";")) + `-` + Math.max.apply(null, item.grade.split(";")) + ` классы`) : item.grade + ` класс`}</div>
                    <div className="course__row course__row--genre">{item.genre}</div>

                    <a href="" className="course__meta">Подробнее</a>
                    <div className="course__controls" onClick={this.props.buyCourse.bind(this, item)}>
                        Купить за {item.price} руб.
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buyCourse
}

export default connect(null, mapDispatchToProps)(Course)