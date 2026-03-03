---
title: "std::experimental::ranges::Common"
source_path: "cpp/experimental/ranges/concepts/Common"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Common<T, U> specifies that two types T and U share a common type (as computed by ranges::common_type_t) to which both can be converted.

## Declarations
```cpp
template< class T, class U >
concept bool Common =
Same<ranges::common_type_t<T, U>, ranges::common_type_t<U, T>> &&
ConvertibleTo<T, ranges::common_type_t<T, U>> &&
ConvertibleTo<U, ranges::common_type_t<T, U>> &&
CommonReference<
std::add_lvalue_reference_t<const T>,
std::add_lvalue_reference_t<const U>> &&
CommonReference<
std::add_lvalue_reference_t<ranges::common_type_t<T, U>>,
ranges::common_reference_t<
std::add_lvalue_reference_t<const T>,
std::add_lvalue_reference_t<const U>>>;
```
_(ranges TS)_

## See also
- [common_type](/cpp/experimental/ranges/type_traits/common_type/)
- [common_reference](/cpp/experimental/ranges/type_traits/common_reference/)
- [CommonReference](/cpp/experimental/ranges/concepts/commonreference/)
