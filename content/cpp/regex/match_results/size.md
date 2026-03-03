---
title: "std::match_results<BidirIt,Alloc>::size"
source_path: "cpp/regex/match_results/size"
category: "regex"
since: "C++11"
---

Returns the number of submatches, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
size_type size() const noexcept;
```
_(since C++11)_

## Return value
The number of submatches.

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
 
    std::cout << sm.size() << '\n';
 
    std::regex_match(target, sm, re);
    std::cout << sm.size() << '\n';
}
```

## See also
- [begincbegin](/cpp/regex/match_results/begin/)
- [endcend](/cpp/regex/match_results/end/)
