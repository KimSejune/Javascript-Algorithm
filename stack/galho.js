function solution(s) {
  // edge 케이스 잘찾기.
  // 초반이 닫히거나 ), 맨끝이 열리면 ( 바로 실패시킨다.
  if (
    s.length < 2 ||
    s.length % 2 === 1 ||
    s[s.length - 1] === "(" ||
    s[0] === ")"
  ) {
    return false;
  }

  const stack = [];
  [...s].forEach((value) => {
    if (value === "(") stack.push(value);
    else {
      // ) 괄호가 나왔는데 stack에 값이 없다면 바로 실패이다.
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  });

  return stack.length === 0;
}

function solution2(s) {
  // stack 대신 count로 해결하는법
  let count = 0;
  [...s].forEach((value) => {
    if (value === "(") count++;
    else {
      // ) 괄호가 나왔는데 stack에 값이 없다면 바로 실패이다.
      if (count === 0) {
        return false;
      }
      count--;
    }
  });

  return count === 0;
}

// 여는 괄호가 나오면 stack에 push 닫는 괄호가 나오면 pop
// "()()"
// "(())()"
// ")()("
// "(()("

const s = "(())()";
console.log(solution(s));
console.log(solution2(s));
