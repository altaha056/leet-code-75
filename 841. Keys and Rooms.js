var canVisitAllRooms = function (rooms) {
  let queue = rooms[0];
  rooms[0] = "-";
  let roomOpened = rooms.length - 1;
  while (queue.length > 0) {
    let cur = queue.pop();
    if (cur < rooms.length && rooms[cur] != "-") {
      queue = [...queue, ...rooms[cur]];
      rooms[cur] = "-";
      roomOpened--;
    }
  }
  return roomOpened === 0 ? true : false;
};
let rooms = [[1], [2], [3], []];
console.log(canVisitAllRooms(rooms));
