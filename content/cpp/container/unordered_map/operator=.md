---
title: "std::unordered_map<Key,T,Hash,KeyEqual,Allocator>::operator="
source_path: "cpp/container/unordered_map/operator"
category: "container"
since: "C++11"
---

Replaces the contents of the container.

## Declarations
```cpp
unordered_map& operator=( const unordered_map& other );
```
_(since C++11)_

```cpp
unordered_map& operator=( unordered_map&& other );
```
_(since C++11) (until C++17)_

```cpp
unordered_map& operator=( unordered_map&& other ) noexcept(/* see below */);
```
_(since C++17)_

```cpp
unordered_map& operator=( std::initializer_list<value_type> ilist );
```
_(since C++11)_

## Parameters
- `other`: another container to use as data source
- `ilist`: initializer list to use as data source

## Return value
*this

## Notes
After container move assignment (overload (2)), unless element-wise move assignment is forced by incompatible allocators, references, pointers, and iterators (other than the end iterator) to other remain valid, but refer to elements that are now in *this. The current standard makes this guarantee via the blanket statement in [[container.reqmts]/67](https://eel.is/c++draft/container.reqmts#67), and a more direct guarantee is under consideration via [LWG issue 2321](https://cplusplus.github.io/LWG/issue2321).

## Example
```cpp
#include <initializer_list>
#include <iostream>
#include <iterator>
#include <unordered_map>
#include <utility>
 
void print(auto const comment, auto const& container)
{
    auto size = std::size(container);
    std::cout << comment << "{ ";
    for (auto const& [key, value] : container)
        std::cout << '{' << key << ',' << value << (--size ? "}, " : "} ");
    std::cout << "}\n";
}
 
int main()
{
    std::unordered_map<int, int> x{{1,1}, {2,2}, {3,3}}, y, z;
    const auto w = {std::pair<const int, int>{4,4}, {5,5}, {6,6}, {7,7}};
 
    std::cout << "Initially:\n";
    print("x = ", x);
    print("y = ", y);
    print("z = ", z);
 
    std::cout << "Copy assignment copies data from x to y:\n";
    y = x;
    print("x = ", x);
    print("y = ", y);
 
    std::cout << "Move assignment moves data from x to z, modifying both x and z:\n";
    z = std::move(x);
    print("x = ", x);
    print("z = ", z);
 
    std::cout << "Assignment of initializer_list w to z:\n";
    z = w;
    print("w = ", w);
    print("z = ", z);
}
```

## See also
- [(constructor)](/cpp/container/unordered_map/unordered_map/)
