---
title: "std::undeclare_reachable"
source_path: "cpp/memory/gc/undeclare_reachable"
header: "<memory>"
category: "memory"
---

Removes the reachable status of the object, referenced by the pointer p, if it was previously set by [std::declare_reachable](/cpp/memory/gc/declare_reachable/). If the object was declared reachable multiple times, equal number of calls to undeclare_reachable would be needed to remove this status. Once the object is not declared reachable and has no pointers referencing it, it may be reclaimed by garbage collector or reported as a leak by a leak detector.

## Declarations
```cpp
template< class T >
T* undeclare_reachable( T* p );
```
_(since C++11) (removed in C++23)_

## Parameters
- `p`: a pointer to an object previously declared reachable and not destructed since then

## Return value
A safely-derived copy of p.

## See also
- [declare_reachable](/cpp/memory/gc/declare_reachable/)
