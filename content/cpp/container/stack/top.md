---
title: "std::stack<T,Container>::top"
source_path: "cpp/container/stack/top"
category: "container"
---

Returns reference to the top element in the stack. This is the most recently pushed element. This element will be removed on a call to [pop()](/cpp/container/stack/pop/). Equivalent to: [c](/cpp/container/stack/#Member_objects).back().

## Declarations
```cpp
reference top();
```

```cpp
const_reference top() const;
```

## Return value
Reference to the last element.

## Example
```cpp
#include <iostream>
#include <stack>
 
void reportStackSize(const std::stack<int>& s)
{
    std::cout << s.size() << " elements on stack\n";
}
 
void reportStackTop(const std::stack<int>& s)
{
    // Leaves element on stack
    std::cout << "Top element: " << s.top() << '\n';
}
 
int main()
{
    std::stack<int> s;
    s.push(2);
    s.push(6);
    s.push(51);
 
    reportStackSize(s);
    reportStackTop(s);
 
    reportStackSize(s);
    s.pop();
 
    reportStackSize(s);
    reportStackTop(s);
}
```

## See also
- [push](/cpp/container/stack/push/)
- [pop](/cpp/container/stack/pop/)
