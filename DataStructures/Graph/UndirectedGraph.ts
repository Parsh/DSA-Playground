// Undirected Graph: Adjacency List implementation,
// has better space complexity then Adjacency Matrix implementation for sparse graph(density of edges is low)
class UndirectedGraph {
  public adjacenyList: Record<string, Array<string>>;

  constructor() {
    this.adjacenyList = {};
  }

  /**
   * Adds a vertex
   * @param  {string} vertex
   */
  public addVertex = (vertex: string) => {
    if (!this.adjacenyList[vertex]) this.adjacenyList[vertex] = [];
  };

  /**
   * Adds an edge
   * @param  {string} vertex1
   * @param  {string} vertex2
   */
  public addEdge = (vertex1: string, vertex2: string) => {
    this.adjacenyList[vertex1].push(vertex2);
    this.adjacenyList[vertex2].push(vertex1);
  };

  /**
   * Removes an edge
   * @param  {string} vertex1
   * @param  {string} vertex2
   */
  public removeEdge = (vertex1: string, vertex2: string) => {
    this.adjacenyList[vertex1] = this.adjacenyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );
    this.adjacenyList[vertex2] = this.adjacenyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  };

  /**
   * Removes the vertex and the corresponding edges
   * @param  {string} vertex
   */
  public removeVertex = (vertex: string) => {
    this.adjacenyList[vertex].forEach((adjacentVertex) =>
      this.removeEdge(vertex, adjacentVertex)
    );
    delete this.adjacenyList[vertex];
  };

  /**
   * Graph DFS: Recursive implementation
   * @param  {string} start
   */
  public depthFirstSearchRecursive = (start: string) => {
    const result: string[] = [];
    const visited: any = {};

    const helperDFS = (vertex: string) => {
      //   if (!vertex) return null;
      result.push(vertex);
      visited[vertex] = true;

      this.adjacenyList[vertex].forEach((adjacentVertex) => {
        if (!visited[adjacentVertex]) return helperDFS(adjacentVertex);
      });
    };
    helperDFS(start);

    return result;
  };

  /**
   * Graph DFS: iterative implementation using stack
   * @param  {string} start
   */
  public depthFirstSearchIterative = (start: string) => {
    const stack: string[] = [];
    const result: string[] = [];
    const discovered: Record<string, boolean> = {};

    stack.push(start);
    discovered[start] = true;

    while (stack.length) {
      const vertex = stack.pop() as string;
      result.push(vertex);
      this.adjacenyList[vertex].forEach((adjacentVertex) => {
        if (!discovered[adjacentVertex]) {
          discovered[adjacentVertex] = true;
          stack.push(adjacentVertex);
        }
      });
    }

    return result;
  };

  /**
   * Graph BFS: iterative implementation using queue(exactly same as iterative DFS, only the stack is swapped for queue)
   * @param  {string} start
   */
  public breathFirstSearchIterative = (start: string) => {
    const queue: string[] = [];
    const result: string[] = [];
    const discovered: Record<string, boolean> = {};

    queue.push(start);
    discovered[start] = true;
    while (queue.length) {
      const vertex = queue.shift() as string;
      result.push(vertex);

      this.adjacenyList[vertex].forEach((adjacentVertex) => {
        if (!discovered[adjacentVertex]) {
          discovered[adjacentVertex] = true;
          queue.push(adjacentVertex);
        }
      });
    }

    return result;
  };
}

// SMOKE TEST
// const graph = new UndirectedGraph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addVertex("D");
// graph.addVertex("E");
// graph.addVertex("F");

// graph.addEdge("A", "B");
// graph.addEdge("A", "C");
// graph.addEdge("B", "D");
// graph.addEdge("C", "E");
// graph.addEdge("D", "E");
// graph.addEdge("D", "F");
// graph.addEdge("E", "F");

// graph.removeEdge("A", "B");
// graph.removeVertex("E");

// console.log(graph.adjacenyList);
// console.log(graph.depthFirstSearchRecursive("A"));
// console.log(graph.depthFirstSearchIterative("A"));
// console.log(graph.breathFirstSearchIterative("A"));
