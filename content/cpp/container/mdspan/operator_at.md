---
title: "std::mdspan<T,Extents,LayoutPolicy,AccessorPolicy>::operator[]"
source_path: "cpp/container/mdspan/operator_at"
category: "container"
since: "C++23"
---

Returns a reference to the indicesth element of the mdspan.

## Declarations
```cpp
template< class... OtherIndexTypes >
constexpr reference operator[]( OtherIndexTypes... indices ) const;
```
_(since C++23)_

```cpp
template< class OtherIndexType >
constexpr reference operator[]
( std::span<OtherIndexType, rank()> indices ) const;
```
_(since C++23)_

```cpp
template< class OtherIndexType >
constexpr reference operator[]
( const std::array<OtherIndexType, rank()>& indices ) const;
```
_(since C++23)_

## Parameters
- `indices`: the indices of the element to access

## Return value
A reference to the element.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3974 | C++23 | overloads (2,3) did not apply extents_type::index-cast | applies |
