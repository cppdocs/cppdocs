---
title: "std::experimental::ranges::indirect_result_of"
source_path: "cpp/experimental/ranges/iterator/indirect_result_of"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class > struct indirect_result_of {};
template< class F, class... Is >
requires Invocable<F, ranges::reference_t<Is>...>
struct indirect_result_of<F(Is...)>
: std::result_of<F(ranges::reference_t<Is>&&...)> {};
```
_(ranges TS)_
