---
title: "std::sorted_unique_t, std::sorted_unique"
source_path: "cpp/container/sorted_unique"
header: "<flat_map>"
category: "container"
since: "C++23"
---

1) The type std::sorted_unique_t can be used in the function's (including constructor's) parameter list to match the intended tag.

## Declarations
```cpp
struct sorted_unique_t { explicit sorted_unique_t() = default; };
```
_(since C++23)_

```cpp
inline constexpr sorted_unique_t sorted_unique{};
```
_(since C++23)_

## See also
- [sorted_equivalentsorted_equivalent_t](/cpp/container/sorted_equivalent/)
- [from_range_tfrom_range](/cpp/ranges/from_range/)
- [in_placein_place_typein_place_indexin_place_tin_place_type_tin_place_index_t](/cpp/utility/in_place/)
