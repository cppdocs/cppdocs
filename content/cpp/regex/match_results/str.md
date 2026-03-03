---
title: "std::match_results<BidirIt,Alloc>::str"
source_path: "cpp/regex/match_results/str"
category: "regex"
since: "C++11"
---

Returns a string representing the indicated sub-match.

## Declarations
```cpp
string_type str( size_type n = 0 ) const;
```
_(since C++11)_

## Parameters
- `n`: integral number specifying which match to return

## Return value
Returns a string representing the specified match or sub match.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string target("baaaby");
    std::smatch sm;
 
    std::regex re1("a(a)*b");
    std::regex_search(target, sm, re1);
    std::cout << "entire match: " << sm.str(0) << '\n'
              << "submatch #1: " << sm.str(1) << '\n';
 
    std::regex re2("a(a*)b");
    std::regex_search(target, sm, re2);
    std::cout << "entire match: " << sm.str(0) << '\n'
              << "submatch #1: " << sm.str(1) << '\n';
}
```

## See also
- [operator[]](/cpp/regex/match_results/operator_at/)
