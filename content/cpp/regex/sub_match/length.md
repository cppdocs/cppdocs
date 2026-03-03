---
title: "std::sub_match<BidirIt>::length"
source_path: "cpp/regex/sub_match/length"
category: "regex"
---

Returns the number of characters in the match.

## Declarations
```cpp
difference_type length() const;
```

## Return value
[std::distance](/cpp/iterator/distance/)(first, second) if the match is valid, 0 otherwise.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string sentence{"Quick red fox jumped over a lazy cow."};
    const std::regex re{"([A-z]+) ([a-z]+) ([a-z]+) ([a-z]+)"};
    std::smatch words;
    std::regex_search(sentence, words, re);
    for (const auto& m : words)
        std::cout << '[' << m << "], length = " << m.length() << '\n';
}
```
