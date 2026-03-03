---
title: "std::uses_allocator<std::queue>"
source_path: "cpp/container/queue/uses_allocator"
header: "<queue>"
category: "container"
since: "C++11"
---

Provides a transparent specialization of the [std::uses_allocator](/cpp/memory/uses_allocator/) type trait for [std::queue](/cpp/container/queue/): the container adaptor uses allocator if and only if the underlying container does.

## Declarations
```cpp
template< class T, class Container, class Alloc >
struct uses_allocator<std::queue<T, Container>, Alloc>
: std::uses_allocator<Container, Alloc>::type {};
```
_(since C++11)_

## Example
```cpp
#include <memory>
#include <queue>
 
static_assert(
    std::uses_allocator<std::queue<int>, void>::value == false &&
    std::uses_allocator<std::queue<int>, std::allocator<int>>::value == true
);
 
int main() {}
```

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
