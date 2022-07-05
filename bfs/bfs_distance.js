class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear] = value;
    this.rear += 1;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  isEmpty() {
    return this.front === this.rear;
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

  for (const [start, end] of edge) {
    // 양방향
    graph[start].push(end);
    graph[end].push(start);
  }
  // console.log(graph);
  const answer = listBFS(graph, n);
  return answer;
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
