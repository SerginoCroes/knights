function knightMoves(from, dest) {
    const moves = [[1, 2], [-1, 2], [-1, -2], [1, -2], [2, 1], [-2, 1], [-2, -1], [2, -1]];
    const queue = [from];

    for (let i = 0; i < queue.length; i++){
        console.log(queue[i], i);
        if (queue[i][0] === dest[0] && queue[i][1] === dest[1]) return display(format(queue[i]));   
        for (let j = 0; j < moves.length; j++) {
            const next = [queue[i][0] + moves[j][0], queue[i][1] + moves[j][1]];
            if (i > 0) if (next[0] === queue[i][2][0] && next[1] === queue[i][2][1]) continue;
            if (next[0] <= 7 && next[0] >= 0 && next[1] <= 7 && next[1] >= 0) queue.push([...next, [...queue[i]]]);
        }
    }
}

function format(arr) {
    if (arr.length === 3) return [...format(arr[2]), [arr[0], arr[1]]];
    return [arr];
}

function display (arr) {
    console.log(`You made it in ${arr.length} moves! Here's your path:`);
    for (let i = 0; i < arr.length; i++) console.log(`${arr[i]}`);
}