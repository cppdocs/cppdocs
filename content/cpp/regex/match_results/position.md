---
title: "std::match_results<BidirIt,Alloc>::position"
source_path: "cpp/regex/match_results/position"
category: "regex"
since: "C++11"
---

Returns the position of the first character of the specified sub-match.

## Declarations
```cpp
difference_type position( size_type n = 0 ) const;
```
_(since C++11)_

## Parameters
- `n`: integral number specifying which match to examine

## Return value
The position of the first character of the specified match or sub-match.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::regex re("a(a)*b");
    std::string target("aaab");
    std::smatch sm;
 
    std::regex_match(target, sm, re);
    std::cout << sm.position(1) << '\n';
}
```

## See also
- [operator[]](/cpp/regex/match_results/operator_at/)
