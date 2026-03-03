---
title: "std::uses_allocator<std::flat_map>"
source_path: "cpp/container/flat_map/uses_allocator"
header: "<flat_map>"
category: "container"
since: "C++23"
---

Provides a transparent specialization of the [std::uses_allocator](/cpp/memory/uses_allocator/) type trait for [std::flat_map](/cpp/container/flat_map/): the container adaptor uses allocator if and only if the underlying container does.

## Declarations
```cpp
template< class Key, class T, class Compare,
class KeyContainer, class MappedContainer, class Allocator >
struct uses_allocator<std::flat_map<Key, T, Compare,
KeyContainer, MappedContainer>, Allocator>
: std::bool_constant<std::uses_allocator_v<KeyContainer, Allocator> &&
std::uses_allocator_v<MappedContainer, Allocator>> {};
```
_(since C++23)_

## Example
```cpp
#include <memory>
#include <flat_map>
 
static_assert(
    std::uses_allocator<std::flat_map<int, int>, void>::value == false &&
    std::uses_allocator<std::flat_map<int, int>, std::allocator<int>>::value == true
);
 
int main() {}
```

## See also
- [uses_allocator](/cpp/memory/uses_allocator/)
