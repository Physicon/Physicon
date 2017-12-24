import React, {Component} from 'react'
import {connect} from 'react-redux'

import {
    fetchCoursesList
} from '../../actions'

import {
    getList,
    getFilter,
    getFilterList
} from '../../selectors'

import Course from '../Course'

class Courseslist extends Component {
    constructor (props) {
        super(props)
    }

    componentDidMount () {
        this.props.fetchCoursesList()
    }

    render() {
        const list = this.props.list.length && getFilterList(this.props.list, this.props.filter)

        return (
            <div className="courseslist__wrapper">
                {
                    (!!this.props.filter.title || !!this.props.filter.subj || !!this.props.filter.genre || !!this.props.filter.grade) &&
                    <h3 className="courseslist__desc">Результаты поиска:</h3>
                }
                <div className="courseslist">
                    {
                        !!list.length && list.map((item, index) => <Course key={index} item={item}/>)
                    }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    list: getList(state, ownProps),
    filter: getFilter(state, ownProps)
})

const mapDispatchToProps = {
    fetchCoursesList
}

export default connect(mapStateToProps, mapDispatchToProps)(Courseslist)