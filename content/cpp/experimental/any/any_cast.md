---
title: "std::experimental::any_cast"
source_path: "cpp/experimental/any/any_cast"
category: "experimental"
---

Performs type-safe access to the contained object.

## Declarations
```cpp
template<class ValueType>
ValueType any_cast(const any& operand);
```
_(library fundamentals TS)_

```cpp
template<class ValueType>
ValueType any_cast(any& operand);
```
_(library fundamentals TS)_

```cpp
template<class ValueType>
ValueType any_cast(any&& operand);
```
_(library fundamentals TS)_

```cpp
template<class ValueType>
const ValueType* any_cast(const any* operand) noexcept;
```
_(library fundamentals TS)_

```cpp
template<class ValueType>
ValueType* any_cast(any* operand) noexcept;
```
_(library fundamentals TS)_

## Parameters
- `operand`: target any object
