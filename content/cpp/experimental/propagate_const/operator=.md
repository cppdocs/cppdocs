---
title: "std::experimental::propagate_const<T>::operator="
source_path: "cpp/experimental/propagate_const/operator"
category: "experimental"
---

Let t_ designate the private data member that is the wrapped pointer-like object.

## Declarations
```cpp
constexpr propagate_const& operator=( propagate_const&& p ) = default;
```
_(library fundamentals TS v2)_

```cpp
template< class U >
constexpr propagate_const& operator=( propagate_const<U>&& pu );
```
_(library fundamentals TS v2)_

```cpp
template< class U >
constexpr propagate_const& operator=( U&& u );
```
_(library fundamentals TS v2)_

```cpp
propagate_const& operator=( const propagate_const& ) = delete;
```
_(library fundamentals TS v2)_

## Parameters
- `p`: another propagate_const object to move from
- `pu`: another propagate_const object of a different specialization to move from
- `u`: another object to assign to the contained pointer

## Return value
*this.
