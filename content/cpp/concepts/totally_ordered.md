---
title: "std::totally_ordered, std::totally_ordered_with"
source_path: "cpp/concepts/totally_ordered"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

1) The concept std::totally_ordered specifies that the comparison operators ==,!=,<,>,<=,>= on a type yield results consistent with a [strict total order](https://en.wikipedia.org/wiki/Total_order#Strict_and_non-strict_total_orders) on the type.

## Declarations
```cpp
template< class T >
concept totally_ordered =
std::equality_comparable<T> && __PartiallyOrderedWith<T, T>;
```
_(since C++20)_

```cpp
template< class T, class U >
concept totally_ordered_with =
std::totally_ordered<T> &&
std::totally_ordered<U> &&
std::equality_comparable_with<T, U> &&
std::totally_ordered<
std::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>> &&
__PartiallyOrderedWith<T, U>;
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template< class T, class U >
concept __PartiallyOrderedWith =
requires(const std::remove_reference_t<T>& t,
const std::remove_reference_t<U>& u) {
{ t < u } -> boolean-testable;
{ t > u } -> boolean-testable;
{ t <= u } -> boolean-testable;
{ t >= u } -> boolean-testable;
{ u < t } -> boolean-testable;
{ u > t } -> boolean-testable;
{ u <= t } -> boolean-testable;
{ u >= t } -> boolean-testable;
};
```
_(exposition only*)_

## See also
- [three_way_comparablethree_way_comparable_with](/cpp/utility/compare/three_way_comparable/)
