---
title: "std::layout_right::mapping<Extents>::operator()"
source_path: "cpp/container/mdspan/layout_right/mapping/operator"
category: "container"
since: "C++23"
---

Maps the multidimensional index indices into an offset value.

## Declarations
```cpp
template< class... Indices >
constexpr index_type operator()( Indices... indices ) const noexcept;
```
_(since C++23)_

## Parameters
- `indices`: the multidimensional index in the underlying extents object

## Return value
The offset value.

## Example
This section is incompleteReason: no example

## See also
- [operator()](/cpp/container/mdspan/layout_left/mapping/operator/)
- [operator()](/cpp/container/mdspan/layout_stride/mapping/operator/)
- [operator[]](/cpp/container/mdspan/operator_at/)
