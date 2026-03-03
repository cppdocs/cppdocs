---
title: "std::experimental::ranges::EqualityComparable, std::experimental::ranges::EqualityComparableWith"
source_path: "cpp/experimental/ranges/concepts/EqualityComparable"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

1) The concept EqualityComparable<T> specifies that the comparison operators == and != on T reflects equality: == yields true if and only if the operands are equal.

## Declarations
```cpp
template< class T >
concept bool EqualityComparable = WeaklyEqualityComparableWith<T, T>;
```
_(ranges TS)_

```cpp
template< class T, class U >
concept bool EqualityComparableWith =
EqualityComparable<T> &&
EqualityComparable<U> &&
CommonReference<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&> &&
EqualityComparable<
ranges::common_reference_t<
const std::remove_reference_t<T>&,
const std::remove_reference_t<U>&>> &&
WeaklyEqualityComparableWith<T, U>;
```
_(ranges TS)_
