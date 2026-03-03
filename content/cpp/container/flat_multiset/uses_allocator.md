---
title: "std::uses_allocator<std::flat_multiset>"
source_path: "cpp/container/flat_multiset/uses_allocator"
header: "<flat_set>"
category: "container"
since: "C++23"
---

Provides a transparent specialization of the [std::uses_allocator](/cpp/memory/uses_allocator/) type trait for [std::flat_multiset](/cpp/container/flat_multiset/): the container adaptor uses allocator if and only if the underlying container does.

## Declarations
```cpp
template< class Key, class Compare, class KeyContainer, class Allocator >
struct uses_allocator<std::flat_multiset<Key, Compare, KeyContainer>, Allocator>
: std::bool_constant<std::uses_allocator_v<KeyContainer, Allocator>> {};
```
_(since C++23)_

## Example
```cpp
#include <memory>
#include <flat_set>
 
static_assert(
    std::uses_allocator<std::flat_multiset<int>, void>::value == false &&
    std::uses_allocator<std::flat_multiset<int>, std::allocator<int>>::value == true
);
 
int main() {}
```

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
