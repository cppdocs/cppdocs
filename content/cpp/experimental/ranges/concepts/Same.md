---
title: "std::experimental::ranges::Same"
source_path: "cpp/experimental/ranges/concepts/Same"
header: "<experimental/ranges/concepts>"
category: "experimental"
---

The concept Same<T, U> is satisfied if and only if T and U denote the same type.

## Declarations
```cpp
template< class T, class U >
concept bool Same = std::is_same<T, U>::value; // see below
```
_(ranges TS)_

## Notes
The additional requirement on constraint checking differentiates Same from [std::is_same](/cpp/types/is_same/).

## See also
- [is_same](/cpp/types/is_same/)
