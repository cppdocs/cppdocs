---
title: "std::match_results<BidirIt,Alloc>::ready"
source_path: "cpp/regex/match_results/ready"
category: "regex"
since: "C++11"
---

Indicates if the match results are ready (valid) or not.

## Declarations
```cpp
bool ready() const;
```
_(since C++11)_

## Return value
true if the match results are ready, false otherwise.

## Example
```cpp
#include <iostream>
#include <regex>
#include <string>
 
int main()
{
    std::string target("big-red-cat");
    std::smatch sm;
    std::cout << "Default constructed smatch is "
              << (sm.ready() ? "ready.\n" : "not ready.\n");
 
    std::regex re1(".*-red-.*");
    std::regex_search(target, sm, re1);
 
    std::cout << "After search, smatch is "
              << (sm.ready() ? "ready.\n" : "not ready.\n");
}
```
