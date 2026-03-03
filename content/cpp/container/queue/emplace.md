---
title: "std::queue<T,Container>::emplace"
source_path: "cpp/container/queue/emplace"
category: "container"
since: "C++17"
---

Pushes a new element to the end of the queue. The element is constructed in-place, i.e. no copy or move operations are performed. The constructor of the element is called with exactly the same arguments as supplied to the function.

## Declarations
```cpp
template< class... Args >
void emplace( Args&&... args );
```
_(since C++11) (until C++17)_

```cpp
template< class... Args >
decltype(auto) emplace( Args&&... args );
```
_(since C++17)_

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
};
 
int main()
{
    std::queue<S> queue;
    const S& s = queue.emplace(42, 3.14, "C++"); // for return value C++17 required
    std::cout << "id = " << s.id << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2783 | C++17 | emplace returned reference, breaking compatibility with pre-C++17 containers | returns decltype(auto) |

## See also
- [push](/cpp/container/queue/push/)
- [pop](/cpp/container/queue/pop/)
