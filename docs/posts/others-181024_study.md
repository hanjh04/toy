# Questions
## Mybatis
* preparedstatements?
    ```sql
    -- 작성된 매퍼 구문(id = admin)
    SELECT COUNT(*) FROM USER WHERE ID = #{id}
    -- dbms에서 받는 쿼리
    SELECT COUNT(*) FROM USER WHERE ID = ?
    -- 실제 수행 쿼리
    SELECT COUNT(*) FROM USER WHERE ID = 'admin'
    ```
* statement
    * statement는 단순히 문자열이 치환이 되기 때문에 파라미터로 사용하기 위해선 홑따움표를 적어줘야 한다.
    * sql injection이 될 수 있다.(password 체크하는 부분 주석처리될 수도 있음.)
    ```sql
    -- 작성된 매퍼 구문(id = admin'--, pwd = 1234)
    SELECT COUNT(*) FROM USER WHERE ID = '${id}' AND PASSWORD = '${password}'
    -- dbms에서 받는 쿼리
    SELECT COUNT(*) FROM USER WHERE ID = 'admin'-- 'AND PASSWORD = '1234'
    -- 실제 수행 쿼리
    SELECT COUNT(*) FROM USER WHERE ID = 'admin'        
    ```
    * 컬럼명 바인딩할 때 사용.
* 설정

-------
## tcp 통신에서의 옵션
### keep alive
* Http에서
    * Http는 특성상 커넥션을 유지하지 않는다. => keep alive를 설정하면 유지하게 됨.
    * 서버는 한번에 연결을 맺을 수 있는 소켓을 생성하는 데 한계가 있다. 따라서 연결을 오래 유지하면 다른 사람들이 연결을 못하게 되는데, 사람들이 적게 접속한다면, 소수의 사람이 빠르게 인터넷을 사용할 수 있다.
    * Keep Alive란 연결된 socket에 IN/OUT의 access가 마지막으로 종료된 시점부터 정의된 시간까지 access가 없더라도 대기하는 구조입니다.
    즉 정의된 시간내에 access가 이루어진다면 계속 연결된 상태를 유지할 수 있다.
* tcp에서
    * tcp_keepalive_interval 시간 내에 연결이 유휴상태가 되었을 때 keepalive 탐색패킷(payload 없는)을 보냄.
    * 패킷에 반응이 없으면 접속을 끊는다.
    * 주로 종단시스템중 하나가 다운될 때 발생할 수 있는 한쪽만 열린 연결 상태를 정리하는 것.
### time wait
-------
## Design Pattern
### singleton
* 인스턴스가 두 개 이상 만들어지면 프로그램이 이상하게 돌아가는 경우..
    * 예를 들어 스레드 풀, 캐시, 대화상자, 사용자설정, 레지스트리 설정 처리 객체, 로그 기록용 객체, 프린터나 그래픽카드 같은 디바이스를 위한 디바이스 드라이버.
### template method
* 메소드에서 알고리즘의 골격을 정의한다. 알고리즘의 여러 단계 중 일부는 서브클래스에서 구현할 수 있다. 템플릿 메소드를 이용하면 알고리즘의구조는 그대로 유지하면서 서브클래스에서 특정 단계를 재정의할 수 있다.
* java에서 Sort Comparable 인터페이스
    * compareTo 메서드 하나만 있음.
    * 서브클래스를 만드는 것이 아니라 compareTo 메서드를 구현해주면 sort를 사용할 수 있다.

-------
## 객체지향 5원칙
* 단일 책임의 원칙(`S`ingle Responsibility Principle)
* 개방폐쇄의 원칙(`O`pen Close Principle)
* 리스코브 치환의 원칙(The `L`isKov Substitution Principle)
* 인터페이스 분리의 원칙(`I`nterface Segregation Principle)
* 의존성 역전의 원칙(`D`ependency Inversion Principle)
-------
## 기존 servlet - jsp 방식과 비교하여 vuejs의 장점?
* a
-------
## WEB 보안
### CSRF
* #### 정의?
    * 특정 웹사이트가 사용자의 웹 브라우저를 신용하는 상태를 노린 것.
    * 사용자가 웹사이트에 로그인한 상태에서 사이트간 요청 위조 공격 코드가 삽입된 페이지를 열면, 공격 대상이 되는 웹사이트는 위조된 공격 명령이 믿을 수 있는 사용자로부터 발송된 것으로 판단하게 되어 고역에 노출됨.
* #### 방어기법?
    >일반적으로 조회성 데이터(HTTP GET Method)는 대상에 두지 않는다.\
    >쓰기 / 변경이 가능한 POST, PATCH, DELETE Method에만 적용.
    * Referrer 검증
        * Backend 단에서 request의 referrer를 확인하여 domain이 일치하는 지 검증하는 방법.
        * 대부분의 CSRF 공격을 방어할 수 있지만 도메인 내의 페이지에 XSS 취약점이 있는 경우 CSRF 공격에 취약해질 수 있음. => 좀 더 세밀하게 페이지 단위까지 일치하는 지 검증을 하면 XSS 취약점에 의한 CSRF 공격을 방어할 수 있다.
    * Security Token 사용
        * Referrer 검증이 불가한 환경
        * 사용자의 세션에 임의의 난수값을 저장하고 사용자의 요청 마다 해당 난수값을 포함시켜 전송.
        * Back단에서 요청을 받을 때마다 세션에 저장된 토큰 값과 요청 파라미터에 전달되는 토큰 값이 일치하는 지 검증.
        * 같은 도메인 내에 XSS 취약점이 있다면 CSRF 공격에 취약해짐.
    * Double Submit Cookie 검증
        * 세션을 사용할 수 없는 환경에서 사용.
        * 웹 브라우저의 Same Origin 정책으로 인해 자바스크립트에서 타 도메인의 쿠키 값을 확인/ 수정하지 못한다는 것을 이용한 방어 기법.
        * 난수 생성하여 쿠키에 저장하고 동일한 난수 값을 요청 파라미터에도 저장하여 서버로 전송.
### XSS
* #### 정의?
    * Cross-site Scripting
    * 악의적인 사용자가 공격하려는 사이트에 스크립트를 넣는 기법을 말한다.
    * 공격에 성공하면 사이트에 접속한 사용자는 삽입된 코드르 실행하게 되며, 보통 의도치 않은 행동을 수행시키거나 쿠키나 세션 토큰 등의 민감한 정보를 탈취한다.
### SQL Injection
-------
## js 특징
* 1급객체
* 클로저 등
    * 메모리 이슈?
-------
## DB
* innerjoin, outerjoin
* index 사용했을 때, index 안타고 full scan 하는 경우?
-------
## jquery
* querySelector에서 `#`와 `.`의 차이
* `#` : id 찾을 때. 가장 첫번째 id값이 배열에 담겨 return 됨.
* `.` : class. 같은 이름을 가진 class가 모두 배열에 담겨 return 됨.
    

