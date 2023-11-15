// 링크드 리스트

// 노드는 포인터를 가지고 있다. 헤드, 테일

// 노드
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// 링크드 리스트
class LinkedList {
  constructor(value) {
    this.head = new Node(value);
  }

  append(value) {
    let currentNode = this.head;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    console.log(`tail: ${currentNode.data}`);
    const newNode = new Node(value);
    currentNode.next = newNode;
  }

  // index를 알고 있는 경우
  getNode(index) {
    /*
    * index가 길 경우<- 에러 발생
    * 이 경우 방지하기 위해 최대길이보다 index가 큰지 작은지 유효성 검사
    * */
    let node = this.head;
    // 포인터를 타고간다.
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }

  // index를 알고 있을 경우 추가
  addNode(index, value) {
    const newNode = new Node(value);

    // 맨 앞에 추가
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    // 추가하고 싶은 인덱스 앞에 있는 노드 검색
    const node = this.getNode(index - 1);
    const nextNode = node.next;

    node.next = newNode;
    newNode.next = nextNode;
  }
}

const linkedList = new LinkedList('흑연');
linkedList.append('자갈');
linkedList.append('밀가루');
linkedList.append('돌맹이');
console.log(linkedList); //?

console.log(linkedList.getNode(4));

