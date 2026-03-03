---
title: "std::regex_constants::match_flag_type"
source_path: "cpp/regex/match_flag_type"
header: "<regex>"
category: "regex"
since: "C++11"
---

1) match_flag_type is a [BitmaskType](/cpp/named_req/bitmasktype/) that specifies additional regular expression matching options.

## Declarations
```cpp
using match_flag_type = /* implementation-defined */;
```
_(since C++11)_

```cpp
constexpr match_flag_type match_default = {};
constexpr match_flag_type match_not_bol = /* unspecified */;
constexpr match_flag_type match_not_eol = /* unspecified */;
constexpr match_flag_type match_not_bow = /* unspecified */;
constexpr match_flag_type match_not_eow = /* unspecified */;
constexpr match_flag_type match_any = /* unspecified */;
constexpr match_flag_type match_not_null = /* unspecified */;
constexpr match_flag_type match_continuous = /* unspecified */;
constexpr match_flag_type match_prev_avail = /* unspecified */;
constexpr match_flag_type format_default = {};
constexpr match_flag_type format_sed = /* unspecified */;
constexpr match_flag_type format_no_copy = /* unspecified */;
constexpr match_flag_type format_first_only = /* unspecified */;
```
_(since C++11) (inline since C++17)_

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2053 | C++11 | 1. the constants were declared static2. match_default and format_default were initialized from 0 | 1. removed the static specifier2. initialized from {} |

## See also
- [regex_match](/cpp/regex/regex_match/)
- [syntax_option_type](/cpp/regex/syntax_option_type/)
- [error_type](/cpp/regex/error_type/)
