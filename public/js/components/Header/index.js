import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {connect} from 'react-redux'

import {
    getBasket
} from '../../selectors'

class Header extends Component {
    constructor (props) {
        super(props)

        this.state = {
            menuOpen: false
        }
    }

    toggleMenu () {
        this.setState((prevState) => {
            return {
                menuOpen: !prevState.menuOpen
            }
        })
    }

    render() {
        return (
            <div className="header">
                <div className="header__inner">
                    <div className="header__left">
                        <a href="/" className="header__logo">
                            <h2 className="header__title">Облако знаний</h2>
                        </a>
                        <div className="header__menu" onClick={this.toggleMenu.bind(this)}>
                            <div className="header__menu-btn" >
                            </div>
                            <div className={`header__menu-list ${this.state.menuOpen && 'header__menu-list--open'}`}>
                                <div className="header__list-item">О проекте</div>
                                <div className="header__list-item">Новости</div>
                                <div className="header__list-item">Приобрести</div>
                                <div className="header__list-item">Скачать</div>
                                <div className="header__list-item">Поддержка</div>
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
                            {!!this.props.basket.length &&
                            <ReactCSSTransitionGroup
                                transitionName="header__basket-count"
                                transitionEnterTimeout={100}
                                transitionLeaveTimeout={1}>
                                <div key={this.props.basket.length} className={`header__basket-count`}>{this.props.basket.length}</div>
                            </ReactCSSTransitionGroup>
                            }
                        </div>
                    </div>
                </div>
                {!!this.props.basket.length &&
                <ReactCSSTransitionGroup
                    transitionName="header__course-added"
                    transitionEnterTimeout={2000}
                    transitionLeaveTimeout={1}>
                    <div key={this.props.basket.length} className={`header__course-added`}>
                        <div className={`header__course-added-inner`}>Курс успешно добавлен в корзину.</div>
                    </div>
                </ReactCSSTransitionGroup>
                }
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    basket: getBasket(state, ownProps)
})


export default connect(mapStateToProps, null)(Header)