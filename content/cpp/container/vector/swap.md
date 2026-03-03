---
title: "std::vector<T,Allocator>::swap"
source_path: "cpp/container/vector/swap"
category: "container"
since: "C++20"
---

Exchanges the contents and capacity of the container with those of other. Does not invoke any move, copy, or swap operations on individual elements.

## Declarations
```cpp
void swap( vector& other );
```
_(until C++17)_

```cpp
void swap( vector& other ) noexcept(/* see below */);
```
_(since C++17) (until C++20)_

```cpp
constexpr void swap( vector& other ) noexcept(/* see below */);
```
_(since C++20)_

## Parameters
- `other`: container to exchange the contents with

## Example
```cpp
#include <iostream>
#include <vector>
 
template<class Os, class Co>
Os& operator<<(Os& os, const Co& co)
{
    os << '{';
    for (auto const& i : co)
        os << ' ' << i;
    return os << " } ";
}
 
int main()
{
    std::vector<int> a1{1, 2, 3}, a2{4, 5};
 
    auto it1 = std::next(a1.begin());
    auto it2 = std::next(a2.begin());
 
    int& ref1 = a1.front();
    int& ref2 = a2.front();
 
    std::cout << a1 << a2 << *it1 << ' ' << *it2 << ' ' << ref1 << ' ' << ref2 << '\n';
    a1.swap(a2);
    std::cout << a1 << a2 << *it1 << ' ' << *it2 << ' ' << ref1 << ' ' << ref2 << '\n';
 
    // Note that after swap the iterators and references stay associated with their
    // original elements, e.g. it1 that pointed to an element in 'a1' with value 2
    // still points to the same element, though this element was moved into 'a2'.
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 341 | C++98 | the capacities of std::vector could not be swapped | they are also swapped |

## See also
- [std::swap(std::vector)](/cpp/container/vector/swap2/)
- [std::swap](/cpp/utility/swap/)
