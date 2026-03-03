---
title: "std::experimental::any::any"
source_path: "cpp/experimental/any/any"
category: "experimental"
---

Constructs a new any object.

## Declarations
```cpp
any() noexcept;
```
_(library fundamentals TS)_

```cpp
any( const any& other );
```
_(library fundamentals TS)_

```cpp
any( any&& other ) noexcept;
```
_(library fundamentals TS)_

```cpp
template<typename ValueType>
any( ValueType&& value );
```
_(library fundamentals TS)_

## Parameters
- `other`: another any object to copy or move from
- `value`: value to initialize the contained value with

## See also
- [operator=](/cpp/experimental/any/operator/)
