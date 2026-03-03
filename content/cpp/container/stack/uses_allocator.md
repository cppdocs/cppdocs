---
title: "std::uses_allocator<std::stack>"
source_path: "cpp/container/stack/uses_allocator"
header: "<stack>"
category: "container"
since: "C++11"
---

Provides a transparent specialization of the [std::uses_allocator](/cpp/memory/uses_allocator/) type trait for [std::stack](/cpp/container/stack/): the container adaptor uses allocator if and only if the underlying container does.

## Declarations
```cpp
template< class T, class Container, class Alloc >
struct uses_allocator<std::stack<T, Container>, Alloc>
: std::uses_allocator<Container, Alloc>::type {};
```
_(since C++11)_

## Example
```cpp
#include <memory>
#include <stack>
 
static_assert(
    std::uses_allocator<std::stack<int>, void>::value == false &&
    std::uses_allocator<std::stack<int>, std::allocator<int>>::value == true
);
 
int main() {}
```

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
