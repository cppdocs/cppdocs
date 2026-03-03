---
title: "std::unordered_multimap<Key,T,Hash,KeyEqual,Allocator>::swap"
source_path: "cpp/container/unordered_multimap/swap"
category: "container"
since: "C++17"
---

Exchanges the contents of the container with those of other. Does not invoke any move, copy, or swap operations on individual elements.

## Declarations
```cpp
void swap( unordered_multimap& other );
```
_(since C++11) (until C++17)_

```cpp
void swap( unordered_multimap& other ) noexcept(/* see below */);
```
_(since C++17)_

## Parameters
- `other`: container to exchange the contents with

## Example
```cpp
#include <iostream>
#include <string>
#include <utility>
#include <unordered_map>
 
// print out a std::pair
template<class Os, class U, class V>
Os& operator<<(Os& os, const std::pair<U, V>& p)
{
    return os << p.first << ':' << p.second;
}
 
// print out a container
template<class Os, class Co>
Os& operator<<(Os& os, const Co& co)
{
    os << '{';
    for (auto const& i : co)
        os << ' ' << i;
    return os << " }\n";
}
 
int main()
{
    std::unordered_multimap<std::string, std::string>
        m1{{"γ", "gamma"}, {"β", "beta"}, {"α", "alpha"}, {"γ", "gamma"}},
        m2{{"ε", "epsilon"}, {"δ", "delta"}, {"ε", "epsilon"}};
 
    const auto& ref = *(m1.begin());
    const auto iter = std::next(m1.cbegin());
 
    std::cout << "──────── before swap ────────\n"
              << "m1: " << m1 << "m2: " << m2 << "ref: " << ref
              << "\niter: " << *iter << '\n';
 
    m1.swap(m2);
 
    std::cout << "──────── after swap ────────\n"
              << "m1: " << m1 << "m2: " << m2 << "ref: " << ref
              << "\niter: " << *iter << '\n';
 
    // Note that every iterator referring to an element in one container before
    // the swap refers to the same element in the other container after the swap.
    // Same is true for references.
}
```

## See also
- [std::swap(std::unordered_multimap)](/cpp/container/unordered_multimap/swap2/)
- [std::swap](/cpp/utility/swap/)
