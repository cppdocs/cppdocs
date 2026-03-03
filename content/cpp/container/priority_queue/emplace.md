---
title: "std::priority_queue<T,Container,Compare>::emplace"
source_path: "cpp/container/priority_queue/emplace"
category: "container"
since: "C++11"
---

Pushes a new element to the priority queue. The element is constructed in-place, i.e. no copy or move operations are performed. The constructor of the element is called with exactly the same arguments as supplied to the function.

## Declarations
```cpp
template< class... Args >
void emplace( Args&&... args );
```
_(since C++11)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## Return value
(none)

## Example
```cpp
#include <iostream>
#include <queue>
 
struct S
{
    int id;
 
    S(int i, double d, std::string s) : id{i}
    {
        std::cout << "S::S(" << i << ", " << d << ", \"" << s << "\");\n";
    }
    friend bool operator< (S const& x, S const& y) { return x.id < y.id; }
};
 
int main()
{
    std::priority_queue<S> queue;
    queue.emplace(42, 3.14, "C++");
    std::cout << "id: " << queue.top().id << '\n';
}
```

## See also
- [push](/cpp/container/priority_queue/push/)
- [pop](/cpp/container/priority_queue/pop/)
