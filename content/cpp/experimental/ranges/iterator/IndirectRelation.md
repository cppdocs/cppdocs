---
title: "std::experimental::ranges::IndirectRelation"
source_path: "cpp/experimental/ranges/iterator/IndirectRelation"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class F, class I1, class I2 = I1 >
concept bool IndirectRelation =
Readable<I1> && Readable<I2> &&
CopyConstructible<F> &&
Relation<F&, ranges::value_type_t<I1>&, ranges::value_type_t<I2>&> &&
Relation<F&, ranges::value_type_t<I1>&, ranges::reference_t<I2>> &&
Relation<F&, ranges::reference_t<I1>, ranges::value_type_t<I2>&> &&
Relation<F&, ranges::reference_t<I1>, ranges::reference_t<I2>> &&
Relation<F&, ranges::iter_common_reference_t<I1>, ranges::iter_common_reference_t<I2>>;
```
_(ranges TS)_
