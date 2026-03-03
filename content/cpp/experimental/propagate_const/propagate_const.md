---
title: "std::experimental::propagate_const<T>::propagate_const"
source_path: "cpp/experimental/propagate_const/propagate_const"
category: "experimental"
---

Let t_ designate the private data member that is the wrapped pointer-like object.

## Declarations
```cpp
constexpr propagate_const() = default;
```
_(library fundamentals TS v2)_

```cpp
constexpr propagate_const( propagate_const&& p ) = default;
```
_(library fundamentals TS v2)_

```cpp
template< class U >
/* see below */ constexpr propagate_const( propagate_const<U>&& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class U >
/* see below */ constexpr propagate_const( U&& u );
```
_(library fundamentals TS v2)_

```cpp
propagate_const( const propagate_const& ) = delete;
```
_(library fundamentals TS v2)_

## Parameters
- `p`: another propagate_const object to move from
- `pu`: another propagate_const object of a different specialization to move from
- `u`: another object to initialize the contained pointer with

## Notes
In Library Fundamental TS v2 (based on C++14), (4) and (5) are typically implemented in explicit/non-explicit overload pairs. Since Library Fundamental TS v3 (based on C++20), they can be implemented in conditional explicit specifiers.
