---
title: "std::mbrtoc16"
source_path: "cpp/string/multibyte/mbrtoc16"
header: "<cuchar>"
category: "string"
since: "C++11"
---

Converts a narrow multibyte character to UTF-16 character representation.

## Declarations
```cpp
std::size_t mbrtoc16( char16_t* pc16,
const char* s,
std::size_t n,
std::mbstate_t* ps );
```
_(since C++11)_

## Parameters
- `pc16`: pointer to the location where the resulting 16-bit character will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
The first of the following that applies:

## Example
```cpp
#include <clocale>
#include <cstring>
#include <cuchar>
#include <cwchar>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
 
    std::string str = "z\u00df\u6c34\U0001F34C"; // or u8"zß水🍌"
 
    std::cout << "Processing " << str.size() << " bytes: [ " << std::showbase;
    for (unsigned char c: str)
        std::cout << std::hex << +c << ' ';
    std::cout << "]\n";
 
    std::mbstate_t state{}; // zero-initialized to initial state
    char16_t c16;
    const char* ptr = &str[0], *end = &str[0] + str.size();
 
    while (std::size_t rc = std::mbrtoc16(&c16, ptr, end - ptr + 1, &state))
    {
        std::cout << "Next UTF-16 char: " << std::hex
                  << static_cast<int>(c16) << " obtained from ";
        if (rc == (std::size_t)-3)
            std::cout << "earlier surrogate pair\n";
        else if (rc == (std::size_t) - 2)
            break;
        else if (rc == (std::size_t) - 1)
            break;
        else
        {
            std::cout << std::dec << rc << " bytes [ ";
            for (std::size_t n = 0; n < rc; ++n)
                std::cout << std::hex << +static_cast<unsigned char>(ptr[n]) << ' ';
            std::cout << "]\n";
            ptr += rc;
        }
    }
}
```

## See also
- [c16rtomb](/cpp/string/multibyte/c16rtomb/)
- [mbrtoc8](/cpp/string/multibyte/mbrtoc8/)
- [do_in](/cpp/locale/codecvt/in/)
- [C documentation](/c/string/multibyte/mbrtoc16/)
