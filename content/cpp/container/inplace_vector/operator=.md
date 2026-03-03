---
title: "std::inplace_vector<T,N>::operator="
source_path: "cpp/container/inplace_vector/operator"
category: "container"
since: "C++26"
---

Replaces the contents of the inplace_vector.

## Declarations
```cpp
constexpr inplace_vector& operator=( const inplace_vector& other );
```
_(since C++26)_

```cpp
constexpr inplace_vector& operator=( inplace_vector&& other )
noexcept(/* see below */);
```
_(since C++26)_

```cpp
constexpr inplace_vector& operator=( std::initializer_list<T> init );
```
_(since C++26)_

## Parameters
- `other`: another inplace_vector to be used as source to initialize the elements of the container with
- `init`: initializer list to initialize the elements of the container with

## Example
```cpp
#include <initializer_list>
#include <inplace_vector>
#include <new>
#include <print>
#include <ranges>
#include <string>
 
int main()
{
    std::inplace_vector<int, 4> x({1, 2, 3}), y;
    std::println("Initially:");
    std::println("x = {}", x);
    std::println("y = {}", y);
 
    std::println("Copy assignment copies data from x to y:");
    y = x; // overload (1)
    std::println("x = {}", x);
    std::println("y = {}", y);
 
    std::inplace_vector<std::string, 3> z, w{"\N{CAT}", "\N{GREEN HEART}"};
    std::println("Initially:");
    std::println("z = {}", z);
    std::println("w = {}", w);
 
    std::println("Move assignment moves data from w to z:");
    z = std::move(w); // overload (2)
    std::println("z = {}", z);
    std::println("w = {}", w); // w is in valid but unspecified state
 
    auto l = {4, 5, 6, 7};
    std::println("Assignment of initializer_list {} to x:", l);
    x = l; // overload (3)
    std::println("x = {}", x);
 
    std::println("Assignment of initializer_list with size bigger than N throws:");
    try
    {
        x = {1, 2, 3, 4, 5}; // throws: (initializer list size == 5) > (capacity N == 4)
    }
    catch(const std::bad_alloc& ex)
    {
        std::println("ex.what(): {}", ex.what());
    }
}
```

## See also
- [(constructor)](/cpp/container/inplace_vector/inplace_vector/)
- [assign](/cpp/container/inplace_vector/assign/)
