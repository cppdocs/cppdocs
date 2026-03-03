---
title: "std::common_with"
source_path: "cpp/concepts/common_with"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept common_with<T, U> specifies that two types T and U share a common type (as computed by [std::common_type_t](/cpp/types/common_type/)) to which both can be converted.

## Declarations
```cpp
template< class T, class U >
concept common_with =
std::same_as<std::common_type_t<T, U>, std::common_type_t<U, T>> &&
requires {
static_cast<std::common_type_t<T, U>>(std::declval<T>());
static_cast<std::common_type_t<T, U>>(std::declval<U>());
} &&
std::common_reference_with<
std::add_lvalue_reference_t<const T>,
std::add_lvalue_reference_t<const U>> &&
std::common_reference_with<
std::add_lvalue_reference_t<std::common_type_t<T, U>>,
std::common_reference_t<
std::add_lvalue_reference_t<const T>,
std::add_lvalue_reference_t<const U>>>;
```
_(since C++20)_

## See also
- [common_type](/cpp/types/common_type/)
- [common_referencebasic_common_reference](/cpp/types/common_reference/)
- [common_reference_with](/cpp/concepts/common_reference_with/)
