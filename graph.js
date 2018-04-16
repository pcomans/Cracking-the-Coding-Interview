class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

function dfs(root) {
    let visited = new Set();

    let dfs_search = function(node) {
        if (node == null) {
            return;
        }
        visited.add(node);
        node.children.forEach((c) => {
            if (!visited.has(c)) {
                dfs_search(c);
            }
        });
    };
    dfs_search(root);

    return Array.from(visited);
}



function bfs(root) {
    let visited = new Set();
    let stack = [];

    stack.push(root);

    while(stack.length != 0) {
        let current = stack.shift(); // this is probably O(n)
        visited.add(current);

        current.children.forEach(c => {
            if (!visited.has(c)) {
                stack.push(c);
            }
        });
    }
    return Array.from(visited);
}

module.exports = {
    Node: Node,
    bfs: bfs,
    dfs: dfs,
};