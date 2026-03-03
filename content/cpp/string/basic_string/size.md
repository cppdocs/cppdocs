---
title: "std::basic_string<CharT,Traits,Allocator>::size, std::basic_string<CharT,Traits,Allocator>::length"
source_path: "cpp/string/basic_string/size"
category: "string"
---

Returns the number of CharT elements in the string, i.e. [std::distance](/cpp/iterator/distance/)(begin(), end()).

## Declarations
```cpp
size_type size() const;
```
_(noexcept since C++11)(constexpr since C++20)_

```cpp
size_type length() const;
```
_(noexcept since C++11)(constexpr since C++20)_

## Return value
The number of CharT elements in the string.

## Notes
For [std::string](/cpp/string/basic_string/), the elements are bytes (objects of type char), which are not the same as characters if a multibyte encoding such as UTF-8 is used.

## Example
```cpp
#include <cassert>
#include <iterator>
#include <string>
 
int main()
{
    std::string s("Exemplar");
    assert(8 == s.size());
    assert(s.size() == s.length());
    assert(s.size() == static_cast<std::string::size_type>(
        std::distance(s.begin(), s.end())));
 
    std::u32string a(U"ハロー・ワールド"); // 8 code points
    assert(8 == a.size()); // 8 code units in UTF-32
 
    std::u16string b(u"ハロー・ワールド"); // 8 code points
    assert(8 == b.size()); // 8 code units in UTF-16
 
    std::string c("ハロー・ワールド"); // 8 code points
    assert(24 == c.size()); // 24 code units in UTF-8
 
    #if __cpp_lib_char8_t >= 201907L
    std::u8string d(u8"ハロー・ワールド"); // 8 code points
    assert(24 == d.size()); // 24 code units in UTF-8
    #endif
}
```

## See also
- [empty](/cpp/string/basic_string/empty/)
- [max_size](/cpp/string/basic_string/max_size/)
- [sizelength](/cpp/string/basic_string_view/size/)
