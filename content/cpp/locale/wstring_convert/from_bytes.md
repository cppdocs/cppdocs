---
title: "std::wstring_convert<Codecvt,Elem,Wide_alloc,Byte_alloc>::from_bytes"
source_path: "cpp/locale/wstring_convert/from_bytes"
header: "<locale>"
category: "locale"
---

Converts a byte sequence to a wide string using the facet pointed to by [cvtptr](/cpp/locale/wstring_convert/#cvtptr) ﻿.

## Declarations
```cpp
wide_string from_bytes( char byte );
```

```cpp
wide_string from_bytes( const char* ptr );
```

```cpp
wide_string from_bytes( const byte_string& str );
```

```cpp
wide_string from_bytes( const char* first, const char* last );
```

## Return value
If the conversion succeeds, returns the conversion result. Otherwise, if *this is constructed with constructor overload [(4)](/cpp/locale/wstring_convert/wstring_convert/#Version_4), returns [wide_err_string](/cpp/locale/wstring_convert/#wide_err_string).

## Example
```cpp
#include <codecvt>
#include <cstdint>
#include <iostream>
#include <locale>
#include <string>
 
int main()
{
    std::string utf8 = "z\u00df\u6c34\U0001d10b"; // or u8"zß水𝄋"
                 // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b";
 
    // the UTF-8 / UTF-16 standard conversion facet
    std::u16string utf16 = 
        std::wstring_convert<std::codecvt_utf8_utf16<char16_t>,
                             char16_t>{}.from_bytes(utf8.data());
    std::cout << "UTF-16 conversion produced " << utf16.size()
              << " code units: " << std::showbase;
    for (char16_t c : utf16)
        std::cout << std::hex << static_cast<std::uint16_t>(c) << ' ';
 
    // the UTF-8 / UTF-32 standard conversion facet
    std::u32string utf32 =
        std::wstring_convert<std::codecvt_utf8<char32_t>, char32_t>{}.from_bytes(utf8);
    std::cout << "\nUTF-32 conversion produced " << std::dec
              << utf32.size() << " code units: ";
    for (char32_t c : utf32)
        std::cout << std::hex << static_cast<std::uint32_t>(c) << ' ';
    std::cout << '\n';
}
```

## See also
- [to_bytes](/cpp/locale/wstring_convert/to_bytes/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [do_in](/cpp/locale/codecvt/in/)
