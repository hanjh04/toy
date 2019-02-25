# 소스 구조
## 구조
### 웹 페이지
.\
├── App.vue\
├── api\
│   └── index.js\
...\
├── components\
...\
│   ├── Form\
│   │   └── `BookInfoForm.vue`\
│   ├── Tables\
│   │   ├── `BookListTable.vue`\
│   │   ├── NavTabsTable.vue\
│   │   ├── OrderedTable.vue\
│   │   └── SimpleTable.vue\
│   └── index.js\
...\
├── pages\
│   ├── `Book.vue`\
...\
│   └── index.js\
├── routes\
│   └── `routes.js`\
└── store\
    ├── `actions.js`\
    ├── `getters.js`\
    ├── `index.js`\
    ├── `mutations.js`\
    └── `state.js`
### Firebase 설정
DB\
├── `dbConfig.js`\
└── `dbInit.js`

<Comment></Comment>