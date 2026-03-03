---
title: "std::error_category"
source_path: "cpp/error/error_category"
header: "<system_error>"
---

std::error_category serves as the base class for specific error category types, such as [std::system_category](/cpp/error/system_category/), [std::iostream_category](/cpp/io/iostream_category/), etc. Each specific category class defines the error_code - error_condition mapping and holds the explanatory strings for all error_conditions. The objects of error category classes are treated as singletons, passed by reference.

## Declarations
```cpp
class error_category;
```
_(since C++11)_

## See also
- [error_condition](/cpp/error/error_condition/)
- [error_code](/cpp/error/error_code/)
