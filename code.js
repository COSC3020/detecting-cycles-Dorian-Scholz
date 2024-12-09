function hasCycle(graph) 
{
    

    const visited = new Set();
    const recursionStack = new Set();

    function dfs(node) 
    {
        if (recursionStack.has(node)) 
        {
            
            return true;
        }

        if (visited.has(node))
        {
            return false;
        }

        visited.add(node);
        recursionStack.add(node);

        for (const neighbor of graph[node] || [])
            {
            if (dfs(neighbor)) 
            {
                return true;
            }
        }

        recursionStack.delete(node);
        return false;
    }

     for (const node in graph) 
    {
        if (!visited.has(node)) 
        {
            if (dfs(node))
            {
                return true;
            }
        }
    }

    return false; 
}
