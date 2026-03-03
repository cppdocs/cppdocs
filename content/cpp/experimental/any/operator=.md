---
title: "std::experimental::any::operator="
source_path: "cpp/experimental/any/operator"
category: "experimental"
---

Assigns contents to the contained value.

## Declarations
```cpp
any& operator=( const any& rhs );
```
_(library fundamentals TS)_

```cpp
any& operator=( any&& rhs ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< typename ValueType >
any& operator=( ValueType&& rhs );
```
_(library fundamentals TS)_

## Parameters
- `rhs`: object whose contained value to assign

## Return value
*this

## See also
- [(constructor)](/cpp/experimental/any/any/)
