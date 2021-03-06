module.exports = {
    title: "Lingi-log",
    description: "Blog About Study",
    base: "/",
    // theme: "@vuepress/vue",
    themeConfig: {
        logo: "/thumbnail.png",
        footer: "jh",
        nav: [
            { "text": "블로그 개발기", "link": "/blog/", "position": "left", "external": false },
            { "text": "Posts", "link": "/posts/", "position": "left", "external": false },
            { "text": "Algorithm", "link": "/algorithm/", "position": "left", "external": false },
            { "text": "Linux", "link": "/linux/", "position": "left", "external": false },
            { "text": "DB", "link": "/db/", "position": "left", "external": false },
            { "text": "About", "link": "/about", "position": "right", "external": false }
        ],
        lastUpdated: 'Last Updated',
        // algolia: {
        //     apiKey: '7055df7452cbcc1e86f33eb175f3d949',
        //     appId: '376LIH16NX',
        //     indexName: 'getstarted_actors',
        //     algoliaOptions: {
        //         hitsPerPage: 10,
        //     }
        // },
        sidebar: {
            '/posts/': [{
                title: 'Others',
                collapsable: false,
                children: [
                    'others-180829_vscode_환경설정',
                    'others-180907_페이지_교체_알고리즘',
                    'others-180917_https에_대해',
                    'others-180917_tree의_순회_방법',
                    'others-180917_암호화',
                    'others-180918_yum',
                    'others-180919_tomcat의_동작_방식',
                    'others-181013_network',
                    'others-181013_암호화2',
                    'others-181024_study',
                    'others-181025_glibc_update',
                    'others-181025_query튜닝',
                    'others-181102_서버사이드랜더링and클라이언트사이드랜더링',
                    'others-181120_vue',
                    'others-181205_vue_dynamic_component',
                    'others-181205_공부_Keywords',
                    'others-181213_angular',
                    'others-181230_docker_mongodb',
                    'others-181230_macbook_환경설정',
                    'others-190226_design_pattern_strategy_pattern',
                    'others-angular_개념정리',
                    'others-docker_mongodb',
                    'others-update_alternatives_linux',
                    'others-환경설정',
                    'others-객체지향_5원칙',
                    //_others
                ]
            }],
            '/linux/': [{
                title: 'Linux 운영',
                collapsable: false,
                children: [
                    'linux-1_install_gcc_without_internet_connection',
                    'linux-2_OOM',
                    'linux-3_자주_쓰는_명령어',
                    'linux-4_so_파일_만들기',
                    //_linux운영
                ]
            }],
            '/algorithm/': [{
                title: 'Algorithm',
                collapsable: false,
                children: [
                    'algorithm-1_boj_1003',
                    'algorithm-2_boj_dp_1937',
                    'algorithm-3_kakao_2018_2_1',
                    'algorithm-index',
                    //_algorithm
                ]
            }],
            '/db/': [{
                title: 'DB',
                collapsable: false,
                children: [
                    //_db
                ]
            }],
            '/blog/': [{
                title: '블로그 개발기',
                collapsable: true,
                children: [
                    'blog-개발기',
                    //_blog
                ]
            }, {
                title: '책 관리 시스템',
                collapsable: false,
                children: [
                    'book-1_도서_관리_시스템',
                    'book-2_소스_구조',
                    'book-3_routing',
                    'book-4_vuex_상태관리',
                    'book-5_component_설명',
                    'book-6_기능_설명',
                    //_book
                ]
            }, {
                title: '서버 관리 시스템',
                collapsable: true,
                children: []
            }],
            // fallback
            '/': []
        }
    },
    head: [
        // ['link', { rel: "icon", href:  }]
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    },

};
