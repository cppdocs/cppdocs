---
title: "std::sorted_equivalent_t, std::sorted_equivalent"
source_path: "cpp/container/sorted_equivalent"
header: "<flat_map>"
category: "container"
since: "C++23"
---

1) The type std::sorted_equivalent_t can be used in the function's (including constructor's) parameter list to match the intended tag.

## Declarations
```cpp
struct sorted_equivalent_t { explicit sorted_equivalent_t() = default; };
```
_(since C++23)_

```cpp
inline constexpr sorted_equivalent_t sorted_equivalent{};
```
_(since C++23)_

## See also
- [sorted_uniquesorted_unique_t](/cpp/container/sorted_unique/)
- [from_range_tfrom_range](/cpp/ranges/from_range/)
- [in_placein_place_typein_place_indexin_place_tin_place_type_tin_place_index_t](/cpp/utility/in_place/)
