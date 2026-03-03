---
title: "std::declare_reachable"
source_path: "cpp/memory/gc/declare_reachable"
header: "<memory>"
category: "memory"
---

Declares the object referenced by the pointer p reachable. Reachable objects will not be deleted by the garbage collector or considered to be a leak by a leak detector even if all pointers to it are destroyed. An object may be declared reachable multiple times, in which case multiple calls to [std::undeclare_reachable](/cpp/memory/gc/undeclare_reachable/) would be needed to remove this property. For example, a [XOR linked list](https://en.wikipedia.org/wiki/XOR_linked_list) needs to declare its nodes reachable if the implementation has garbage collection enabled.

## Declarations
```cpp
void declare_reachable( void* p );
```
_(since C++11) (removed in C++23)_

## Parameters
- `p`: a safely-derived pointer or a null pointer

## Return value
(none)

## See also
- [undeclare_reachable](/cpp/memory/gc/undeclare_reachable/)
