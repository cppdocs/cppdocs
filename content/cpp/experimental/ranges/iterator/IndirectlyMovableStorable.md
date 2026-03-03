---
title: "std::experimental::ranges::IndirectlyMovableStorable"
source_path: "cpp/experimental/ranges/iterator/IndirectlyMovableStorable"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class In, class Out >
concept bool IndirectlyMovableStorable =
IndirectlyMovable<In, Out> &&
Writable<Out, ranges::value_type_t<In>> &&
Movable<ranges::value_type_t<In>> &&
Constructible<ranges::value_type_t<In>, ranges::rvalue_reference_t<In>> &&
Assignable<ranges::value_type_t<In>&, ranges::rvalue_reference_t<In>>;
```
_(ranges TS)_
