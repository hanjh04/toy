# 오픈채팅방
> 카카오 2018 하반기 공채 1번문제\
> https://programmers.co.kr/learn/courses/30/lessons/42888

## 요약
카톡방에 사용자들이 \
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`들어가고`,\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`나올 때` \
마다 로그가 남는다.\
이 문제에서 요구하는 답은 위에서 남은 로그를 출력하는 것이다.\
이대로 문제가 끝나면! 너무 시시하고...ㅎㅎ 몇가지 조건이 있다.
### 조건
* record는 다음과 같은 문자열이 담긴 배열이며, 길이는 1 이상 100,000 이하이다.
* 다음은 record에 담긴 문자열에 대한 설명이다.
    * 모든 유저는 [유저 아이디]로 구분한다.
    * [유저 아이디] 사용자가 [닉네임]으로 채팅방에 입장 - Enter [유저 아이디] [닉네임] (ex. Enter uid1234 Muzi)
    * [유저 아이디] 사용자가 채팅방에서 퇴장 - Leave [유저 아이디] (ex. Leave uid1234)
    * [유저 아이디] 사용자가 닉네임을 [닉네임]으로 변경 - Change [유저 아이디] [닉네임] (ex. Change * uid1234 Muzi)
    * 첫 단어는 Enter, Leave, Change 중 하나이다.
    * 각 단어는 공백으로 구분되어 있으며, 알파벳 대문자, 소문자, 숫자로만 이루어져있다.
    * 유저 아이디와 닉네임은 알파벳 대문자, 소문자를 구별한다.
    * 유저 아이디와 닉네임의 길이는 1 이상 10 이하이다.
    * 채팅방에서 나간 유저가 닉네임을 변경하는 등 잘못 된 입력은 주어지지 않는다.\

그리고!
* 닉네임 변경이 가능하다.
    * 퇴장 후 닉네임 변경하여 재입장
    * 카톡방 안에서 닉네임 변경(`Change`일 경우)


## 문제 풀이 전략
* input array를 2번 순회해야 할 것 같다.
    * 첫번째로
        * input array에서 유저의행동에 따른 nickname을 기록해놓는다.
            * nickname의 변경을 추적하기 위해 Map 자료구조를 생각하였다.
        * `Enter`, `Leave` 개수를 센다.
            * return 해줄 answer array를 생성하기 위해.
    * 두 번째로    
        * `Enter`, `Leave`에 따라 알맞은 로그를 answer array에 기록해준다.
* answer array를 리턴해준다.

## 코드
```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public String[] solution(String[] record) {
        String[] answer = {};
        Map<String, String> nickNameMap = new HashMap<String, String>();
        int logCnt = record.length;

        for(String str : record){
            String[]tmp = str.split(" ");
            if("Enter".equals(tmp[0]) || "Change".equals(tmp[0])){
                // enter or change
                nickNameMap.put(tmp[1], tmp[2]);
                if("Change".equals(tmp[0])) logCnt--;
            }
        }

        answer = new String[logCnt];
        int idx = 0;
        for(String str : record){
            String[]tmp = str.split(" ");
            String nickName = nickNameMap.get(tmp[1]);

            if("Enter".equals(tmp[0])){
                answer[idx++] = nickName+"님이 들어왔습니다.";
            }else if("Leave".equals(tmp[0])){
                answer[idx++] = nickName+"님이 나갔습니다.";
            }
        }

        return answer;
    }
}
```
---
## 리뷰
문제를 풀고 나서 보니 첫 번째 for문에서 split한 결과를 저장해 놓는다면, 듀 번째 for문에서 한번 더 split 할 필요는 없을 것 같다.

<comment/>
