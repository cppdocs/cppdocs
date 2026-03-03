---
title: "std::deque<T,Allocator>::emplace"
source_path: "cpp/container/deque/emplace"
category: "container"
since: "C++11"
---

Inserts a new element into the container directly before pos.

## Declarations
```cpp
template< class... Args >
iterator emplace( const_iterator pos, Args&&... args );
```
_(since C++11)_

## Parameters
- `pos`: iterator before which the new element will be constructed
- `args`: arguments to forward to the constructor of the element

## Return value
Iterator pointing to the emplaced element.

## Example
```cpp
#include <iostream>
#include <string>
#include <deque>
 
struct A
{
    std::string s;
 
    A(std::string str) : s(std::move(str)) { std::cout << " constructed\n"; }
 
    A(const A& o) : s(o.s) { std::cout << " copy constructed\n"; }
 
    A(A&& o) : s(std::move(o.s)) { std::cout << " move constructed\n"; }
 
    A& operator=(const A& other)
    {
        s = other.s;
        std::cout << " copy assigned\n";
        return *this;
    }
 
    A& operator=(A&& other)
    {
        s = std::move(other.s);
        std::cout << " move assigned\n";
        return *this;
    }
};
 
int main()
{
    std::deque<A> container;
 
    std::cout << "construct 2 times A:\n";
    A two{"two"};
    A three{"three"};
 
    std::cout << "emplace:\n";
    container.emplace(container.end(), "one");
 
    std::cout << "emplace with A&:\n";
    container.emplace(container.end(), two);
 
    std::cout << "emplace with A&&:\n";
    container.emplace(container.end(), std::move(three));
 
    std::cout << "content:\n";
    for (const auto& obj : container)
        std::cout << ' ' << obj.s;
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2164 | C++11 | it was not clear whether the arguments can refer to the container | clarified |

## See also
- [insert](/cpp/container/deque/insert/)
- [emplace_back](/cpp/container/deque/emplace_back/)
