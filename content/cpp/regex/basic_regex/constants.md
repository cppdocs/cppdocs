---
title: "std::basic_regex constants"
source_path: "cpp/regex/basic_regex/constants"
header: "<regex>"
category: "regex"
since: "C++17"
---

[std::basic_regex](/cpp/regex/basic_regex/) defines several constants that govern general regex matching syntax.

## Declarations
```cpp
static constexpr std::regex_constants::syntax_option_type icase =
std::regex_constants::icase;
static constexpr std::regex_constants::syntax_option_type nosubs =
std::regex_constants::nosubs;
static constexpr std::regex_constants::syntax_option_type optimize =
std::regex_constants::optimize;
static constexpr std::regex_constants::syntax_option_type collate =
std::regex_constants::collate;
static constexpr std::regex_constants::syntax_option_type ECMAScript =
std::regex_constants::ECMAScript;
static constexpr std::regex_constants::syntax_option_type basic =
std::regex_constants::basic;
static constexpr std::regex_constants::syntax_option_type extended =
std::regex_constants::extended;
static constexpr std::regex_constants::syntax_option_type awk =
std::regex_constants::awk;
static constexpr std::regex_constants::syntax_option_type grep =
std::regex_constants::grep;
static constexpr std::regex_constants::syntax_option_type egrep =
std::regex_constants::egrep;
```

```cpp
static constexpr std::regex_constants::syntax_option_type multiline =
std::regex_constants::multiline;
```
_(since C++17)_

## See also
- [syntax_option_type](/cpp/regex/syntax_option_type/)
