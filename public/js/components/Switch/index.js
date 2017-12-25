import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    toggleSwitch
} from '../../actions'

import  {
    getCurrency
} from '../../selectors'

class Switch extends Component {
    constructor (props) {
        super(props)
    }

    render() {

        return (
            <div className="switch__wrapper">
                <label className={`switch__desc ${!this.props.currency.rub && `switch__desc--active`}`} htmlFor="switcher">Бонусы</label>
                <label className="switch">
                    <input checked={this.props.currency.rub} id="switcher" className="switch__input" type="checkbox" onChange={({target}) => { this.props.toggleSwitch(target.checked) }}/>
                    <span className="switch__slider switch__slider--round"></span>
                </label>
                <label className={`switch__desc ${this.props.currency.rub && `switch__desc--active`}`} htmlFor="switcher">Рубли</label>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    currency: getCurrency(state, ownProps)
})

const mapDispatchToProps = {
    toggleSwitch
}

export default connect(mapStateToProps, mapDispatchToProps)(Switch)