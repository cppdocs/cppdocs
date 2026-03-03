---
title: "std::basic_string<CharT,Traits,Allocator>::empty"
source_path: "cpp/string/basic_string/empty"
category: "string"
---

Checks if the string has no characters, i.e. whether begin() == end().

## Declarations
```cpp
bool empty() const;
```
_(noexcept since C++11) (constexpr since C++20)_

## Return value
true if the string is empty, false otherwise

## Example
```cpp
#include <iostream>
#include <string>
 
int main()
{
    std::string s;
    std::boolalpha(std::cout);
    std::cout << "s.empty():" << s.empty() << "\t s:'" << s << "'\n";
 
    s = "Exemplar";
    std::cout << "s.empty():" << s.empty() << "\t s:'" << s << "'\n";
 
    s = "";
    std::cout << "s.empty():" << s.empty() << "\t s:'" << s << "'\n";
}
```

## See also
- [sizelength](/cpp/string/basic_string/size/)
- [max_size](/cpp/string/basic_string/max_size/)
- [capacity](/cpp/string/basic_string/capacity/)
- [sizessize](/cpp/iterator/size/)
- [empty](/cpp/iterator/empty/)
- [empty](/cpp/string/basic_string_view/empty/)
