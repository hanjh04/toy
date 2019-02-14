# Add Footer 
## 생성 순서
* `./vuepress/theme/` 경로에 `Layout.vue` 파일 생성
* 기본적인 template 생성
    ```
    <template>
        <div>
            <header class="hero is-primary">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title">{{ $site.title }}</h1>
                    </div>
                </div>
            </header>
            <section class="section">
                <div class="content container">
                    <h1>{{ $page.frontmatter.title }}</h1>
                    <Content />
                </div>
            </section>
        </div>
    </template>
    <script>
    export default {};
    </script>
    ```
    * 확인사항
        * `$site` 변수
        * `$page` 변수
        * `<Content/>` 태그
