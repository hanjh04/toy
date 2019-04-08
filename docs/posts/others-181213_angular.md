# angular
>회사의 웹 서비스 2.0 버전에 angular 프레임워크를 도입하기로 했다.\
vuejs를 공부해왔던 입장에서 조금 아쉽긴 하지만\
공부해왔던것들이 angular를 공부하는데 조금 도움이 될 것 같다.

##공부
* @angular/core
* @angular/route
* @Injectable()
* @ngModule
* decorator
* observable
* angular-in-memory-web-api
* ~.api.service.ts 파일은 singleton으로 유지가 되는 것인가?

--------------
* observable
	* 옵저버블은 시간이 지남에 따라 여러값을 가질 수 있는 지연 콜렉션이다.
	1. observable은 lazy 하다
		* news letter로 생각할 수 있음. 각 구독자(subscriber)마다 새로운 news letter가 만들어진다.
		* 그 news letter는 구독자들에게만 보내지고 다른 사람에게는 보내지지 않는다.
	2. Observable은 시간이 지남에 따라 여러 값을 가질 수 있다.
		* 
	3. push / pull
	
	
	

## 소스 구조
* system-config.ts
	* header 포함되어있음.
	
	
	

* 
```
~~~abdc.html	
~~~abdc.scss
~~~abdc.spec.ts
~~~abdc.ts
```
일때, 
export ~~~abcd 했을 경오 export 한 몯ㄹ을 못찾으면서 나는 에러
ERROR in ./src/app/content/settings/settings-account-setting/settings-account-setting-permission/settings-account-settnig-permission.component.ts
Module not found: Error: Can't resolve './settings-account-setting-permission.component.html' in 'C:\Users\jangho.han\workspace2\ks2-gui-develop-2.0.0\src\app\content\settings\settings-account-setting\settings-account-setting-permission'
ERROR in ./src/app/content/settings/settings-account-setting/settings-account-setting-permission/settings-account-settnig-permission.component.ts
Module not found: Error: Can't resolve './settings-account-setting-permission.component.scss' in 'C:\Users\jangho.han\workspace2\ks2-gui-develop-2.0.0\src\app\content\settings\settings-account-setting\settings-account-setting-permission'