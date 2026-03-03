---
title: "std::equality_comparable, std::equality_comparable_with"
source_path: "cpp/concepts/equality_comparable"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

1) The concept std::equality_comparable specifies that the comparison operators == and != on T reflects equality: == yields true if and only if the operands are equal.

## Declarations
```cpp
template< class T >
concept equality_comparable = __WeaklyEqualityComparableWith<T, T>;
```
_(since C++20)_

```cpp
template< class T, class U >
concept equality_comparable_with =
std::equality_comparable<T> &&
std::equality_comparable<U> &&
__ComparisonCommonTypeWith<T, U> &&
std::equality_comparable<
std::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>> &&
__WeaklyEqualityComparableWith<T, U>;
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template< class T, class U >
concept __WeaklyEqualityComparableWith =
requires(const std::remove_reference_t<T>& t,
const std::remove_reference_t<U>& u) {
{ t == u } -> boolean-testable;
{ t != u } -> boolean-testable;
{ u == t } -> boolean-testable;
{ u != t } -> boolean-testable;
};
```
_(exposition only*)_

```cpp
template< class T, class U >
concept __ComparisonCommonTypeWith =
std::common_reference_with<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>;
```
_(until C++23) (exposition only*)_

```cpp
template< class T, class U, class C = std::common_reference_t<const T&, const U&> >
concept _ComparisonCommonTypeWithImpl =
std::same_as<std::common_reference_t<const T&, const U&>,
std::common_reference_t<const U&, const T&>> &&
requires {
requires std::convertible_to<const T&, const C&> ||
std::convertible_to<T, const C&>;
requires std::convertible_to<const U&, const C&> ||
std::convertible_to<U, const C&>;
};
template< class T, class U >
concept __ComparisonCommonTypeWith =
_ComparisonCommonTypeWithImpl<std::remove_cvref_t<T>, std::remove_cvref_t<U>>;
```
_(since C++23) (exposition only*)_
