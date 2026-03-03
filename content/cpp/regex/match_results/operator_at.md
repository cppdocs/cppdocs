---
title: "std::match_results<BidirIt,Alloc>::operator[]"
source_path: "cpp/regex/match_results/operator_at"
category: "regex"
since: "C++11"
---

If n > 0 and n < size(), returns a reference to the [std::sub_match](/cpp/regex/sub_match/) representing the part of the target sequence that was matched by the nth captured [marked subexpression](/cpp/regex/ecmascript/#Sub-expressions)).

## Declarations
```cpp
const_reference operator[]( size_type n ) const;
```
_(since C++11)_

## Parameters
- `n`: integral number specifying which match to return

## Return value
Reference to the [std::sub_match](/cpp/regex/sub_match/) representing the specified matched subrange within the target sequence.

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
    std::cout << "entire match: " << sm[0] << '\n'
              << "submatch #1: " << sm[1] << '\n';
 
    std::regex re2("a(a*)b");
    std::regex_search(target, sm, re2);
    std::cout << "entire match: " << sm[0] << '\n'
              << "submatch #1: " << sm[1] << '\n';
}
```

## See also
- [str](/cpp/regex/match_results/str/)
