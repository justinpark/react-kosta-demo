import React from 'react';

// TODO: withError HoC만들기
// hasError, errorMessage
// hasError true => errorMessage 페인트
// 만약 errorMessage가 없으면 defaultMessage를 뿌려주기 (defaultProps)
// 컴포넌트 원래대로 그리고 대신 그 밑에 에러메세지를 찍어주기

export default (isText) => WrappedComponent => {
  // new SFC component
  return ({ isLoading, ...props }) => {
    if (isLoading) {
      return isText
        ? (
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        )
        : (
          <div className="preloader-wrapper active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
        );
    }
    return (
      <WrappedComponent {...props} />
    );
  }
};
