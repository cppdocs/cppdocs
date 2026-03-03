---
title: "std::experimental::ranges::IndirectStrictWeakOrder"
source_path: "cpp/experimental/ranges/iterator/IndirectStrictWeakOrder"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class F, class I1, class I2 = I1 >
concept bool IndirectStrictWeakOrder =
Readable<I1> && Readable<I2> &&
CopyConstructible<F> &&
StrictWeakOrder<F&, ranges::value_type_t<I1>&, ranges::value_type_t<I2>&> &&
StrictWeakOrder<F&, ranges::value_type_t<I1>&, ranges::reference_t<I2>> &&
StrictWeakOrder<F&, ranges::reference_t<I1>, ranges::value_type_t<I2>&> &&
StrictWeakOrder<F&, ranges::reference_t<I1>, ranges::reference_t<I2>> &&
StrictWeakOrder<F&, ranges::iter_common_reference_t<I1>,
ranges::iter_common_reference_t<I2>>;
```
_(ranges TS)_
