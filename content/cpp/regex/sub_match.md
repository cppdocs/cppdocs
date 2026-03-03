---
title: "std::sub_match"
source_path: "cpp/regex/sub_match"
header: "<regex>"
category: "regex"
since: "C++11"
---

The class template std::sub_match is used by the regular expression engine to denote sequences of characters matched by marked sub-expressions.
A match is a [begin,end) pair within the target range matched by the regular expression, but with additional observer functions to enhance code clarity.

## Declarations
```cpp
template< class BidirIt >
class sub_match;
```
_(since C++11)_

## Example
```cpp
#include <cassert>
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string sentence{"Friday the thirteenth."};
    const std::regex re{"([A-z]+) ([a-z]+) ([a-z]+)"};
    std::smatch words;
    std::regex_search(sentence, words, re);
    std::cout << std::boolalpha;
    for (const auto& m : words)
    {
        assert(m.matched);
        std::cout << "m: [" << m << "], m.length(): " << m.length() << ", "
                     "*m.first: '" << *m.first << "', "
                     "*m.second: '" << *m.second << "'\n";
    }
}
```

## See also
- [regex_token_iterator](/cpp/regex/regex_token_iterator/)
