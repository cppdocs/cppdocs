---
title: "std::sub_match<BidirIt>::swap"
source_path: "cpp/regex/sub_match/swap"
category: "regex"
since: "C++11"
---

Exchanges the contents of two sub-match objects. Equivalent to

## Declarations
```cpp
void swap( sub_match& s ) noexcept(/* see below */);
```
_(since C++11)_

## Parameters
- `s`: a sub_match to swap with

## Example
```cpp
#include <cassert>
#include <iostream>
#include <regex>
 
int main()
{
    const char* s = "Quick red cat";
    std::sub_match<const char*> x, y;
 
    x.first = &s[0];
    x.second = &s[5];
    x.matched = false;
 
    y.first = &s[012];
    y.second = &s[13];
    y.matched = true;
 
    std::cout << "Before swap:\n";
    std::cout << "x.str() = [" << x.str() << "]\n";
    std::cout << "y.str() = [" << y.str() << "]\n";
    assert(!x.matched and y.matched);
 
    x.swap(y);
 
    std::cout << "After swap:\n";
    std::cout << "x.str() = [" << x.str() << "]\n";
    std::cout << "y.str() = [" << y.str() << "]\n";
    assert(x.matched and !y.matched);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3204 | C++11 | std::sub_match used inherited std::pair::swap(pair&)which led to a slicing | std::sub_match::swap(sub_match&) is added |
