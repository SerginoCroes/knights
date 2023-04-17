function knightMoves(from, dest) {
    const moves = [[1, 2], [-1, 2], [-1, -2], [1, -2], [2, 1], [2, -1], [-2, -1], [-2, 1]];
    const queue = [from];
    //console.log(queue);

    for (let i = 0; i < queue.length; i++){
        console.log(queue[i], [i]);
        if (queue[i][0] === dest[0] && queue[i][1] === dest[1]) return display(queue[i]);   
        for (let j = 0; j < moves.length; j++) {
            const next = [queue[i][0] + moves[j][0], queue[i][1] + moves[j][1]];
            if (next[0] <= 7 && next[0] >= 0 && next[1] <= 7 && next[1] >= 0) queue.push([...next, [...queue[i]]]);
        }
    }
}

function display(arr) {
    if (arr.length === 3) return `${display(arr[2])} [${arr[0]}, ${arr[1]}]`
    return `[${arr[0]}, ${arr[1]}]`;
}