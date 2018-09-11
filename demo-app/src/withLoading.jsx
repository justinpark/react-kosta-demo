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
          <div class="progress">
            <div class="indeterminate"></div>
          </div>
        )
        : (
          <div class="preloader-wrapper active">
            <div class="spinner-layer spinner-red-only">
              <div class="circle-clipper left">
                <div class="circle"></div>
              </div><div class="gap-patch">
                <div class="circle"></div>
              </div><div class="circle-clipper right">
                <div class="circle"></div>
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
