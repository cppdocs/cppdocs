---
title: "std::stack<T,Container>::size"
source_path: "cpp/container/stack/size"
category: "container"
---

Returns the number of elements in the container adaptor. Equivalent to: return[c](/cpp/container/stack/#Member_objects).size().

## Declarations
```cpp
size_type size() const;
```

## Return value
The number of elements in the container adaptor.

## Example
```cpp
#include <cassert>
#include <stack>
 
int main()
{
    std::stack<int> stack;
    assert(stack.size() == 0);
 
    const int count = 8;
    for (int i = 0; i != count; ++i)
        stack.push(i);
    assert(stack.size() == count);
}
```

## See also
- [empty](/cpp/container/stack/empty/)
- [sizessize](/cpp/iterator/size/)
