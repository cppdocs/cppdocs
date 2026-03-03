---
title: "std::sub_match<BidirIt>::sub_match"
source_path: "cpp/regex/sub_match/sub_match"
category: "regex"
since: "C++11"
---

Default constructs a [std::sub_match](/cpp/regex/sub_match/). The [matched](/cpp/regex/sub_match/#Data_members) member is set to false and the inherited members [first](/cpp/regex/sub_match/#Data_members) and [second](/cpp/regex/sub_match/#Data_members) are value-initialized.

## Declarations
```cpp
constexpr sub_match();
```
_(since C++11)_

## Example
```cpp
#include <cassert>
#include <regex>
 
int main()
{
    std::sub_match<const char*> s;
    assert(!s.matched);
}
```
