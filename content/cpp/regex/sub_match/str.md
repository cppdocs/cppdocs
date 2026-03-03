---
title: "std::sub_match<BidirIt>::operator string_type, std::sub_match<BidirIt>::str"
source_path: "cpp/regex/sub_match/str"
category: "regex"
---

Converts to an object of the underlying [std::basic_string](/cpp/string/basic_string/) type.

## Declarations
```cpp
operator string_type() const;
```

```cpp
string_type str() const;
```

## Return value
The matched character sequence as an object of the underlying [std::basic_string](/cpp/string/basic_string/) type. If the matched member is false, then returns the empty string.

## Example
```cpp
#include <cassert>
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    const std::string html{R"("<a href="https://cppreference.com/">)"};
    const std::regex re{"(http|https|ftp)://([a-z]+)\\.([a-z]{3})"};
    std::smatch parts;
    std::regex_search(html, parts, re);
    for (std::ssub_match const& sub : parts)
    {
        const std::string s = sub; // (1) implicit conversion
        assert(s == sub.str());    // (2)
        std::cout << s << '\n';
    }
}
```
