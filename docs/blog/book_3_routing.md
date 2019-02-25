# routing
## 소스
```js
const routes = [{
    ...
        {
            path: "book",
            name: "Book Management",
            component: Book,
            beforeEnter(routeTo, routeFrom, next) {
                store.dispatch('FETCH_BOOKLIST')
                    .then(() => next())
                    .catch(() => console.log('load booklist fail'))
            },
            children: [{
                path: '',
                name: 'bookList',
            }, {
                path: 'addBook',
                name: 'addBook'
            }, {
                path: ':idx',
                name: 'bookDetail',
                beforeEnter(to, from, next) {
                    store.dispatch('FETCH_BOOKDETAIL', to.params.idx.toString())
                        .then(() => next())
                        .catch(() => console.log('load book detail fail'));
                }
            }]
        },
        ...
    ]
}];
export default routes;
```
## 설명
* vue-router 사용
* 하위 url
    * Book Component에서 `created` 시점에 `this.$route.name` 값에 따라 다른 하위 컴포넌트를 보여준다.

    url|`this.$route.name`|설명
    -|-|-
    /book|bookList|저장된 책의 목록이 보여짐
    /addBook|addBook|책을 추가할 수 있는 form
    /:idx|bookDetail|책 정보 보여주는 form

<Comment></Comment>