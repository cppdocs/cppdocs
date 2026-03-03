---
title: "std::extents<IndexType,Extents...>::extents"
source_path: "cpp/container/mdspan/extents/extents"
category: "container"
since: "C++23"
---

Construct an extents. One can construct extents from just dynamic extents, which are all the values getting stored, or from all the extents with a precondition.

## Declarations
```cpp
constexpr extents() = default;
```
_(since C++23)_

```cpp
template< class OtherIndexType, std::size_t... OtherExtents >
constexpr explicit(/*see below*/)
extents( const std::extents<OtherIndexType, OtherExtents...>& other ) noexcept;
```
_(since C++23)_

```cpp
template< class... OtherIndexTypes >
constexpr explicit extents( OtherIndexTypes... exts ) noexcept;
```
_(since C++23)_

```cpp
template< class OtherIndexType, std::size_t N >
constexpr explicit(N != rank_dynamic())
extents( std::span<OtherIndexType, N> exts ) noexcept;
```
_(since C++23)_

```cpp
template< class OtherIndexType, std::size_t N >
constexpr explicit(N != rank_dynamic())
extents( const std::array<OtherIndexType, N>& exts ) noexcept;
```
_(since C++23)_

## Parameters
- `other`: another extents to convert from
- `exts`: represents the extents

## Example
This section is incompleteReason: no example
