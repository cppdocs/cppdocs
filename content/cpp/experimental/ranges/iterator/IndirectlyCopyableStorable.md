---
title: "std::experimental::ranges::IndirectlyCopyableStorable"
source_path: "cpp/experimental/ranges/iterator/IndirectlyCopyableStorable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class In, class Out >
concept bool IndirectlyCopyableStorable =
IndirectlyCopyable<In, Out> &&
Writable<Out, const ranges::value_type_t<In>&> &&
Copyable<ranges::value_type_t<In>> &&
Constructible<ranges::value_type_t<In>, ranges::reference_t<In>> &&
Assignable<ranges::value_type_t<In>&, ranges::reference_t<In>>;
```
_(ranges TS)_
