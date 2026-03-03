---
title: "std::wstring_convert<Codecvt,Elem,Wide_alloc,Byte_alloc>::to_bytes"
source_path: "cpp/locale/wstring_convert/to_bytes"
header: "<locale>"
category: "locale"
---

Converts a wide sequence to a byte string using the facet pointed to by [cvtptr](/cpp/locale/wstring_convert/#cvtptr) ﻿.

## Declarations
```cpp
byte_string to_bytes( Elem wchar );
```

```cpp
byte_string to_bytes( const Elem* wptr );
```

```cpp
byte_string to_bytes( const wide_string& wstr );
```

```cpp
byte_string to_bytes( const Elem* first, const Elem* last );
```

## Return value
If the conversion succeeds, returns the conversion result. Otherwise, if *this is constructed with constructor overload [(4)](/cpp/locale/wstring_convert/wstring_convert/), returns [byte_err_string](/cpp/locale/wstring_convert/#byte_err_string).

## Example
```cpp
#include <codecvt>
#include <iomanip>
#include <iostream>
#include <locale>
#include <string>
 
// utility function for output
void hex_print(const std::string& s)
{
    std::cout << std::hex << std::setfill('0');
    for (unsigned char c : s)
        std::cout << std::setw(2) << static_cast<int>(c) << ' ';
    std::cout << std::dec << '\n';
}
 
int main()
{
    // wide character data
    std::wstring wstr = L"z\u00df\u6c34\U0001f34c"; // or L"zß水🍌"
 
    // wide to UTF-8
    std::wstring_convert<std::codecvt_utf8<wchar_t>> conv1;
    std::string u8str = conv1.to_bytes(wstr);
    std::cout << "UTF-8 conversion produced " << u8str.size() << " bytes:\n";
    hex_print(u8str);
 
    // wide to UTF-16le
    std::wstring_convert<std::codecvt_utf16<wchar_t, 0x10ffff, std::little_endian>> conv2;
    std::string u16str = conv2.to_bytes(wstr);
    std::cout << "UTF-16le conversion produced " << u16str.size() << " bytes:\n";
    hex_print(u16str);
}
```

## See also
- [from_bytes](/cpp/locale/wstring_convert/from_bytes/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [do_out](/cpp/locale/codecvt/out/)
