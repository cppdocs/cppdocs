---
title: "std::match_results<BidirIt,Alloc>::suffix"
source_path: "cpp/regex/match_results/suffix"
category: "regex"
since: "C++11"
---

Obtains a reference to the [std::sub_match](/cpp/regex/sub_match/) object representing the target sequence between the end of the entire match of the regular expression and the end of the target sequence.

## Declarations
```cpp
const_reference suffix() const;
```
_(since C++11)_

## Return value
Reference to the unmatched suffix.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::regex re("a(a)*by");
    std::string target("baaaby123");
    std::smatch sm;
 
    std::regex_search(target, sm, re);
    std::cout << sm.suffix() << '\n';
}
```

## See also
- [prefix](/cpp/regex/match_results/prefix/)
