---
title: "std::three_way_comparable, std::three_way_comparable_with"
source_path: "cpp/utility/compare/three_way_comparable"
header: "<compare>"
category: "utility"
since: "C++20"
---

1) The concept std::three_way_comparable specifies that the three way comparison operator <=> on T yield results consistent with the comparison category implied by Cat.

## Declarations
```cpp
template< class T, class Cat = std::partial_ordering >
concept three_way_comparable =
__WeaklyEqualityComparableWith<T, T> &&
__PartiallyOrderedWith<T, T> &&
requires(const std::remove_reference_t<T>& a,
const std::remove_reference_t<T>& b) {
{ a <=> b } -> __ComparesAs<Cat>;
};
```
_(since C++20)_

```cpp
template< class T, class U, class Cat = std::partial_ordering >
concept three_way_comparable_with =
std::three_way_comparable<T, Cat> &&
std::three_way_comparable<U, Cat> &&
__ComparisonCommonTypeWith<T, U> &&
std::three_way_comparable<
std::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>, Cat> &&
__WeaklyEqualityComparableWith<T, U> &&
__PartiallyOrderedWith<T, U> &&
requires(const std::remove_reference_t<T>& t,
const std::remove_reference_t<U>& u) {
{ t <=> u } -> __ComparesAs<Cat>;
{ u <=> t } -> __ComparesAs<Cat>;
};
```
_(since C++20)_

```cpp
template< class T, class Cat >
concept __ComparesAs =
std::same_as<std::common_comparison_category_t<T, Cat>, Cat>;
```
_(exposition only*)_

## See also
- [equality_comparableequality_comparable_with](/cpp/concepts/equality_comparable/)
- [totally_orderedtotally_ordered_with](/cpp/concepts/totally_ordered/)
