---
title: "std::experimental::ranges::Relation"
source_path: "cpp/experimental/ranges/concepts/Relation"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Relation<R, T, U> specifies that R defines a binary relation over the set of expressions whose type and value category are those encoded by either T or U.

## Declarations
```cpp
template< class R, class T, class U >
concept bool Relation =
Predicate<R, T, T> &&
Predicate<R, U, U> &&
CommonReference<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&> &&
Predicate<R,
ranges::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>,
ranges::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>> &&
Predicate<R, T, U> &&
Predicate<R, U, T>;
```
_(ranges TS)_
