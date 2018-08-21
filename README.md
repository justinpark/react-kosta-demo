# 글로벌 SW 아카데미 3강 - React 와 Front-end 기술

## 1일차
### 개발 환경 설정
* 노드 및 React 개발 환경 설정

1. create-react-app
```
npm init react-app [앱 이름]
cd create-react-app
npm start
```
데모용
```
cd create-react-app
npm install
npm start
```
### Javascript 기본 문법
* Ecma 5, 6 유용한 문법들
* React 기초 및 Lifecycle
* React 16+ 변화
* Styling in React: css vs styled-component

### 디자인 패턴
* 커링 (Currying)
* OOP vs Decorator-Pattern
* HoC (Higher-Order Component)
* withX HoC
* Recompose

## 2일차
### State Management
* Context
  * Provider 와 withContext HoC
  * render prop
  * React Context API (v16.3 이후)
* Redux
* Mobx
* Redux 깊게 사용하기
  * action, reducer, and createStore
  * middelwares
  * redux-thunk
  * redux-saga
  * redux-pack
  * redux-obserable
  * 비동기 제어
* 리액트 Type Safety
  * Flow
  * 타입스크립트로 React 작성하기

## 3일차
  * 실전 시세차트 웹앱 구축하기
    * package.json 구성하기
    * redux 구성하기
    * storybook 구성하기
    * 컨테이너 컴포넌트와 프리젠테이션 컴포넌트 개발하기
    * react-router 구성하기
    * 초기 로딩 최적화
      * 비동기 패키지 구성하기
      * SSR (Server-Side Rendering)
      * Code splitting
    * 설치 및 배포
