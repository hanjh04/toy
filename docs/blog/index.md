# lingi-log

## About Lingi-log
* 개인 블로그(생각, 공부 정리용)

## 사용 기술
* vuepress

## 실행
```bash
vue create lingi-log

# install vuepress
npm add -D vuepress

# run
# vuepress dev
./node_modules/vuepress/bin/vuepress.js dev

# build
# vuepress build
./node_modules/vuepress/bin/vuepress.js build
```

### using components in vuepress
```md
<MyComponent></MyComponent>
```

### Deploy
* 작성

## Todos
idx|Todo|설명|add date|complete date
-|-|-|:-:|:-:
1|navigation|navigation bar에 항목 추가|01.03|01.06
2|side bar|side bar 활용방법 찾고 적용|01.03|01.06
3|theme 적용|footer 적용|01.05|
4|~~외부 plugin 적용~~|~~algolia~~|~~01.06~~|vuepress 내장 검색 기능 사용
5|외부 plugin 적용|disqus|01.06|01.13
6|메인 화면 꾸미기|메인 화면|01.08|01.13
7|build & deploy 스크립트 작성|01.08|
8|vuepress 파일들 디렉터리 이동||01.08|01.13
9|스크립트 작성|자동으로 nav bar에 목록 추가 해주는 스크립트 작성|01.13|
10|키워드 검색 기능|post에 작성해놓은 keyword들을 검색해주는 기능<br>통계내주는 기능|01.13|

---
* Blog URL
    * https://hanjh04.github.io

* vue component 사용하기 
    * https://vuepress.vuejs.org/guide/using-vue.html#browser-api-access-restrictions

* Sidebar Nav 자동으로 추가하기
    * https://stacoverflow.com/questions/53262091/automatically add-new-posts-to-the-sidebar

---
<Comment></Comment>