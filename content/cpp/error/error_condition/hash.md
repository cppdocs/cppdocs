---
title: "std::hash<std::error_condition>"
source_path: "cpp/error/error_condition/hash"
header: "<system_error>"
category: "error"
since: "C++17"
---

The template specialization of [std::hash](/cpp/utility/hash/) for [std::error_condition](/cpp/error/error_condition/) allows users to obtain hashes of objects of type [std::error_condition](/cpp/error/error_condition/).

## Declarations
```cpp
template<> struct hash<std::error_condition>;
```
_(since C++17)_
