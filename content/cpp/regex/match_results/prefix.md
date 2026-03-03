---
title: "std::match_results<BidirIt,Alloc>::prefix"
source_path: "cpp/regex/match_results/prefix"
category: "regex"
since: "C++11"
---

Obtains a reference to the [std::sub_match](/cpp/regex/sub_match/) object representing the target sequence between the start of the beginning of the target sequence and the start of the entire match of the regular expression.

## Declarations
```cpp
const_reference prefix() const;
```
_(since C++11)_

## Return value
Reference to the unmatched prefix.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::regex re("a(a)*b");
    std::string target("baaaby");
    std::smatch sm;
 
    std::regex_search(target, sm, re);
    std::cout << sm.prefix().str() << '\n';
}
```

## See also
- [suffix](/cpp/regex/match_results/suffix/)
