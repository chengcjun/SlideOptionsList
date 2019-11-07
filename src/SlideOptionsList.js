import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';

export default class SlideOptionsList extends Component {
  constructor(props) {
    super(props)
    this.switchExpend = this.switchExpend.bind(this)
  }

  // static propTypes = {
  //   top: PropTypes.string,
  //   right: PropTypes.string,
  //   children: PropTypes.array
  // }

  switchExpend(item, status) {
    this.setState({
      current: item,
      expend: status || !this.state.expend
    })
  }

  render() {
    const { children, spaceTop, top, right } = this.props
    return (
      <div style={{ marginTop: top, top: spaceTop, right: right }} className={`options-list__wrap`}>
        <nav className='nav'>
          <input type='checkbox' className='nav__cb' id='menu-cb' />
          <div className='nav__content'>
            <ul className='nav__items'>
              {children.map(item => (
                <li className='nav__item' onClick={item.callback} key={item.title}>
                  <label className='nav__item-label' htmlFor='menu-cb'>
                    <span className='nav__item-text' title={item.title}>
                      {item.title}
                    </span>
                  </label>
                </li>))}
            </ul>
          </div>
          <label className='nav__btn' htmlFor='menu-cb' />
        </nav>
      </div >
    )
  }
}
