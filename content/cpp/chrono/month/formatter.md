---
title: "std::formatter<std::chrono::month>"
source_path: "cpp/chrono/month/formatter"
header: "<chrono>"
category: "chrono"
since: "C++20"
---

Specialization of [std::formatter](/cpp/utility/format/formatter/) that defines formatting rules for a std::chrono::month.

## Declarations
```cpp
template< class CharT >
struct formatter<std::chrono::month, CharT>;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P2372R3 | C++20 | formatter used the global locale or passed locale | default "C" locale is used when L is absent |

## See also
- [format](/cpp/utility/format/format/)
