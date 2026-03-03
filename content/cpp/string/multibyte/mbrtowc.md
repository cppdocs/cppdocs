---
title: "std::mbrtowc"
source_path: "cpp/string/multibyte/mbrtowc"
header: "<cwchar>"
category: "string"
---

Converts a narrow multibyte character to a wide character.

## Declarations
```cpp
std::size_t mbrtowc( wchar_t* pwc,
const char* s,
std::size_t n,
std::mbstate_t* ps );
```

## Parameters
- `pwc`: pointer to the location where the resulting wide character will be written
- `s`: pointer to the multibyte character string used as input
- `n`: limit on the number of bytes in s that can be examined
- `ps`: pointer to the conversion state used when interpreting the multibyte string

## Return value
The first of the following that applies:

## Example
```cpp
#include <clocale>
#include <cstring>
#include <cwchar>
#include <iostream>
 
void print_mb(const char* ptr)
{
    std::mbstate_t state = std::mbstate_t(); // initial state
    const char* end = ptr + std::strlen(ptr);
    int len;
    wchar_t wc;
    while ((len = std::mbrtowc(&wc, ptr, end-ptr, &state)) > 0)
    {
        std::wcout << "Next " << len << " bytes are the character " << wc << '\n';
        ptr += len;
    }
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    const char* str = "z\u00df\u6c34\U0001d10b"; // or u8"zß水𝄋"
                      // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b";
    print_mb(str);
}
```

## See also
- [mbtowc](/cpp/string/multibyte/mbtowc/)
- [wcrtomb](/cpp/string/multibyte/wcrtomb/)
- [do_in](/cpp/locale/codecvt/in/)
- [C documentation](/c/string/multibyte/mbrtowc/)
