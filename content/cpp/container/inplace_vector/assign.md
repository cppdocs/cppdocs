---
title: "std::inplace_vector<T,N>::assign"
source_path: "cpp/container/inplace_vector/assign"
category: "container"
since: "C++26"
---

Replaces the contents of the container.

## Declarations
```cpp
constexpr void assign( size_type count, const T& value );
```
_(since C++26)_

```cpp
template< class InputIt >
constexpr void assign( InputIt first, InputIt last );
```
_(since C++26)_

```cpp
constexpr void assign( std::initializer_list<T> ilist );
```
_(since C++26)_

## Parameters
- `count`: the new size of the container
- `value`: the value to initialize elements of the container with
- `first, last`: the range to copy the elements from
- `ilist`: std::initializer_list to copy the values from

## Example
```cpp
#include <inplace_vector>
#include <iterator>
#include <new>
#include <print>
 
int main()
{
    std::inplace_vector<char, 5> chars;
 
    chars.assign(4, 'a'); // overload (1)
    std::println("{}", chars);
 
    const char extra[3]{'a', 'b', 'c'};
    chars.assign(std::cbegin(extra), std::cend(extra)); // overload (2)
    std::println("{}", chars);
 
    chars.assign({'C', '+', '+', '2', '6'}); // overload (3)
    std::println("{}", chars);
 
    try
    {
        chars.assign(8, 'x'); // throws: count > chars.capacity()
    }
    catch(const std::bad_alloc&) { std::println("std::bad_alloc #1"); }
 
    try
    {
        const char bad[8]{'?'}; // ranges::distance(bad) > chars.capacity()
        chars.assign(std::cbegin(bad), std::cend(bad)); // throws
    }
    catch(const std::bad_alloc&) { std::println("std::bad_alloc #2"); }
 
    try
    {
        const auto l = {'1', '2', '3', '4', '5', '6'};
        chars.assign(l); // throws: l.size() > chars.capacity()
    }
    catch(const std::bad_alloc&) { std::println("std::bad_alloc #3"); }
}
```

## See also
- [assign_range](/cpp/container/inplace_vector/assign_range/)
- [operator=](/cpp/container/inplace_vector/operator/)
