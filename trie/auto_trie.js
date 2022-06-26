class Node {
  constructor(value = "", count = 0) {
    this.value = value;
    this.count = count;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        const value = currentNode.value + char;
        currentNode.children.set(char, new Node(value, 1));
      } else {
        const children = currentNode.children.get(char);
        children.count++;
        currentNode.children.set(char, children);
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }

      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  getSearchCount(string) {
    let currentNode = this.root;
    let result = 0;
    for (const char of string) {
      const { value, count } = currentNode.children.get(char);
      if (count === 1) {
        result += 1;
        return result;
      }
      result += 1;
      currentNode = currentNode.children.get(char);
    }
    return result;
  }
}

function solution(words) {
  const trie = new Trie();

  words.forEach((word) => {
    trie.insert(word);
  });

  return words
    .map((word) => {
      return trie.getSearchCount(word);
    })
    .reduce((pre, cur) => pre + cur);
}

const words = ["go", "gone", "guild"];
solution(words);

// console.log(trie.root.children.values());
