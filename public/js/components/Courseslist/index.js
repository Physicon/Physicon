import React, {Component} from 'react'

class Courseslist extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="courseslist">
                <div className="course">
                    <div className="course__pic">
                        <img src="https://www.imumk.ru/covers/80.png" className="course__img" alt="Алгебра" />
                        <div className="course__try">
                            <a href="#" className="course__try-btn">Попробовать</a>
                        </div>
                    </div>
                    <div className="course__info">
                        <div className="course__row course__row--title">Алгебра</div>
                        <div className="course__row course__row--grade">7 класс</div>
                        <div className="course__row course__row--genre">Рабочая тетрадь</div>

                        <a href="/offer/103" className="course__meta">Подробнее</a>
                        <a href="#" className="course__controls">
                            Купить за 140 руб.
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Courseslist