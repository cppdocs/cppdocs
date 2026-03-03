---
title: "std::experimental::ranges::IndirectlyCopyable"
source_path: "cpp/experimental/ranges/iterator/IndirectlyCopyable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class In, class Out >
concept bool IndirectlyCopyable =
Readable<In> && Writable<Out, ranges::reference_t<In>>;
```
_(ranges TS)_
