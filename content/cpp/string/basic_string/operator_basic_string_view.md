---
title: "std::basic_string<CharT,Traits,Allocator>::operator basic_string_view"
source_path: "cpp/string/basic_string/operator"
category: "string"
---

Returns a [std::basic_string_view](/cpp/string/basic_string_view/), constructed as if by [std::basic_string_view](/cpp/string/basic_string_view/)<CharT, Traits>(data(), size()).

## Declarations
```cpp
operator std::basic_string_view<CharT, Traits>() const noexcept;
```
_(since C++17) (constexpr since C++20)_

## Return value
A string view representing the entire contents of the string.

## Notes
It is the programmer's responsibility to ensure that the resulting string view does not outlive the string.

## Example
```cpp
#include <iostream>
#include <string>
#include <string_view>
 
void show_wstring_size(std::wstring_view wcstr_v)
{
    std::cout << wcstr_v.size() << " code points\n";
}
 
int main()
{
    std::string cppstr = "ラーメン";   // narrow string
    std::wstring wcstr = L"ラーメン";  // wide string
 
    // Implicit conversion from string to string_view
    // via std::string::operator string_view:
    std::string_view cppstr_v = cppstr;
 
    std::cout << cppstr_v << '\n'
              << cppstr_v.size() << " code units\n";
 
    // Implicit conversion from wstring to wstring_view
    // via std::wstring::operator wstring_view:
    show_wstring_size(wcstr);
}
```

## See also
- [(constructor)](/cpp/string/basic_string_view/basic_string_view/)
