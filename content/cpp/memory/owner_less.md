---
title: "std::owner_less"
source_path: "cpp/memory/owner_less"
header: "<memory>"
category: "memory"
since: "C++17"
---

This function object provides owner-based (as opposed to value-based) mixed-type ordering of both [std::weak_ptr](/cpp/memory/weak_ptr/) and [std::shared_ptr](/cpp/memory/shared_ptr/). The order is such that two smart pointers compare equivalent only if they are both empty or if they share ownership, even if the values of the raw pointers obtained by get() are different (e.g. because they point at different subobjects within the same object).

## Declarations
```cpp
template< class T >
struct owner_less; /* undefined */
```
_(since C++11) (until C++17)_

```cpp
template< class T = void >
struct owner_less; /* undefined */
```
_(since C++17)_

```cpp
template< class T >
struct owner_less<std::shared_ptr<T>>;
```
_(since C++11)_

```cpp
template< class T >
struct owner_less<std::weak_ptr<T>>;
```
_(since C++11)_

```cpp
template<>
struct owner_less<void>;
```
_(since C++17)_

## Parameters
- `lhs, rhs`: shared-ownership pointers to compare

## Return value
true if lhs is less than rhs as determined by the owner-based ordering, false otherwise.

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2873 | C++11 | operator() was not required to be noexcept | required to be noexcept |

## See also
- [owner_before](/cpp/memory/shared_ptr/owner_before/)
- [owner_before](/cpp/memory/weak_ptr/owner_before/)
