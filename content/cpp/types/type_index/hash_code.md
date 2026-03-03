---
title: "std::type_index::hash_code"
source_path: "cpp/types/type_index/hash_code"
category: "types"
since: "C++11"
---

Returns the hash code of the associated [std::type_info](/cpp/types/type_info/) object. Equivalent to calling [type_info::hash_code](/cpp/types/type_info/hash_code/) directly.

## Declarations
```cpp
std::size_t hash_code() const noexcept;
```
_(since C++11)_

## Return value
The hash code of the associated [std::type_info](/cpp/types/type_info/) object.

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2144 | C++11 | type_index::hash_code was not required to be noexcept | required |

## See also
- [std::hash<std::type_index>](/cpp/types/type_index/hash/)
- [std::type_index](/cpp/types/type_index/)
