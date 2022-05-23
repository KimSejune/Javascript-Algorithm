// https://programmers.co.kr/learn/courses/30/lessons/42579

// genre별 총합, 마지막 정렬
// plays별 정렬

function solution(genres, plays) {
  const genreHashMap = new Map();

  genres.forEach((genre, i) => {
    if (genreHashMap.has(genre)) {
      const list = genreHashMap.get(genre);
      list.album.push({ id: i, play: plays[i] });
      list.album.sort((a, b) => b.play - a.play);
      list.total += plays[i];
      genreHashMap.set(genre, list);
    } else {
      genreHashMap.set(genre, {
        album: [{ id: i, play: plays[i] }],
        total: plays[i],
      });
    }
  });

  return [...genreHashMap]
    .sort((a, b) => b[1].total - a[1].total)
    .map((value) => {
      if (value && value[1] && value[1].album) {
        return value[1].album.slice(0, 2).map((x) => x.id);
      }
    })
    .filter((x) => x)
    .flat(2);
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
