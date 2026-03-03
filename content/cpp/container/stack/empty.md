---
title: "std::stack<T,Container>::empty"
source_path: "cpp/container/stack/empty"
category: "container"
---

Checks if the underlying container has no elements. Equivalent to: return[c](/cpp/container/stack/#Member_objects).empty().

## Declarations
```cpp
bool empty() const;
```

## Return value
true if the underlying container is empty, false otherwise.

## Example
```cpp
#include <cassert>
#include <stack>
 
int main()
{
    std::stack<int> stack;
    assert(stack.empty());
 
    stack.push(42);
    assert(!stack.empty());
 
    stack.pop();
    assert(stack.empty());
}
```

## See also
- [size](/cpp/container/stack/size/)
- [empty](/cpp/iterator/empty/)
