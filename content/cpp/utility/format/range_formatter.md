---
title: "std::range_formatter"
source_path: "cpp/utility/format/range_formatter"
header: "<format>"
category: "utility"
since: "C++23"
---

std::range_formatter is a helper class template for implementing range [std::formatter](/cpp/utility/format/formatter/) specializations.

## Declarations
```cpp
template< class T, class CharT = char >
requires std::same_as<std::remove_cvref_t<T>, T> && std::formattable<T, CharT>
class range_formatter;
```
_(since C++23)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3892 | C++23 | the formatting of nested ranges was incorrect | corrected |

## See also
- [formatter](/cpp/utility/format/formatter/)
