---
title: "std::forward_list"
source_path: "cpp/container/forward_list"
header: "<forward_list>"
category: "container"
since: "C++11"
---

std::forward_list is a container that supports fast insertion and removal of elements from anywhere in the container. Fast random access is not supported. It is implemented as a singly-linked list. Compared to [std::list](/cpp/container/list/) this container provides more space efficient storage when bidirectional iteration is not needed.

## Declarations
```cpp
template<
class T,
class Allocator = std::allocator<T>
> class forward_list;
```
_(since C++11)_

```cpp
namespace pmr {
template< class T >
using forward_list = std::forward_list<T, std::pmr::polymorphic_allocator<T>>;
}
```
_(since C++17)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges construction and insertion for containers

## Example
This section is incompleteReason: no example

## See also
- [list](/cpp/container/list/)
