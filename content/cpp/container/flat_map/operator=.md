---
title: "std::flat_map<Key,T,Compare,KeyContainer,MappedContainer>::operator="
source_path: "cpp/container/flat_map/operator"
category: "container"
since: "C++23"
---

Replaces the contents of the container adaptor with the contents of given argument.

## Declarations
```cpp
flat_map& operator=( const flat_map& other );
```
_(since C++23) (implicitly declared)_

```cpp
flat_map& operator=( flat_map&& other );
```
_(since C++23) (implicitly declared)_

```cpp
flat_map& operator=( std::initializer_list<value_type> ilist );
```
_(since C++23)_

## Parameters
- `other`: another container adaptor to be used as source
- `ilist`: initializer list to be used as source

## Return value
*this

## Example
```cpp
#include <flat_map>
#include <initializer_list>
#include <print>
#include <utility>
 
int main()
{
    std::flat_map<int, int> x{{1, 1}, {2, 2}, {3, 3}}, y, z;
    const auto w = {std::pair<const int, int>{4, 4}, {5, 5}, {6, 6}, {7, 7}};
 
    std::println("Initially:");
    std::println("x = {}", x);
    std::println("y = {}", y);
    std::println("z = {}", z);
 
    y = x; // overload (1)
    std::println("Copy assignment copies data from x to y:");
    std::println("x = {}", x);
    std::println("y = {}", y);
 
    z = std::move(x); // overload (2)
    std::println("Move assignment moves data from x to z, modifying both x and z:");
    std::println("x = {}", x);
    std::println("z = {}", z);
 
    z = w; // overload (3)
    std::println("Assignment of initializer_list w to z:");
    std::println("w = {}", w);
    std::println("z = {}", z);
}
```

## See also
- [(constructor)](/cpp/container/flat_map/flat_map/)
- [replace](/cpp/container/flat_map/replace/)
