---
title: "std::experimental::ranges::WeaklyEqualityComparableWith"
source_path: "cpp/experimental/ranges/concepts/WeaklyEqualityComparableWith"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept WeaklyEqualityComparableWith<T, U> specifies that an object of type T and an object of type U can be compared for equality with each other (in either order) using both == and !=, and the results of the comparisons are consistent. More formally, WeaklyEqualityComparableWith<T, U> is satisfied only if given

## Declarations
```cpp
template< class T, class U >
concept bool WeaklyEqualityComparableWith =
requires(const std::remove_reference_t<T>& t,
const std::remove_reference_t<U>& u) {
{ t == u } -> Boolean&&;
{ t != u } -> Boolean&&;
{ u == t } -> Boolean&&;
{ u != t } -> Boolean&&;
};
```
_(ranges TS)_

## See also
- [EqualityComparableEqualityComparableWith](/cpp/experimental/ranges/concepts/equalitycomparable/)
