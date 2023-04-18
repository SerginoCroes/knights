function knightMoves(from, dest) {
    const moves = [[1, 2], [-1, 2], [-1, -2], [1, -2], [2, 1], [-2, 1], [-2, -1], [2, -1]];
    const queue = [from];

    for (pos of queue){
        if (pos[0] === dest[0] && pos[1] === dest[1]) return display(format(pos));   
        moves: for (mov of moves) {
            const next = [pos[0] + mov[0], pos[1] + mov[1]];
            for (item of queue) if (item[0] === next[0] && item[1] === next[1]) continue moves;
            if (next[0] <= 7 && next[0] >= 0 && next[1] <= 7 && next[1] >= 0) queue.push([...next, [...pos]]);
        }
    }
}

function format(arr) {
    return arr.length === 3 ? [...format(arr[2]), [arr[0], arr[1]]] : [arr];
}

function display(arr) {
    //const coords = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    console.log(`=> You made it in ${arr.length - 1} moves! Here's your path:`);
    for (item of arr) console.log(typeof coords !== 'undefined' ? `  ${coords[item[0]]}${item[1]}` : `  [${item}]`);
}
