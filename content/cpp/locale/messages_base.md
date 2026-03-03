---
title: "std::messages_base"
source_path: "cpp/locale/messages_base"
header: "<locale>"
category: "locale"
---

The class std::messages_base provides a type definition which is inherited and used by the [std::messages](/cpp/locale/messages/) facets.

## Declarations
```cpp
class messages_base;
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2028 | C++98 | catalog was defined as int | defined as an unspecified signed integer type[1] |

## See also
- [messages](/cpp/locale/messages/)
