---
title: "std::common_reference_with"
source_path: "cpp/concepts/common_reference_with"
header: "<concepts>"
category: "concepts"
since: "C++20"
---

The concept common_reference_with<T, U> specifies that two types T and U share a common reference type (as computed by std::common_reference_t) to which both can be converted.

## Declarations
```cpp
template< class T, class U >
concept common_reference_with =
std::same_as<std::common_reference_t<T, U>, std::common_reference_t<U, T>> &&
std::convertible_to<T, std::common_reference_t<T, U>> &&
std::convertible_to<U, std::common_reference_t<T, U>>;
```
_(since C++20)_

## See also
- [common_referencebasic_common_reference](/cpp/types/common_reference/)
- [common_with](/cpp/concepts/common_with/)
- [common_type](/cpp/types/common_type/)
