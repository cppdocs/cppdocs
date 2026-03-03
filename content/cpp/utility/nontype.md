---
title: "std::nontype, std::nontype_t"
source_path: "cpp/utility/nontype"
header: "<utility>"
category: "utility"
since: "C++26"
---

1) The class template std::nontype_t can be used in the constructor's parameter list to match the intended tag.

## Declarations
```cpp
template< auto V >
struct nontype_t { explicit nontype_t() = default; };
```
_(since C++26)_

```cpp
template< auto V >
constexpr std::nontype_t<V> nontype {};
```
_(since C++26)_

## See also
- [function_ref](/cpp/utility/functional/function_ref/)
