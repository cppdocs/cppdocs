---
title: "std::array<T,N>::swap"
source_path: "cpp/container/array/swap"
category: "container"
---

Exchanges the contents of the container with those of other. Does not cause iterators and references to associate with the other container.

## Declarations
```cpp
void swap( array& other ) noexcept(/* see below */);
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `other`: container to exchange the contents with

## Return value
(none)

## Example
```cpp
#include <array>
#include <iostream>
 
template<class Os, class V> Os& operator<<(Os& os, const V& v)
{
    os << '{';
    for (auto i : v)
        os << ' ' << i;
    return os << " } ";
}
 
int main()
{
    std::array<int, 3> a1{1, 2, 3}, a2{4, 5, 6};
 
    auto it1 = a1.begin();
    auto it2 = a2.begin();
    int& ref1 = a1[1];
    int& ref2 = a2[1];
 
    std::cout << a1 << a2 << *it1 << ' ' << *it2 << ' ' << ref1 << ' ' << ref2 << '\n';
    a1.swap(a2);
    std::cout << a1 << a2 << *it1 << ' ' << *it2 << ' ' << ref1 << ' ' << ref2 << '\n';
 
    // Note that after swap iterators and references stay associated with their original
    // array, e.g. `it1` still points to element a1[0], `ref1` still refers to a1[1].
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2456 | C++11 | the noexcept specification is ill-formed | made to work |

## See also
- [std::swap(std::array)](/cpp/container/array/swap2/)
- [std::swap](/cpp/utility/swap/)
