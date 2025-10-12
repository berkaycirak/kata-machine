export default function dfs(
    graph: WeightedAdjacencyList,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];

    walk(graph, source, path, needle, seen);
    return path.length > 0 ? path : null;
}
function walk(
    graph: WeightedAdjacencyList,
    currentVertex: number,
    path: number[],
    targetVertex: number,
    seen: boolean[],
): boolean {
    // Base cases
    if (seen[currentVertex]) return false;
    seen[currentVertex] = true;
    path.push(currentVertex);
    if (currentVertex === targetVertex) return true;
    // Start walking through edgestto reach other vertex
    for (const edge of graph[currentVertex]) {
        // If we haven't seen that vertex then move
        if (!seen[edge.to]) {
            const found = walk(graph, edge.to, path, targetVertex, seen);
            if (found) return true; // stop if found
        }
    }

    // Dead end reached - backtrack
    path.pop();
    return false;
}

