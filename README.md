# Memento-with vanilla JavaScript

https://javascriptbiggosoo.github.io/memento-vanilla/

## 프로젝트 소개

브라우저 시작 페이지에서 다양한 기능을 사용할 수 있도록 해주는 [momentum](https://momentumdash.com/)을 바닐라 자바스크립트만 이용해 클론코딩합니다.

이 프로젝트의 목표는 React와 같은 라이브러리나 프레임워크에서 자동으로 처리되는 기능들을 객체지향 프로그래밍(OOP) 원칙을 사용하여 수동으로 구현하는 것입니다.
이는 JavaScript의 능력에 대한 깊은 이해를 요구합니다.

[memento-react](https://github.com/javascriptbiggosoo/memento-react) 에서 리액트 + TS로 개발한 프로젝트 또한 보실 수 있습니다.

## 주요 로직

### ES6 클래스를 이용한 컴포넌트 생성

이 프로젝트에서는 ES6 클래스를 이용하여 컴포넌트를 생성하였습니다. 이를 통해 코드의 재사용성을 높이고, 구조를 명확하게 하였습니다.

### 상태 변경에 따른 하위 컴포넌트 리렌더링

상태가 변경될 때마다 하위 컴포넌트들이 리렌더링 되도록 setState 방식을 사용하였습니다. 이를 통해 상태의 변화를 실시간으로 반영하여 사용자에게 보여줄 수 있습니다.

### openweathermap API 데이터 호출

async/await와 fetch를 사용하여 openweathermap API에서 데이터를 호출하였습니다. 이를 통해 실시간 날씨 정보를 사용자에게 제공합니다.

### ToDoList 컴포넌트 최적화

event delegation 기법을 이용하여 ToDoList 컴포넌트를 최적화하였습니다. 이를 통해 이벤트 리스너의 수를 줄이고, 메모리 사용량을 최소화하였습니다.

## 기능

### 좌측 상단

- 검색어 입력시 구글 포털 검색창을 보여줍니다.

### 우측 상단

- 사용자가 위치서비스를 허용하면 그 위치의 날씨를 알려줍니다.
  오픈 API인 https://openweathermap.org/ 에서 정보를 받아옵니다.

### 중앙

- 현재 시간을 띄워줍니다.
- 사용자의 이름을 입력받아 인삿말을 띄워줍니다.
  입력시 이름이 로컬스토리지로 저장되며 이름 변경 버튼이 생성됩니다.

### 우측 하단

- 할 일을 입력받아 로컬스토리지에 저장합니다.
  클릭시 완료여부를 토글할 수 있습니다.

<img src="https://user-images.githubusercontent.com/28939278/215250935-17c1774c-8d08-47e8-a586-7aaadacd57a3.gif">
