---
title: "std::c16rtomb"
source_path: "cpp/string/multibyte/c16rtomb"
header: "<cuchar>"
category: "string"
since: "C++11"
---

Converts a single code point from variable-length 16-bit character representation (typically, UTF-16) to a narrow multibyte character representation.

## Declarations
```cpp
std::size_t c16rtomb( char* s, char16_t c16, std::mbstate_t* ps );
```
_(since C++11)_

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `c16`: the 16-bit character to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
On success, returns the number of bytes (including any shift sequences) written to the character array whose first element is pointed to by s. This value may be 0, e.g. when processing the first char16_t in a surrogate pair.

## Notes
The C++ standard defers to the C standard for the semantics of this function. In C11 as published, unlike [std::mbrtoc16](/cpp/string/multibyte/mbrtoc16/), which converts variable-width multibyte (such as UTF-8) to variable-width 16-bit (such as UTF-16) encoding, this function can only convert single-unit 16-bit encoding, meaning it cannot convert UTF-16 to UTF-8 despite that being the original intent of this function. This was corrected by the post-C11 defect report [DR488](https://open-std.org/JTC1/SC22/WG14/www/docs/n2059.htm#dr_488).

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
    std::u16string_view strv = u"zß水🍌"; // or z\u00df\u6c34\U0001F34C
    std::cout << "Processing " << strv.size() << " UTF-16 code units: [ ";
    for (char16_t c : strv)
        std::cout << std::showbase << std::hex << static_cast<int>(c) << ' ';
    std::cout << "]\n";
 
    std::mbstate_t state{};
    char out[MB_LEN_MAX]{};
    for (char16_t c : strv)
    {
        std::size_t rc = std::c16rtomb(out, c, &state);
        std::cout << static_cast<int>(c) << " converted to [ ";
        if (rc != (std::size_t) - 1)
            for (unsigned char c8 : std::string_view{out, rc})
                std::cout << +c8 << ' ';
        std::cout << "]\n";
    }
}
```

## See also
- [mbrtoc16](/cpp/string/multibyte/mbrtoc16/)
- [c8rtomb](/cpp/string/multibyte/c8rtomb/)
- [do_out](/cpp/locale/codecvt/out/)
- [C documentation](/c/string/multibyte/c16rtomb/)
