class MaxHeap {
  constructor() {
    this.heap = [null]; // 편의를 위하여 0번 인덱스 null
  }

  push(value) {
    this.heap.push(value);

    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[currentIndex] = temp;
      this.heap[parentIndex] = value;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    console.log("this.heap", this.heap);
    // 0번 index에 null값을 넣어둔 상태이다.
    if (this.heap.length <= 1) return "pop 할 수 없습니다.";
    if (this.heap.length === 2) return this.heap.pop();
    const returnValue = this.heap[1];

    // 제일 마지막 요소를 맨 앞으로 이동.
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // right 값이 left보다 크면 right값이 루트로 이동 루트가 right로 이동
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // left 값이 right보다 크면 left값이 루트로 이동 루트가 left로 이동
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

const heap = new MaxHeap();
heap.push(45);
console.log("1st", heap.heap);
heap.push(36);
console.log("2st", heap.heap);
heap.push(54);
console.log("3st", heap.heap);
heap.push(27);
console.log("4st", heap.heap);
heap.push(63);
console.log("5st", heap.heap);

console.log(heap.pop()); // 63
console.log(heap.pop()); // 54
console.log(heap.pop()); // 45
console.log(heap.pop()); // 36
console.log(heap.pop()); // 27
console.log(heap.pop());
console.log(heap.pop());

console.log(heap.pop());
