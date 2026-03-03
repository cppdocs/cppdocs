---
title: "std::basic_regex<CharT,Traits>::mark_count"
source_path: "cpp/regex/basic_regex/mark_count"
category: "regex"
since: "C++11"
---

Returns the number of marked sub-expressions (also known as capture groups) within the regular expression.

## Declarations
```cpp
unsigned mark_count() const;
```
_(since C++11)_

## Return value
The number of marked sub-expressions within the regular expression.

## Example
```cpp
#include <iostream>
#include <regex>
 
int main()
{    
    std::regex r1{"abcde"};
    std::cout << "r1 has " << r1.mark_count() << " subexpressions" << '\n';
    // Expected: 0
 
    std::regex r2{"ab(c)de"};
    std::cout << "r2 has " << r2.mark_count() << " subexpressions" << '\n';
    // Expected: 1
 
    std::regex r3{"a(bc)d(e)"}; 
    std::cout << "r3 has " << r3.mark_count() << " subexpressions" << '\n';
    // Expected: 2
 
    // Nested sub-expressions
    std::regex r4{"abc(de(fg))"};
    std::cout << "r4 has " << r4.mark_count() << " subexpressions" << '\n';
    // Expected: 2
 
    // Escaped parentheses
    std::regex r5{"a(bc\\(\\)de)"};
    std::cout << "r5 has " << r5.mark_count() << " subexpressions" << '\n';
    // Expected: 1
 
    // Using nosubs flag
    std::regex r6{"ab(c)de", std::regex_constants::nosubs};
    std::cout << "r6 has " << r6.mark_count() << " subexpressions" << '\n';
    // Expected: 0
}
```
