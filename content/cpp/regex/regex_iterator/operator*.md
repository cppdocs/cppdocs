---
title: "std::regex_iterator<BidirIt,CharT,Traits>::operator*,operator->"
source_path: "cpp/regex/regex_iterator/operator"
category: "regex"
since: "C++11"
---

Extracts the current [std::match_results](/cpp/regex/match_results/) from a regex_iterator.

## Declarations
```cpp
const value_type& operator*() const;
```
_(since C++11)_

```cpp
const value_type* operator->() const;
```
_(since C++11)_

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string hay{"1.1a2b3cjk34"};
    std::regex needle("[1234]");
    using Ri = std::regex_iterator<std::string::iterator>;
    for (Ri it{hay.begin(), hay.end(), needle}, last{}; it != last; ++it)
        std::cout << it->str();
    std::cout << '\n';
}
```
