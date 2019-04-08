# tree의 순회 방법
* 전위순회
* 후위순회
* 중위순회

## 일단,, 트리란?
>연결 리스트와 유사한 자료구조지만 연결 리스트가 단순히 다음 노드를 가리키는 `선형` 이라면 트리는 각 노드가 여러 개의 노드를 가리키는 `비선형`

## 트리의 종류
* 이진(Binary) 트리
    * 종류
    
        이름 | 이미지
        :-------|:-------
        Full Binary Tree|
        Complete Binary Tree|
    * 이진트리가 사용되는 곳?
    
        이름|사용처
        ----|----
        Expression tree | 컴파일러
        Huffman coding tree | 데이터 압축 알고리즘

    * 운행 방법?!(이거 하려고..)
    
        운행 방법 | 설명
        ---------|----------
        전위순회(Preorder Traversal) | root 방문 <br> 왼쪽 하위 트리 방문 <br>오른쪽 하위 트리 방문
        후위순회(Inorder Traversal) | root의 왼쪽하위 트리 방문 <br>root의 오른쪽 하위트리 방문<br> root 방문
        중위순회(Postorder Traversal) | root의 왼쪽 하위 트리 방문 <br> root 방문 <br> root의 오른쪽 하위 트리 방문


## 다시, tree의 순회방법
> 이 트리를 보고 순회를 해보자!\
![예시 이미지](https://github.com/hanjh04/study/blob/master/images/tree_traversal/full_binary_tree.PNG)

운행 방법 | 운행 결과
:---------|:----------
전위순회|1 2 4 5 3 6 7
후위순회|4 5 2 6 7 3 1
중위순회|4 2 5 1 6 3 7

>한번 더 해볼까~?\
![expression tree image](https://github.com/hanjh04/study/blob/master/images/tree_traversal/expression_tree.PNG)

운행 방법 | 운행 결과
:---------|:----------
전위순회|
후위순회|
중위순회|2 * 3 / (2 - 1) + 5 * (4 - 1)


>keywords `트리` `전위순회` `후위순회` `중위순회`

>관련 문제 : 



