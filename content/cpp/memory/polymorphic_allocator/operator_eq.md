---
title: "std::pmr::operator==, std::pmr::operator!="
source_path: "cpp/memory/polymorphic_allocator/operator"
header: "<memory_resource>"
category: "memory"
since: "C++17"
aliases:
  - "/cpp/memory/polymorphic_allocator/operator/"
---

Compares two polymorphic allocators. Two polymorphic allocators compare equal if their underlying memory resource compares equal.

## Declarations
```cpp
template< class T1, class T2 >
bool operator==( const std::pmr::polymorphic_allocator<T1>& lhs,
const std::pmr::polymorphic_allocator<T2>& rhs ) noexcept;
```
_(since C++17)_

```cpp
friend bool operator==( const polymorphic_allocator& lhs,
const polymorphic_allocator& rhs ) noexcept;
```
_(since C++17)_

```cpp
template< class T1, class T2 >
bool operator!=( const std::pmr::polymorphic_allocator<T1>& lhs,
const std::pmr::polymorphic_allocator<T2>& rhs ) noexcept;
```
_(since C++17) (until C++20)_

```cpp
friend bool operator!=( const polymorphic_allocator& lhs,
const polymorphic_allocator& rhs ) noexcept;
```
_(since C++17) (until C++20)_

## Parameters
- `lhs, rhs`: polymorphic allocators to compare

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3683 | C++17 | polymorphic_allocator could not be compared with types convertible to it | overload added |
