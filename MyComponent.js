import PropTypes from 'prop-types';
import React, { Component } from 'react';
 
class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
      };
      static propTypes = {
        name: PropTypes.string,
        favoriteNumber: PropTypes.number.isRequired
      };

    render() {
      const { name, favoriteNumber, children } = this.props; // 비구조화 할당
      return (
        <div>
          안녕하세요, 제 이름은 {name}입니다. <br />
          children 값은 {children}
          입니다.
          <br />
          제가 좋아하는 숫자는 {favoriteNumber}입니다.
        </div>
      );
    }
  }

// const MyComponent = ({name, name2, favoriteNumber, children}) => {
//    // const {name, name2, children} = props;
//   return (
//     <div>
//       안녕하세요, 제 이름은 {name}, {name2}입니다. <br />
//       children 값은 {children}
//       입니다.<br />
//       제가 좋아하는 숫자는 {favoriteNumber}입니다.
//     </div>
//   );
// };
 
// MyComponent.defaultProps = {
//   name: '홍길동',
//   name2: 'honggildong'
// };

// MyComponent.propTypes = {
//     name: PropTypes.string,
//     name2: PropTypes.string,
//     favoriteNumber: PropTypes.number.isRequired
//   };
 
export default MyComponent;