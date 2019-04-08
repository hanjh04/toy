# vuex
> vuex의 기본적 개념은 [여기](https://vuex.vuejs.org/kr/)를 참조.
## states
> 도서 관리 시스템에서 관리하고 싶은 상태는 `책 목록`과 `책의 상세 내용` 이다.
```js
export default {
    bookList: [],
    bookDetail: {},
}
```
* book list를 array형
* book detail을 object형
으로 선언하였다.
* 개발 과정 중 책의 이미지를 저장해야할 필요가 생겨 image를 추가하였다.
```js
export default {
    bookList: [],
    bookDetail: {},
    image: new Blob()
}
```
## action
* FETCH_BOOKLIST(context)
    * 책 리스를 불러오는 기능
    * 받아온 후 store에 저장
* FETCH_BOOKDETAIL(context, idx)
    * idx를 인자로 받아 idx에 해당하는 책 정보를 받아온다.
* FETCH_IMAGE(context, imgUrl)
    * image url을 전달받아 서버에 이미지 요청을 함.
* SAVE_BOOKINFO(context, payload)
    * 책 정보를 전달
* SAVE_BOOKIMAGE(context, payload)
    * 책 이미지 전달
* DELETE_BOOKINFO(context, payload) 
    * 책 정보 삭제
## mutations
* SET_BOOKLIST(state, bookList)
    * `FETCH_BOOKLIST`로 책 정보 리스트를 받은 후 store에 저장하는 역할
* SET_BOOKDETAIL(state, bookDetail)
    * `FETCH_BOOKDETAIL`로 책 상세 정보를 받아온 후 store에 저장하는 역할
* SET_IMAGE(state, image)
    * `FETCH_IMAGE`로 책 이미지를 받아온후 store에 저장하는 역할
* INIT_BOOKINFO(state)
    * book detail 페이지와 add book 페이지(같은 component 공유) 간 이동 시 데이터 초기화 역할
* DELETE_BOOKINFO(state, idx)
    * store에 저장된 `bookList에서` `DELETE_BOOKINFO`로 삭제한 항목 제거
* REFRESH_BOOKINFO(state, bookDetail)
    * add book 했을 때 store의 `bookList`에 새 항목 추가.
## getters
* fetchedBookList(state)
    * component에서 store에 저장된 데이터 불러올 때 사용.
* fetchedBookDetail(state)
    * component에서 store에 저장된 데이터 불러올 때 사용.
* fetchedImage(state)
    * component에서 store에 저장된 데이터 불러올 때 사용.

# DB
> firebse 사용. db 데이터 불러오기 위해 백엔드를 새로 짤 필요 없이 firebase에서 제공하는 api를 이용하면 된다.\
DB\
├── `dbConfig.js`\
└── `dbInit.js`
