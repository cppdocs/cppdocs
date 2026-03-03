---
title: "std::basic_string_view<CharT,Traits>::copy"
source_path: "cpp/string/basic_string_view/copy"
category: "string"
---

Copies the substring [pos,pos + rcount) to the character array pointed to by dest, where rcount is the smaller of count and size() - pos.

## Declarations
```cpp
size_type copy( CharT* dest, size_type count, size_type pos = 0 ) const;
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `dest`: pointer to the destination character string
- `count`: requested substring length
- `pos`: position of the first character

## Return value
Number of characters copied.

## Example
```cpp
#include <array>
#include <cstddef>
#include <iostream>
#include <stdexcept>
#include <string_view>
 
int main()
{
    constexpr std::basic_string_view<char> source{"ABCDEF"};
    std::array<char, 8> dest;
    std::size_t count{}, pos{};
 
    dest.fill('\0');
    source.copy(dest.data(), count = 4); // pos = 0
    std::cout << dest.data() << '\n'; // ABCD
 
    dest.fill('\0');
    source.copy(dest.data(), count = 4, pos = 1);
    std::cout << dest.data() << '\n'; // BCDE
 
    dest.fill('\0');
    source.copy(dest.data(), count = 42, pos = 2); // ok, count -> 4
    std::cout << dest.data() << '\n'; // CDEF
 
    try
    {
        source.copy(dest.data(), count = 1, pos = 666); // throws: pos > size()
    }
    catch (std::out_of_range const& ex)
    {
        std::cout << ex.what() << '\n';
    }
}
```

## See also
- [substr](/cpp/string/basic_string_view/substr/)
- [copy](/cpp/string/basic_string/copy/)
- [copycopy_if](/cpp/algorithm/copy/)
- [memcpy](/cpp/string/byte/memcpy/)
