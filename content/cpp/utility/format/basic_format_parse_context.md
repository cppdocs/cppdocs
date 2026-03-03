---
title: "std::basic_format_parse_context"
source_path: "cpp/utility/format/basic_format_parse_context"
header: "<format>"
category: "utility"
since: "C++20"
---

Provides access to the format string parsing state consisting of the format string range being parsed and the argument counter for automatic indexing.

## Declarations
```cpp
template< class CharT >
class basic_format_parse_context;
```
_(since C++20)_

## Example
This section is incompleteReason: no example

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3825 | C++20 | check_arg_id has a compile-time argumentid check, but next_arg_id did not have | added |
| LWG 3975 | C++20 | user specialization of basic_format_parse_context was allowed | disallowed |
