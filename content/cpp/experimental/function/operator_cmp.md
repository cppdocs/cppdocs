---
title: "operator==,!=(std::experimental::function)"
source_path: "cpp/experimental/function/operator_cmp"
header: "<experimental/functional>"
category: "experimental"
---

Compares a std::experimental::function with a null pointer. Empty functions (that is, functions without a callable target) compare equal, non-empty functions compare non-equal.

## Declarations
```cpp
template< class R, class... ArgTypes >
bool operator==( const std::experimental::function<R(ArgTypes...)>& f,
std::nullptr_t ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class R, class... ArgTypes >
bool operator==( std::nullptr_t,
const std::experimental::function<R(ArgTypes...)>& f ) noexcept;
```
_(library fundamentals TS) (removed in library fundamentals TS v3)_

```cpp
template< class R, class... ArgTypes >
bool operator!=( const std::experimental::function<R(ArgTypes...)>& f,
std::nullptr_t ) noexcept;
```
_(library fundamentals TS) (removed in library fundamentals TS v3)_

```cpp
template< class R, class... ArgTypes >
bool operator!=( std::nullptr_t,
const std::experimental::function<R(ArgTypes...)>& f ) noexcept;
```
_(library fundamentals TS) (removed in library fundamentals TS v3)_

## Parameters
- `f`: std::experimental::function to compare

## See also
- [operator==operator!=](/cpp/utility/functional/function/operator_cmp/)
- [std::function](/cpp/utility/functional/function/)
