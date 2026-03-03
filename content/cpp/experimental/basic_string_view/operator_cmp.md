---
title: "operator==,!=,<,<=,>,>=(std::experimental::basic_string_view)"
source_path: "cpp/experimental/basic_string_view/operator_cmp"
header: "<experimental/string_view>"
category: "experimental"
---

Compares two views.

## Declarations
```cpp
Compare two basic_string_view objects
```

```cpp
template< class CharT, class Traits >
constexpr bool operator==( basic_string_view <CharT,Traits> lhs,
basic_string_view <CharT,Traits> rhs ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class CharT, class Traits >
constexpr bool operator!=( basic_string_view <CharT,Traits> lhs,
basic_string_view <CharT,Traits> rhs ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class CharT, class Traits >
constexpr bool operator<( basic_string_view <CharT,Traits> lhs,
basic_string_view <CharT,Traits> rhs ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class CharT, class Traits >
constexpr bool operator<=( basic_string_view <CharT,Traits> lhs,
basic_string_view <CharT,Traits> rhs ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class CharT, class Traits >
constexpr bool operator>( basic_string_view <CharT,Traits> lhs,
basic_string_view <CharT,Traits> rhs ) noexcept;
```
_(library fundamentals TS)_

```cpp
template< class CharT, class Traits >
constexpr bool operator>=( basic_string_view <CharT,Traits> lhs,
basic_string_view <CharT,Traits> rhs ) noexcept;
```
_(library fundamentals TS)_

## Parameters
- `lhs, rhs`: views to compare

## Return value
true if the corresponding comparison holds, false otherwise.
