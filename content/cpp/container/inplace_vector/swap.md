---
title: "std::inplace_vector<T,N>::swap"
source_path: "cpp/container/inplace_vector/swap"
category: "container"
since: "C++26"
---

Exchanges the contents of the container with those of other. Does not cause iterators and references to associate with the other container.

## Declarations
```cpp
constexpr void swap( inplace_vector& other ) noexcept(/* see below */);
```
_(since C++26)_

## Parameters
- `other`: container to exchange the contents with

## Return value
(none)

## Example
```cpp
#include <inplace_vector>
#include <print>
 
int main()
{
    std::inplace_vector<int, 3> a1{1, 2, 3}, a2{4, 5, 6};
 
    auto i1 = a1.begin();
    auto i2 = a2.begin();
    int& r1 = a1[1];
    int& r2 = a2[1];
 
    auto print_them_all = [&](auto rem)
    {
        std::println("{}a1 = {}, a2 = {}, *i1 = {}, *i2 = {}, r1 = {}, r2 = {}",
                     rem, a1, a2, *i1, *i2, r1, r2);
    };
 
    print_them_all("Before swap:\n");
    a1.swap(a2);
    print_them_all("After swap:\n");
 
    // Note that after swap() iterators and references stay associated with their
    // original sites, e.g., i1 points to element a1[0], r1 refers to a1[1].
}
```

## See also
- [std::swap(std::inplace_vector)](/cpp/container/inplace_vector/swap2/)
- [std::swap](/cpp/utility/swap/)
