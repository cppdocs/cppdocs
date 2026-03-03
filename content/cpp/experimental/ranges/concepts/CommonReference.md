---
title: "std::experimental::ranges::CommonReference"
source_path: "cpp/experimental/ranges/concepts/CommonReference"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept CommonReference<T, U> specifies that two types T and U share a common reference type (as computed by ranges::common_reference_t) to which both can be converted.

## Declarations
```cpp
template< class T, class U >
concept bool CommonReference =
Same<ranges::common_reference_t<T, U>, ranges::common_reference_t<U, T>> &&
ConvertibleTo<T, ranges::common_reference_t<T, U>> &&
ConvertibleTo<U, ranges::common_reference_t<T, U>>;
```
_(ranges TS)_

## See also
- [common_reference](/cpp/experimental/ranges/type_traits/common_reference/)
- [Common](/cpp/experimental/ranges/concepts/common/)
- [common_type](/cpp/experimental/ranges/type_traits/common_type/)
