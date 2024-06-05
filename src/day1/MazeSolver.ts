/*
S:Start
E:End
x:wall
empty: paths


 const maze = [
        "xxxxxxxxxxSx",
        "x        x x",
        "x        x x",
        "x xxxxxxxx x",
        "x          x",
        "xExxxxxxxxxx",
    ];

    Recursion

    1.Base Case 
    * we want to stop recursion when below conditions are met!
        - its a wall
        - off the map
        - its the end
        - if we have seen it (we don't want to visit any tile twice)

    2.Recursive Case
    * Checking every direction on the tile
    * That is separeted from base case so you don't have to think what is happening on the base case.
    
    -pre
    -recurse
    -post


-->Base cases require us to know where we're currently at and recursive case requires us to be able to walk in that directions

    */

// left,right,bottom,top

const dir = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(
    maze: string[],
    wall: string,
    curr: Point,
    end: Point,
    seen: boolean[][],
    path: Point[],
): boolean {
    // 1.Base Case
    // off the map
    if (
        curr.x < 0 ||
        curr.x >= maze[0].length ||
        curr.y < 0 ||
        curr.y >= maze.length
    ) {
        return false;
    }

    // on a wall
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }
    // at the end
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end);
        return true;
    }
    // if we have seen it
    if (seen[curr.y][curr.x]) {
        return false;
    }

    // 3 Recurse

    // pre
    seen[curr.y][curr.x] = true;
    path.push(curr);
    // recurse
    for (let i = 0; i < dir.length; i++) {
        const [x, y] = dir[i];
        if (
            walk(
                maze,
                wall,
                {
                    x: curr.x + x,
                    y: curr.y + y,
                },
                end,
                seen,
                path,
            )
        ) {
            return true;
        }
    }

    // post
    path.pop();
    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);
    return path;
}
