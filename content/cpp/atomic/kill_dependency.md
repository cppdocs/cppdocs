---
title: "std::kill_dependency"
source_path: "cpp/atomic/kill_dependency"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Informs the compiler that the dependency tree started by an [std::memory_order_consume](/cpp/atomic/memory_order/) atomic load operation does not extend past the return value of std::kill_dependency; that is, the argument does not carry a dependency into the return value.

## Declarations
```cpp
template< class T >
T kill_dependency( T y ) noexcept;
```
_(since C++11)_

## Parameters
- `y`: the expression whose return value is to be removed from a dependency tree

## Return value
Returns y, no longer a part of a dependency tree.

## See also
- [memory_order](/cpp/atomic/memory_order/)
- [C documentation](/c/atomic/kill_dependency/)
