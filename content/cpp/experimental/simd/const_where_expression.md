---
title: "std::experimental::const_where_expression"
source_path: "cpp/experimental/simd/const_where_expression"
header: "<experimental/simd>"
category: "experimental"
---

The class template const_where_expression abstracts the notion of selected elements
of a given const object of arithmetic or data-parallel type. Selected elements signifies the elements data[i] for all i ∈ { j ∈ ℕ | j < M::size() ⋀ mask[j] }.

## Declarations
```cpp
template< class M, class V >
class const_where_expression;
```
_(parallelism TS v2)_

## Example
This section is incompleteReason: no example
