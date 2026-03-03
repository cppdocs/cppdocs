---
title: "std::experimental::ranges::StrictTotallyOrdered, std::experimental::ranges::StrictTotallyOrderedWith"
source_path: "cpp/experimental/ranges/concepts/StrictTotallyOrdered"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

1) The concept StrictTotallyOrdered<T> specifies that the comparison operators ==,!=,<,>,<=,>= on T yield results consistent with a [strict total order](https://en.wikipedia.org/wiki/Total_order#Strict_total_order) on T.
StrictTotallyOrdered<T> is satisfied only if, given lvalues a, b and c of type const [std::remove_reference_t](/cpp/types/remove_reference/)<T>:
Exactly one of bool(a < b), bool(a > b) and bool(a == b) is true;If bool(a < b) and bool(b < c) are both true, then bool(a < c) is true;bool(a > b) == bool(b < a)bool(a >= b) == !bool(a < b)bool(a <= b) == !bool(b < a)

## Declarations
```cpp
template< class T >
concept bool StrictTotallyOrdered =
EqualityComparable<T> &&
requires(const std::remove_reference_t<T>& a,
const std::remove_reference_t<T>& b) {
{ a < b } -> Boolean&&;
{ a > b } -> Boolean&&;
{ a <= b } -> Boolean&&;
{ a >= b } -> Boolean&&;
};
```
_(ranges TS)_

```cpp
template< class T, class U >
concept bool StrictTotallyOrderedWith =
StrictTotallyOrdered<T> &&
StrictTotallyOrdered<U> &&
CommonReference<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&> &&
StrictTotallyOrdered<
ranges::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>> &&
EqualityComparableWith<T, U> &&
requires(const std::remove_reference_t<T>& t,
const std::remove_reference_t<U>& u) {
{ t < u } -> Boolean&&;
{ t > u } -> Boolean&&;
{ t <= u } -> Boolean&&;
{ t >= u } -> Boolean&&;
{ u < t } -> Boolean&&;
{ u > t } -> Boolean&&;
{ u <= t } -> Boolean&&;
{ u >= t } -> Boolean&&;
};
```
_(ranges TS)_
