// https://programmers.co.kr/learn/courses/30/lessons/42587

class Node {
  constructor(value, index) {
    this.value = value;
    this.index = index;
  }
}

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }

  getMax() {
    return Math.max(...this.queue.filter((x) => x).map((x) => x.value));
  }
}

function solution(priorities, location) {
  // queue 초기화
  const queue = new Queue();
  priorities.forEach((p, i) => {
    const newNode = new Node(p, i);
    queue.enqueue(newNode);
  });

  let answer = 0;

  let isEnd = true;
  while (isEnd) {
    const max = queue.getMax();
    const { value, index } = queue.dequeue();
    if (max > value) {
      const newNode = new Node(value, index);
      queue.enqueue(newNode);
    } else {
      answer += 1;
      if (index === location) {
        isEnd = false;
      }
    }
  }

  return answer;
}

const priorities = [1, 1, 1, 1, 1, 1];
const location = 0;

console.log(solution(priorities, location));
