import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    buyCourse
} from '../../actions'

import  {
    getCurrency
} from '../../selectors'

class Course extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        const {item, currency} = this.props
        console.log(item);
        return (
            <div className="course">
                <div className="course__pic">
                    <img src={`https://www.imumk.ru/covers/${item.courseId}.png`} className="course__img" alt={item.title} />
                    {item.status === "demo" &&
                        <div className="course__try">
                            <a href="" className="course__try-btn">Попробовать</a>
                        </div>
                    }
                </div>
                <div className="course__info">
                    <div className="course__row course__row--title">{item.title}</div>
                    <div className="course__row course__row--grade">{item.grade.includes(";") ? (Math.min.apply(null, item.grade.split(";")) + `-` + Math.max.apply(null, item.grade.split(";")) + ` классы`) : item.grade + ` класс`}</div>
                    <div className="course__row course__row--genre">{item.genre}</div>

                    <a href="" className="course__meta">Подробнее</a>
                    <div className="course__controls" onClick={this.props.buyCourse.bind(this, item)}>
                        Купить за {currency.rub ? item.price + ` руб.` : item.priceBonus + ` бон.`}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currency: getCurrency(state, ownProps)
})

const mapDispatchToProps = {
    buyCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)