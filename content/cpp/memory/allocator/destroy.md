---
title: "std::allocator<T>::destroy"
source_path: "cpp/memory/allocator/destroy"
header: "<memory>"
category: "memory"
---

Calls the destructor of the object pointed to by p.

## Declarations
```cpp
void destroy( pointer p );
```
_(until C++11)_

```cpp
template< class U >
void destroy( U* p );
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Parameters
- `p`: pointer to the object that is going to be destroyed

## Return value
(none)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 400 | C++98 | p was cast to T*, which is the type of p | removed the redundant cast |

## See also
- [destroy](/cpp/memory/allocator_traits/destroy/)
