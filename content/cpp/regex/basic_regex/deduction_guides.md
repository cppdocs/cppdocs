---
title: "deduction guides for std::basic_regex"
source_path: "cpp/regex/basic_regex/deduction_guides"
header: "<regex>"
category: "regex"
since: "C++17"
---

This [deduction guide](/cpp/language/ctad/) is provided for [std::basic_regex](/cpp/regex/basic_regex/) to allow deduction from an iterator range.

## Declarations
```cpp
template< class ForwardIt >
basic_regex( ForwardIt, ForwardIt,
std::regex_constants::syntax_option_type = std::regex_constants::ECMAScript )
-> basic_regex<typename std::iterator_traits<ForwardIt>::value_type>;
```
_(since C++17)_

## Example
```cpp
#include <regex>
#include <vector>
 
int main()
{
    std::vector<char> v = {'a', 'b', 'c'};
    std::basic_regex re(v.begin(), v.end()); // uses explicit deduction guide
}
```
