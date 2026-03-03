---
title: "std::ios_base"
source_path: "cpp/io/ios_base"
header: "<ios>"
category: "io"
---

The class ios_base is a multipurpose class that serves as the base class for all I/O stream classes. It maintains several kinds of data:

## Declarations
```cpp
class ios_base;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1357(N3110) | C++98 | std::ios_base defined operator~, operator&and operator\| for types openmode, fmtflags andiostate, violating the requirements of BitmaskType[1] | removed these definitions |

## See also
- [basic_ios](/cpp/io/basic_ios/)
