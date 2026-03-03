---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::mdspan"
source_path: "cpp/container/mdspan/mdspan"
category: "container"
since: "C++23"
---

Constructs an mdspan, optionally using user-supplied data handle p, layout mapping m, and accessor a. If extents exts or ext are supplied, they are converted to extents_type and used to initialize the layout mapping.

## Declarations
```cpp
constexpr mdspan();
```
_(since C++23)_

```cpp
template< class... OtherIndexTypes >
constexpr explicit mdspan( data_handle_type p, OtherIndexTypes... exts );
```
_(since C++23)_

```cpp
template< class OtherIndexType, std::size_t N >
constexpr explicit(N != rank_dynamic())
mdspan( data_handle_type p, std::span<OtherIndexType, N> exts );
```
_(since C++23)_

```cpp
template< class OtherIndexType, std::size_t N >
constexpr explicit(N != rank_dynamic())
mdspan( data_handle_type p, const std::array<OtherIndexType, N>& exts );
```
_(since C++23)_

```cpp
constexpr mdspan( data_handle_type p, const extents_type& ext );
```
_(since C++23)_

```cpp
constexpr mdspan( data_handle_type p, const mapping_type& m );
```
_(since C++23)_

```cpp
constexpr mdspan( data_handle_type p, const mapping_type& m,
const accessor_type& a );
```
_(since C++23)_

```cpp
template< class OtherElementType, class OtherExtents,
class OtherLayoutPolicy, class OtherAccessor >
constexpr explicit(/* see below */)
mdspan( const mdspan<OtherElementType, OtherExtents,
OtherLayoutPolicy, OtherAccessor>& other );
```
_(since C++23)_

```cpp
constexpr mdspan( const mdspan& rhs ) = default;
```
_(since C++23)_

```cpp
constexpr mdspan( mdspan&& rhs ) = default;
```
_(since C++23)_

## Parameters
- `p`: a handle to the underlying data
- `m`: a layout mapping
- `a`: an accessor
- `ext`: a std::extents object
- `exts`: represents a multi-dimensional extents
- `other`: another mdspan to convert from
- `rhs`: another mdspan to copy or move from

## Example
This section is incompleteReason: no example
