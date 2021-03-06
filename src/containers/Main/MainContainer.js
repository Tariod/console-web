import React, {Component} from 'react';
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import './MainContainer.css';

export default class ContainerComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='main-container'>
        <LeftSection />
        <RightSection />
      </div>
    );
  }
}

