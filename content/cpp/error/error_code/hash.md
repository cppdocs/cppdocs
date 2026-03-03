---
title: "std::hash<std::error_code>"
source_path: "cpp/error/error_code/hash"
header: "<system_error>"
category: "error"
since: "C++11"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::error_code](/cpp/error/error_code/) allows users to obtain hashes of objects of type [std::error_code](/cpp/error/error_code/).

## Declarations
```cpp
template<> struct hash<std::error_code>;
```
_(since C++11)_
