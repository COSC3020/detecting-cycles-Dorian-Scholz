const hasCycle = require('./code.js'); 

describe('hasCycle', () => 
  {
    test('detects a cycle in a directed graph', () => 
    {
        const graphWithCycle = 
        {
            0: [1],
            1: [2],
            2: [0], // Cycle: 0 -> 1 -> 2 -> 0
            3: [4],
            4: []
        };
        expect(hasCycle(graphWithCycle)).toBe(true);
    });

    test('returns false for a graph without a cycle', () => 
      {
        const graphWithoutCycle = 
        {
            0: [1],
            1: [2],
            2: [],
            3: [4],
            4: []
        };
        expect(hasCycle(graphWithoutCycle)).toBe(false);
    });

    test('handles an empty graph', () => 
    {
        const emptyGraph = {};
        expect(hasCycle(emptyGraph)).toBe(false);
    });

    test('handles a graph with a self-loop (cycle)', () => 
      {
        const graphWithSelfLoop = 
        {
            0: [0] // Self-loop at node 0
        };
        expect(hasCycle(graphWithSelfLoop)).toBe(true);
    });

    test('handles a disconnected graph with a cycle in one component', () => 
      {
        const disconnectedGraph =
          {
            0: [1],
            1: [2],
            2: [0], // Cycle: 0 -> 1 -> 2 -> 0
            3: [4],
            4: [5],
            5: []
        };
        expect(hasCycle(disconnectedGraph)).toBe(true);
    });

    test('handles a disconnected graph without cycles', () =>
      {
        const disconnectedGraphWithoutCycle = 
        {
            0: [1],
            1: [],
            2: [3],
            3: []
        };
        expect(hasCycle(disconnectedGraphWithoutCycle)).toBe(false);
    });
});
