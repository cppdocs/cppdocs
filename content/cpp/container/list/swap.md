---
title: "std::list<T,Allocator>::swap"
source_path: "cpp/container/list/swap"
category: "container"
since: "C++17"
---

Exchanges the contents of the container with those of other. Does not invoke any move, copy, or swap operations on individual elements.

## Declarations
```cpp
void swap( list& other );
```
_(until C++17)_

```cpp
void swap( list& other ) noexcept(/* see below */);
```
_(since C++17)_

## Parameters
- `other`: container to exchange the contents with

## Example
```cpp
#include <iostream>
#include <list>
 
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
    std::list<int> a1{1, 2, 3}, a2{4, 5};
 
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

## See also
- [std::swap(std::list)](/cpp/container/list/swap2/)
- [std::swap](/cpp/utility/swap/)
