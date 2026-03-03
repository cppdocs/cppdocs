---
title: "std::scoped_allocator_adaptor<OuterAlloc,InnerAlloc...>::scoped_allocator_adaptor"
source_path: "cpp/memory/scoped_allocator_adaptor/scoped_allocator_adaptor"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

1) Default constructor: value-initializes the OuterAlloc base class and the inner allocator member object, if used by the implementation.

## Declarations
```cpp
scoped_allocator_adaptor();
```
_(since C++11)_

```cpp
template< class OuterA2 >
scoped_allocator_adaptor(
OuterA2&& outerAlloc, const InnerAllocs&... innerAllocs
) noexcept;
```
_(since C++11)_

```cpp
scoped_allocator_adaptor(
const scoped_allocator_adaptor& other
) noexcept;
```
_(since C++11)_

```cpp
scoped_allocator_adaptor(
scoped_allocator_adaptor&& other
) noexcept;
```
_(since C++11)_

```cpp
template< class OuterA2 >
scoped_allocator_adaptor(
const scoped_allocator_adaptor<OuterA2, InnerAllocs...>& other
) noexcept;
```
_(since C++11)_

```cpp
template< class OuterA2 >
scoped_allocator_adaptor(
scoped_allocator_adaptor<OuterA2, InnerAllocs...>&& other
) noexcept;
```
_(since C++11)_

## Parameters
- `outerAlloc`: constructor argument for the outer allocator
- `innerAllocs...`: constructor arguments for the inner allocators
- `other`: another std::scoped_allocator_adaptor

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2782 | C++11 | constructors taking OuterA2 weren't constrained, interfering with metaprogramming | constraint added |

## See also
- [allocate](/cpp/memory/scoped_allocator_adaptor/allocate/)
- [construct](/cpp/memory/scoped_allocator_adaptor/construct/)
