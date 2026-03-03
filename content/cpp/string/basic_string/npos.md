---
title: "std::basic_string<CharT,Traits,Allocator>::npos"
source_path: "cpp/string/basic_string/npos"
category: "string"
---

This is a special value equal to the maximum value representable by the type [size_type](/cpp/string/basic_string/#Member_types). The exact meaning depends on context, but it is generally used either as end of string indicator by the functions that expect a string index or as the error indicator by the functions that return a string index.

## Declarations
```cpp
static const size_type npos = -1;
```

## Example
```cpp
#include <bitset>
#include <iostream>
#include <string>
 
int main()
{
    // string search functions return npos if nothing is found
    std::string s = "test";
    if (s.find('a') == s.npos)
        std::cout << "no 'a' in 'test'\n";
 
    // functions that take string subsets as arguments 
    // use npos as the "all the way to the end" indicator
    std::string s2(s, 2, std::string::npos);
    std::cout << s2 << '\n';
 
    std::bitset<5> b("aaabb", std::string::npos, 'a', 'b');
    std::cout << b << '\n';
}
```

## See also
- [npos](/cpp/string/basic_string_view/npos/)
