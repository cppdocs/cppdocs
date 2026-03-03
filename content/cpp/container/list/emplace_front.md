---
title: "std::list<T,Allocator>::emplace_front"
source_path: "cpp/container/list/emplace_front"
category: "container"
since: "C++17"
---

Inserts a new element to the beginning of the container. The element is constructed through [std::allocator_traits::construct](/cpp/memory/allocator_traits/construct/), which typically uses placement-new to construct the element in-place at the location provided by the container. The arguments args... are forwarded to the constructor as [std::forward](/cpp/utility/forward/)<Args>(args)....

## Declarations
```cpp
template< class... Args >
void emplace_front( Args&&... args );
```
_(since C++11) (until C++17)_

```cpp
template< class... Args >
reference emplace_front( Args&&... args );
```
_(since C++17)_

## Parameters
- `args`: arguments to forward to the constructor of the element

## See also
- [push_front](/cpp/container/list/push_front/)
