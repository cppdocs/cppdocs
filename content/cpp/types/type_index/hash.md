---
title: "std::hash<std::type_index>"
source_path: "cpp/types/type_index/hash"
header: "<typeindex>"
category: "types"
since: "C++11"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::type_index](/cpp/types/type_index/) allows users to obtain hashes of objects of type [std::type_index](/cpp/types/type_index/).

## Declarations
```cpp
template<> struct hash<std::type_index>;
```
_(since C++11)_

## See also
- [hash_code](/cpp/types/type_index/hash_code/)
