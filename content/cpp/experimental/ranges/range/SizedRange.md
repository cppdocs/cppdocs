---
title: "std::experimental::ranges::SizedRange"
source_path: "cpp/experimental/ranges/range/SizedRange"
header: "<experimental/ranges/range>"
category: "experimental"
---

## Declarations
```cpp
template< class T >
concept bool SizedRange =
Range<T> &&
!ranges::disable_sized_range<std::remove_cv_t<std::remove_reference_t<T>>> &&
requires(T& t) {
{ ranges::size(t) }
-> ConvertibleTo<ranges::difference_type_t<ranges::iterator_t<T>>>;
};
```
_(ranges TS)_
