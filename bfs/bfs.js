// 노드, 간선, 최단경로
// 최단 경로가 제일 큰 경우의 집합을 구하는 문제

function arrayBFS(graph, n) {
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  // BFS
  const queue = [1];
  while (queue.length > 0) {
    const start = queue.shift();
    graph[start].forEach((end) => {
      if (distance[end] === 0) {
        queue.push(end);
        distance[end] = distance[start] + 1;
      }
    });
  }

  const max = Math.max(...distance);

  const maxList = distance.filter((dis) => dis === max);
  return maxList.length;
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

  isEmpty() {
    return this.rear === this.front;
  }
}

function listBFS(graph, n) {
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;

  const queue = new Queue();
  queue.enqueue(1);

  while (!queue.isEmpty()) {
    const start = queue.dequeue();

    graph[start].forEach((end) => {
      if (distance[end] === 0) {
        queue.enqueue(end);
        distance[end] = distance[start] + 1;
      }
    });
  }

  const max = Math.max(...distance);

  const maxList = distance.filter((dis) => dis === max);
  return maxList.length;
}

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);

  edge.forEach((e) => {
    const [start, end] = e;
    graph[start].push(end);
    graph[end].push(start);
  });
  console.log("graph", graph);

  const answer = arrayBFS(graph, n);
  const answer2 = listBFS(graph, n);

  console.log("Array answer", answer);
  console.log("list answer", answer2);
  return answer;

  // const answer = dfs(graph, 1);

  // return answer;
}

const n = 6;
const edge = [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
];

console.log(solution(n, edge));
