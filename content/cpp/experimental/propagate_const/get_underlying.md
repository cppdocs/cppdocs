---
title: "std::experimental::get_underlying"
source_path: "cpp/experimental/propagate_const/get_underlying"
category: "experimental"
---

Retrieves a reference to the pointer-like object stored in a propagate_const.

## Declarations
```cpp
template< class T >
constexpr T& get_underlying( propagate_const<T>& pt ) noexcept;
```
_(library fundamentals TS v2)_

```cpp
template< class T >
constexpr const T& get_underlying( const propagate_const<T>& pt ) noexcept;
```
_(library fundamentals TS v2)_

## Parameters
- `pt`: a propagate_const object

## Return value
A reference to the pointer-like object stored in pt.
