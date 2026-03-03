---
title: "std::filesystem::path::generic_string, std::filesystem::path::generic_wstring, std::filesystem::path::generic_u8string, std::filesystem::path::generic_u16string, std::filesystem::path::generic_u32string"
source_path: "cpp/filesystem/path/generic_string"
category: "filesystem"
since: "C++17"
---

Returns the internal pathname in generic pathname format, converted to specific string type. Conversion, if any, is specified as follows:

## Declarations
```cpp
template< class CharT, class Traits = std::char_traits<CharT>,
class Alloc = std::allocator<CharT> >
std::basic_string<CharT,Traits,Alloc>
generic_string( const Alloc& a = Alloc() ) const;
```
_(since C++17)_

```cpp
std::string generic_string() const;
```

```cpp
std::wstring generic_wstring() const;
```

```cpp
std::u16string generic_u16string() const;
```

```cpp
std::u32string generic_u32string() const;
```

```cpp
std::string generic_u8string() const;
```
_(since C++17) (until C++20)_

```cpp
std::u8string generic_u8string() const;
```
_(since C++20)_

## Parameters
- `a`: allocator to construct the string with

## Return value
The internal pathname in generic pathname format, converted to specified string type.

## Example
```cpp
#include <cstddef>
#include <filesystem>
#include <iomanip>
#include <iostream>
#include <span>
#include <string_view>
 
void print(std::string_view rem, auto const& str)
{
    std::cout << rem << std::hex << std::uppercase << std::setfill('0');
    for (const auto b : std::as_bytes(std::span{str}))
        std::cout << std::setw(2) << std::to_integer<unsigned>(b) << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::filesystem::path p{"/家/屋"};
    std::cout << p << '\n';
 
    print("string    : ", p.generic_string());
    print("u8string  : ", p.generic_u8string());
    print("u16string : ", p.generic_u16string());
    print("u32string : ", p.generic_u32string());
    print("wstring   : ", p.generic_wstring());
}
```

## See also
- [stringwstringu8stringu16stringu32string](/cpp/filesystem/path/string/)
