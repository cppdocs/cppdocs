---
title: "std::from_range, std::from_range_t"
source_path: "cpp/ranges/from_range"
header: "<ranges>"
category: "ranges"
since: "C++23"
---

std::from_range is a disambiguation tag that can be passed to the constructors of the suitable containers to indicate that the contained member is range constructed.

## Declarations
```cpp
struct from_range_t { explicit from_range_t() = default; };
```
_(since C++23)_

```cpp
inline constexpr std::from_range_t from_range {};
```
_(since C++23)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Tagged constructors to construct from container compatible range

## Example
```cpp
#include <cassert>
#include <string>
 
int main()
{
#ifdef __cpp_lib_containers_ranges
    auto const range = {0x43, 43, 43};
    std::string str{std::from_range, range}; // uses tagged constructor
    assert(str == "C++");
#endif
}
```

## See also
- [in_placein_place_typein_place_indexin_place_tin_place_type_tin_place_index_t](/cpp/utility/in_place/)
- [sorted_equivalentsorted_equivalent_t](/cpp/container/sorted_equivalent/)
- [sorted_uniquesorted_unique_t](/cpp/container/sorted_unique/)
- [ranges::to](/cpp/ranges/to/)
