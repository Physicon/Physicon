import React, {Component} from 'react'

class Header extends Component {
    constructor (props) {
        super(props)
    }

    render() {
        return (
            <div className="header">
                <div className="header__left">
                    <a href="/" className="header__logo">
                        <h2 className="header__title">Облако знаний</h2>
                    </a>
                    <div className="header__menu">
                        <div className="header__menu-btn">
                        </div>
                    </div>
                </div>
                <div className="header__right">
                    <div className="header__buttons">
                        <div className="header__btn header__btn--prim">Курсы</div>
                        <div className="header__btn header__btn--default">Регистрация</div>
                        <div className="header__btn header__btn--prim">Вход</div>
                    </div>
                    <div className="header__basket">
                        <div className="header__basket-icon"></div>
                        <div className="header__basket-count"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header