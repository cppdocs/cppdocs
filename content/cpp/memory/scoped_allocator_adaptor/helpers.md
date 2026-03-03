---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::outermost, outermost-construct, outermost-destroy"
source_path: "cpp/memory/scoped_allocator_adaptor/helpers"
category: "memory"
---

These exposition-only helper member function templates are used in member functions [construct()](/cpp/memory/scoped_allocator_adaptor/construct/) and [destroy()](/cpp/memory/scoped_allocator_adaptor/destroy/).

## Declarations
```cpp
template< class Alloc >
/* unspecified */ /*outermost*/( Alloc&& alloc = *this );
```
_(exposition only*)_

```cpp
template< class T, class... Args >
void /*outermost-construct*/( T* p, Args&&... args );
```
_(exposition only*)_

```cpp
template< class T >
void /*outermost-destroy*/( T* p );
```
_(exposition only*)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3116 | C++11 | the recursion condition for outermost was “allochas the member function outer_allocator()” | changed to “the expressionalloc.outer_allocator() is valid” |

## See also
- [construct](/cpp/memory/allocator_traits/construct/)
- [destroy](/cpp/memory/allocator_traits/destroy/)
