# Angular 개념
## 모듈
* @NgModule 데코레이터가 붙는 클래스로 선언 됨.
* declarations - 뷰 클랫 정의.(컴포넌트, 디렉티브, 파이프 세가지의 뷰 클ㄹ랫가 있다.)
* export : 다른 모듈이나 컴포넌트 템플릿에서 접근할 수 있도록 이부로 공개 선언
* import : 다른 컴포넌트의 템플릿 사용(imort로 선언된 것 중) this 사용 가능(?)
* providers : 전역에서 사용되는 서비스를 해당 객체에서 사용할 수 있도록 생성, 접근. 앱의 모든 곳에서 접근 가능.
* bootstrap - 루트 컴포넌트라고 하는 메인 애플리케이션의 뷰를 선언. Root 모듈에만 존재
* 앵귤러 안에서 관련된 요소를 하나로 묶어애플리케이션을 구성하는 단위.
* 모든 앵귤러 애플리케이션은 반드시 하나의 모듈을 가짐
    * Root Module이고, App Module이라 부름.
* 앵귤러는 모듀란위로 애플리케이션의 코드를 인식.

## 컴포넌트
* 화면의 '뷰' 부분을 제어(ex, 네비게이션 링크를 제공하는 App Root)
* 클래스 안에 컴포넌트의 어플리케이션 로직 정의(어플리케이션 : 뷰에서 동작해야 하는 기능 정의)
* 사용자가 어플리케이션을 사용하는 과정을 따라 가면서 컴포넌트 생성, 갱신, 종료. 이때 생명주기 hook 함수를 이용(ex, ngOnInit()) 특정 시점에 원하는 동작하도록.

## Template
* 컴포넌트의 뷰는 템플릿으로 제어.
* Anglar가 Component를 html 로 어떻게 랜더링 할지 모습을 정의
* Angular Template 문법학습 정의(문법, 커스텀 엘리먼트)

## MetaData
* 클래스가 어떻게 동작해야 하는지에 대한 정보 지정.
* @Component라는 데코레이터를 사용하여 메타데이터를 덧붙일 수 있다.
* 구성요소
    * moduleId
    * Selector
    * templateURI
    * providers

## 서비스
* 뷰와 관련 없이 애플리케이션 전역에서 사용할 수 잇는 순수한 비즈니스 로직이나 값을 다루는 클래스.
    * ex. 로깅.
## RxJS
>* Observable
>* Observer
>* Subscription
### Observable
* 관찰할 수 있는 대상
* OBservable 안에서 발생하는 데이터.
* 숫자, 문자열, 배열과 같은 일반적인 값 뿐만 아니라, Ajax통신 결과, 웹소켓, 사용자 이벤트 등 데이터를 만들어내는 것은 무엇이든 Obsesrvable로 만들 수 있다.
* 데이터에 관심이 있는 주체에게 데이터를 전달하기 위함.
* Subscribe 메서드 가지고 있음. Observer 등록하는 역할.
    * Observer는 Observable이 전달하는 데이터를 전달받을 수 있음.
* 이벤트도 데이터로서 스트림화가 가능함.
### Observer
* Observable에서 발생하는 데이터를 관찰하는 주체
* Observer는 next, error, complete라는 세 종류의 메서드를 가진 객체.
* Observer가 데이터 구독을 시작할 때, OBservable은 Subscriptipon을 반환함.
    * Observer에서 더 이상 Observable의 데이터를 구독하고 싶지 않을 때, 구독을 취소하는 기능을 하는객체.
### subscriptiopn
* Observable은 subscribe매서드로 구독할 수 있으며
* subscribe 메서드는 subscription을 return 한다.


### Subject
* Subject는 observer이면서 observable이기 때문에 subscribe, next, complete을 직접할 수 있다.
* reactive 코드와 그렇지 않은 코드를 연결할 때 사용될 수 있다고 하는데, 무슨 말인지 아직 정확히 이해를 못했다.
* Subject를 통해 subject를 구독하는 모든 observer들에게 알려줄 수 있다. (notify 역할)



### RxJS Operator
> 로직 수행 후 다시 변환된 Observable을 반환함.
* fromEvent
    * 엘리먼트로부터 이벤트를 관찰하는 역할
* pluck
    * 엘리먼트로부터 value값을 가져오는 역할
* filter
    * Observable을 걸러네는 역할
* debounce
    * 실행되는 여유시간을 줌.
    * Request가 단시간에 여러 번 갈 수 있기 때문에
* distinctUtilChanged
    * 중복된 이벤트 제거
* flatMapLatest
    * 이전에 ㅁㄴ들어진 Observabl을 무시하고 가장 마지막의 Observable을 새로운 Observable로 만등러주는 Operator


### 예를 들어
```js
const subscribeFn = function(observer){
    observer.next('OBSERVE~');
};

const myFirstObservable = new Rx.Observable(subscribeFn);

myFirstObservable.subscribe((d)=>console.log(d));

// 출력 : OBSERVE~ 
```

### 다시 정리
* Observable은 Observerㄹㄹ subscribe 메서드로 전달받을 수 있음.
* Observer는 next, error, complete메서드를 포함한 객체.
* Observable은 데이터 소스를 Observer와 연결하여 로직에 따라 자신에게 등록된 next, error, complete 메서드를 호출.

### 예제 2
```js
const number$ = Rx.Observable.create((observer) => {
    let myCounter = 0;
    const producerFn = () => observer.next(myCounter++);

    const intervalId = setInterval(producerFn, 1000);

    const finishFn = () => {
        clearInterval(intervalId);
        observer.complete();
    }
    setTimeout(finishFn, 10*1000);

    return finishFn;
});

const subscription = number$.subscribe((n) => console.log(`streaming... ${n}`));

setTimeout(() => subscription.unsubscribe(), 5*1000);
```

* 설명
    * 1번줄 : Observable.create 메서드 사용하여 Observable 생성.
        * create 메서드는 내부적으로 new Observable(subscriber)를 호출.
    * 
### naming 규칙
* 이름 뒤에 붙은 `$`
    * Observable이 연속적으로 발생 가능한 스트림일 경우에 변수 후위에 붙임.

### promise, ajax와 다른 점?
* RxJS의 풍부한 연산자~
    * map, filter, reduce


## directive
* (click)
* [disabled]

## 생명주기
* component 생명주기

## Angular에서 service란?

## 비동기 파이프
* https://ngdocsdev.firebaseapp.com/docs/ts/latest/tutorial/toh-pt3.html
>keywords : pure pipe, impure pipe, pipe 선언 방식 확인

## HttpClient
* https://angular.io/guide/http
* Observable하다!

## Angular `animations` 속성
* https://angular.io/guide/animations