---
title: "C++ named requirements: LayoutMapping (since C++23)"
source_path: "cpp/named_req/LayoutMapping"
category: "named_req"
since: "C++23"
---

LayoutMapping controls the mapping of a multidimensional index to a one-dimensional offset to data handle in [std::mdspan](/cpp/container/mdspan/).

## Declarations
```cpp
template< class M >
concept /*layout-mapping-alike*/ = requires
{
requires /*is-extents*/<typename M::extents_type>;
{ M::is_always_strided() } -> std::same_as<bool>;
{ M::is_always_exhaustive() } -> std::same_as<bool>;
{ M::is_always_unique() } -> std::same_as<bool>;
std::bool_constant<M::is_always_strided()>::value;
std::bool_constant<M::is_always_exhaustive()>::value;
std::bool_constant<M::is_always_unique()>::value;
};
```
_(exposition only*)_

## See also
- [LayoutMappingPolicy](/cpp/named_req/layoutmappingpolicy/)
