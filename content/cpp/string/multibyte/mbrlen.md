---
title: "std::mbrlen"
source_path: "cpp/string/multibyte/mbrlen"
header: "<cwchar>"
category: "string"
---

Determines the size, in bytes, of the remainder of the multibyte character whose first byte is pointed to by s, given the current conversion state ps.

## Declarations
```cpp
std::size_t mbrlen( const char* s, std::size_t n, std::mbstate_t* ps);
```

## Parameters
- `s`: pointer to an element of a multibyte character string
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the variable holding the conversion state

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <string>
 
int main()
{
    // allow mbrlen() to work with UTF-8 multibyte encoding
    std::setlocale(LC_ALL, "en_US.utf8");
 
    // UTF-8 narrow multibyte encoding
    std::string str = "水"; // or u8"\u6c34" or "\xe6\xb0\xb4"
    std::mbstate_t mb = std::mbstate_t();
 
    // simple use: length of a complete multibyte character
    const std::size_t len = std::mbrlen(&str[0], str.size(), &mb);
    std::cout << "The length of " << str << " is " << len << " bytes\n";
 
    // advanced use: restarting in the middle of a multibyte character
    const std::size_t len1 = std::mbrlen(&str[0], 1, &mb);
    if (len1 == std::size_t(-2))
        std::cout << "The first 1 byte of " << str
                  << " is an incomplete multibyte char (mbrlen returns -2)\n";
 
    const std::size_t len2 = std::mbrlen(&str[1], str.size() - 1, &mb);
    std::cout << "The remaining " << str.size() - 1 << " bytes of " << str
              << " hold " << len2 << " bytes of the multibyte character\n";
 
    // error case:
    std::cout << "Attempting to call mbrlen() in the middle of " << str
              << " while in initial shift state returns "
              << (int)mbrlen(&str[1], str.size(), &mb) << '\n';
}
```

## See also
- [mbrtowc](/cpp/string/multibyte/mbrtowc/)
- [mblen](/cpp/string/multibyte/mblen/)
- [do_length](/cpp/locale/codecvt/length/)
- [C documentation](/c/string/multibyte/mbrlen/)
