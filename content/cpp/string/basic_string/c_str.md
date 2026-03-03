---
title: "std::basic_string<CharT,Traits,Allocator>::c_str"
source_path: "cpp/string/basic_string/c_str"
category: "string"
---

Returns a pointer to a null-terminated character array with data equivalent to those stored in the string.

## Declarations
```cpp
const CharT* c_str() const;
```
_(noexcept since C++11) (constexpr since C++20)_

## Return value
Pointer to the underlying character storage.

## Notes
The pointer obtained from c_str() may only be treated as a pointer to a null-terminated character string if the string object does not contain other null characters.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <cstring>
#include <string>
 
extern "C" void c_func(const char* c_str)
{
    printf("c_func called with '%s'\n", c_str);
}
 
int main()
{
    std::string const s("Emplary");
    const char* p = s.c_str();
    assert(s.size() == std::strlen(p));
    assert(std::equal(s.begin(), s.end(), p));
    assert(std::equal(p, p + s.size(), s.begin()));
    assert('\0' == *(p + s.size()));
 
    c_func(s.c_str());
}
```

## See also
- [front](/cpp/string/basic_string/front/)
- [back](/cpp/string/basic_string/back/)
- [data](/cpp/string/basic_string/data/)
