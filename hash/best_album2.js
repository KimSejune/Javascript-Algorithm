// 1. 같은 장르끼리 묶여야한다.
// 2. 묶인 노래들을 재생 순으로 정렬 해야한다.
// 3. 노래를 2개까지 자르는 작업을 해야한다.

// 핵심 키워드 "묶는 것", "정렬"

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach((zip, index) => {
      const [genre, play] = zip;

      const data = genreMap.get(genre) || { total: 0, albums: [] };
      genreMap.set(genre, {
        total: data.total + play,
        albums: [...data.albums, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].albums)
    .map((x) => x.index);
}

const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

console.log(solution(genres, plays));
