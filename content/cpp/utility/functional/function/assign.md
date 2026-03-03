---
title: "std::function<R(Args...)>::assign"
source_path: "cpp/utility/functional/function/assign"
category: "utility"
---

Initializes the target with f. The alloc is used to allocate memory for any internal data structures that the function might use.

## Declarations
```cpp
template< class F, class Alloc >
void assign( F&& f, const Alloc& alloc );
```
_(since C++11) (removed in C++17)_

## Parameters
- `f`: callable function to initialize the target with
- `alloc`: allocator to use to allocate memory for the internal data structures

## Return value
(none)

## See also
- [operator=](/cpp/utility/functional/function/operator/)
