---
title: "std::regex_constants::syntax_option_type"
source_path: "cpp/regex/syntax_option_type"
header: "<regex>"
category: "regex"
since: "C++11"
---

1) The syntax_option_type is a [BitmaskType](/cpp/named_req/bitmasktype/) that contains options that govern how regular expressions behave.

## Declarations
```cpp
using syntax_option_type = /* implementation-defined */;
```
_(since C++11)_

```cpp
constexpr syntax_option_type icase = /* unspecified */;
constexpr syntax_option_type nosubs = /* unspecified */;
constexpr syntax_option_type optimize = /* unspecified */;
constexpr syntax_option_type collate = /* unspecified */;
constexpr syntax_option_type ECMAScript = /* unspecified */;
constexpr syntax_option_type basic = /* unspecified */;
constexpr syntax_option_type extended = /* unspecified */;
constexpr syntax_option_type awk = /* unspecified */;
constexpr syntax_option_type grep = /* unspecified */;
constexpr syntax_option_type egrep = /* unspecified */;
```
_(since C++11) (inline since C++17)_

```cpp
inline constexpr syntax_option_type multiline = /* unspecified */;
```
_(since C++17)_

## Notes
Because POSIX uses "leftmost longest" matching rule (the longest matching subsequence is matched, and if there are several such subsequences, the first one is matched), it is not suitable, for example, for parsing markup languages: a POSIX regex such as "<tag[^>]*>.*</tag>" would match everything from the first "<tag" to the last "</tag>", including every "</tag>" and "<tag>" in-between. On the other hand, ECMAScript supports non-greedy matches, and the ECMAScript regex "<tag[^>]*>.*?</tag>" would match only until the first closing tag.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string str = "zzxayyzz";
    std::regex re1(".*(a|xayy)"); // ECMA
    std::regex re2(".*(a|xayy)", std::regex::extended); // POSIX
 
    std::cout << "Searching for .*(a|xayy) in zzxayyzz:\n";
    std::smatch m;
    std::regex_search(str, m, re1);
    std::cout << "  ECMA (depth first search) match: " << m[0] << '\n';
    std::regex_search(str, m, re2);
    std::cout << "  POSIX (leftmost longest)  match: " << m[0] << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2053 | C++11 | the constants were declared static | removed the static specifier |

## See also
- [basic_regex](/cpp/regex/basic_regex/)
