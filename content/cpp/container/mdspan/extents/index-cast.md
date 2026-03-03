---
title: "std::extents<IndexType,Extents...>::index-cast"
source_path: "cpp/container/mdspan/extents/index-cast"
category: "container"
---

Casts the index i of type OtherIndexType into a certain integral type.

## Declarations
```cpp
template< class OtherIndexType >
static constexpr auto /*index-cast*/( OtherIndexType&& i ) noexcept;
```
_(since C++23) (exposition only*)_

## Parameters
- `i`: the index to be cast

## Return value
Cast index.

## Notes
A call to this function will always return an integral type other than bool. [Integer-class types](/cpp/iterator/is-integer-like/#Integer-class_type) can use the static_cast branch without loss of precision because this function's call sites are already constrained on the convertibility of OtherIndexType to index_type.
