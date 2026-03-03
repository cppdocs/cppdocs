---
title: "std::stack<T,Container>::emplace"
source_path: "cpp/container/stack/emplace"
category: "container"
since: "C++17"
---

Pushes a new element on top of the stack. The element is constructed in-place, i.e. no copy or move operations are performed. The constructor of the element is called with exactly the same arguments as supplied to the function.

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
#include <stack>
 
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
    std::stack<S> stack;
    const S& s = stack.emplace(42, 3.14, "C++"); // for return value C++17 required
    std::cout << "id = " << s.id << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2783 | C++17 | emplace returned reference, breaking compatibility with pre-C++17 containers | returns decltype(auto) |

## See also
- [push](/cpp/container/stack/push/)
- [pop](/cpp/container/stack/pop/)
