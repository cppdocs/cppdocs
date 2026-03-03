---
title: "std::formatter<pair-or-tuple>"
source_path: "cpp/utility/format/tuple_formatter"
header: "<format>"
category: "utility"
since: "C++23"
---

The template specialization of [std::formatter](/cpp/utility/format/formatter/) for the [std::pair](/cpp/utility/pair/) and [std::tuple](/cpp/utility/tuple/) allows users to convert a pair or a tuple to its textual representation as a collection of elements using [formatting functions](/cpp/utility/format/).

## Declarations
```cpp
template< class CharT, std::formattable<CharT>... Ts >
struct formatter</*pair-or-tuple*/<Ts...>, CharT>;
```
_(since C++23)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3892 | C++23 | the formatting of nested tuples was incorrect | corrected |

## See also
- [formatter](/cpp/utility/format/formatter/)
