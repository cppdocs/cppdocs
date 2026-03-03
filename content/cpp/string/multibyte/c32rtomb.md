---
title: "std::c32rtomb"
source_path: "cpp/string/multibyte/c32rtomb"
header: "<cuchar>"
category: "string"
since: "C++11"
---

Converts a UTF-32 character to its narrow multibyte representation.

## Declarations
```cpp
std::size_t c32rtomb( char* s, char32_t c32, std::mbstate_t* ps );
```
_(since C++11)_

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `c32`: the 32-bit character to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
On success, returns the number of bytes (including any shift sequences) written to the character array whose first element is pointed to by s. This value may be 0, e.g. when processing the first char32_t in multi-char32_t-character sequence (does not occur in UTF-32).

## Example
```cpp
#include <climits>
#include <clocale>
#include <cuchar>
#include <iomanip>
#include <iostream>
#include <string_view>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::u32string_view strv = U"zß水🍌"; // or z\u00df\u6c34\U0001F34C
    std::cout << "Processing " << strv.size() << " UTF-32 code units: [ ";
    for (char32_t c : strv)
        std::cout << std::showbase << std::hex << static_cast<int>(c) << ' ';
    std::cout << "]\n";
 
    std::mbstate_t state{};
    char out[MB_LEN_MAX]{};
    for (char32_t c : strv)
    {
        std::size_t rc = std::c32rtomb(out, c, &state);
        std::cout << static_cast<int>(c) << " converted to [ ";
        if (rc != (std::size_t) - 1)
            for (unsigned char c8 : std::string_view{out, rc})
                std::cout << +c8 << ' ';
        std::cout << "]\n";
    }
}
```

## See also
- [mbrtoc32](/cpp/string/multibyte/mbrtoc32/)
- [do_out](/cpp/locale/codecvt/out/)
- [C documentation](/c/string/multibyte/c32rtomb/)
