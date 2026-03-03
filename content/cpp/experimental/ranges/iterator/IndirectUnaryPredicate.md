---
title: "std::experimental::ranges::IndirectUnaryPredicate"
source_path: "cpp/experimental/ranges/iterator/IndirectUnaryPredicate"
header: "<experimental/ranges/iterator>"
category: "experimental"
---

## Declarations
```cpp
template< class F, class I >
concept bool IndirectUnaryPredicate =
Readable<I> && CopyConstructible<F> &&
Predicate<F&, ranges::value_type_t<I>&> &&
Predicate<F&, ranges::reference_t<I>> &&
Predicate<F&, ranges::iter_common_reference_t<I>>;
```
_(ranges TS)_
