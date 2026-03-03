---
title: "std::allocator<T>::construct"
source_path: "cpp/memory/allocator/construct"
header: "<memory>"
category: "memory"
---

Constructs an object of type T in allocated uninitialized storage pointed to by p, using global placement-new.

## Declarations
```cpp
void construct( pointer p, const_reference val );
```
_(until C++11)_

```cpp
template< class U, class... Args >
void construct( U* p, Args&&... args );
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Parameters
- `p`: pointer to allocated uninitialized storage
- `val`: the value to use as the copy constructor argument
- `args...`: the constructor arguments to use

## Return value
(none)

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 402 | C++98 | if T::operator new exists, the program might be ill-formed | uses global replacement-new instead |

## See also
- [construct](/cpp/memory/allocator_traits/construct/)
- [construct_at](/cpp/memory/construct_at/)
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
