# Component & component 별 기능.
## 사용 컴포넌트
* Book.vue
* BookListTable.vue
* BookInfoForm.vue
## 컴포넌트 별 설명
### Book.vue
* 가장 상위 Component
* `beforeEnter`에서 booklist를 가져온다.
* bookList를 BookListTable 컴포넌트에 props로 전달해준다.
* `created`일 때, `watch`에서 `this.$route.name` 에 따라 적절한 자식 component를 렌더링해준다.
#### 신경써야 했던 부분들

### BookListTable.vue
* 부모 컴포넌트에서 받은 bookList를 테이블로 뿌려준다.
* search 기능
* detail view(테이블의 각 행 클릭)
    * `/book/:idx`로 라우팅
* add(버튼 클릭)
    * `/book/addBook`로 라우팅
* delete(버튼 클릭)
    * 체크 된 항목 삭제
#### 신경써야 했던 부분들
* check box 컨트롤
### BookInfoForm.vue
* add 화면 detail 화면에서 사용됨.
## add 화면
* `BookListTable` 에서 add 버튼 클릭으로 접근.
* 
## detail 화면
#### 신경써야 했던 부분들
* 데이터 초기화
    * 앞서 Book 컴포넌트의 경우는 상관 없었지만, BookInfoForm 컴포넌트의 경우 두 가지의 용도로 사용되기 때문에, 처음 display 될 때 form 에 뿌려 줄 bookInfo object를 적절한 데이터로 초기화 해주는 것이 중요했다.
    * 이에 setBookInfo라는 메서드를 만들고, `created`될 때 `fetchedBookInfo or empty object`, `cancel`버튼 누를 때 `fetchedBookInfo`로 셋팅해준다.
* component 간 화면 전환
    * `watch`로 router를 보고 있으며, 변화가 감지되면 toggle메소드를 호출해 주고, `$.router.name` 에 따라 작동을 하게 됨.
    * detail => add
        * 사실 add 기능이 아닌 edit의 기능을 하게 됨.
        * detail에서 보여줬던 책의 내용들이 그대로 보여져야 함.
            * disabled 어트리뷰트 삭제해 줌.
    * add => detail
        * detail 화면으로 돌아갈 때
            * disabled 어트리뷰트 붙여 줌.
* image 로딩 시간
    * 이미지의 로딩은 시간이 많이 걸린다.
    * 이미지 로딩이 완료된 후 화면이 뜬다면 사용성의 측면에서 답답할 수 있기 때문에
    * 다른 정보들을 모두 화면에 표시 후 이미지를 따로 호출
    * watch에 등록 후, 로딩 완료 되면 화면에 표시해 준다.
    ```js
    watch:{
        fetchedImage:function() {
            if(this.fetchedImage.size === 0) return;
            this.bookImageBlob = this.fetchedImage;
            this.displayImage(this.bookImageBlob);
        }
    }
    ```

<Comment></Comment>