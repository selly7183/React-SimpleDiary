# Simple Diary Editior

1. useState로 input과 textarea, emotion, date를 같은 state를 가질 수 있게 함.
2. onChange 이벤트도 동일하게 같은 handle event를 갖게 함.
3. useRef를 이용하여 content의 length가 1보다 작고, 5보다 작을때 버튼을 눌렀을때 focus가 일어나도록 함.
4. DiaryList에 map을 이용해서 dummyList를 prop으로 전달해서 하나하나씩 화면에 보이게 불러옴.
5. 새로운 데이터를 추가하면 DiaryEditor에 입력, DiaryList에 입력된게 나타나야하기 때문에 App.js에 공통 state를 만듬.
6. DiaryEditor에 onCreate 함수를 prop으로 전달해서 내용을 입력하면 추가하기 기능을 만듬.
7. DiaryItem에 삭제하기 버튼을 만들고, App.js에 filter을 통해 id값을 이용해서 onDelete함수를 만들어서 DiaryItem에 prop으로 전달함.
8. DiaryItem에 수정하기 버튼을 만들고, App.js에 map을 이용해서 새로운 컨텐츠로 변경되었으면 변경하고 아니면 그대로 item을 보여줌. 
9. DiaryItem에 prop으로 전달함. 수정하기 버튼을 누르면 toggle로 수정취소, 수정완료 버튼이 보이게 만듬.
10. 수정하기 버튼에도 focus 이벤트를 줌.
11. useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 초기값으로 이용.
12. useMemo를 이용해서 최적화. (data.length가 바뀔때만 console.log가 호출되도록)
13. useCallback, useReducer, context 사용해서 성능 최적화.

** 입력한 시간 
const create_date = new Date().getTime()을 사용해서 그걸 다시 {new Date(create_date).toLocaleString()} 로 하면 2023. 1. 6. 오후 4:42:36 이렇게 뜸!
