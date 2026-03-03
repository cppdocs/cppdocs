---
title: "std::experimental::ranges::IndirectlyMovable"
source_path: "cpp/experimental/ranges/iterator/IndirectlyMovable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class In, class Out >
concept bool IndirectlyMovable =
Readable<In> && Writable<Out, ranges::rvalue_reference_t<In>>;
```
_(ranges TS)_
