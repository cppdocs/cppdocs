---
title: "std::wctomb"
source_path: "cpp/string/multibyte/wctomb"
header: "<cstdlib>"
category: "string"
---

Converts a wide character wc to multibyte encoding and stores it (including any shift sequences) in the char array whose first element is pointed to by s. No more than MB_CUR_MAX characters are stored. The conversion is affected by the current locale's LC_CTYPE category.

## Declarations
```cpp
int wctomb( char* s, wchar_t wc );
```

## Parameters
- `s`: pointer to the character array for output
- `wc`: wide character to convert

## Return value
If s is not a null pointer, returns the number of bytes that are contained in the multibyte representation of wc or -1 if wc is not a valid character.

## Notes
Each call to wctomb updates the internal global conversion state (a static object of type [std::mbstate_t](/cpp/string/multibyte/mbstate_t/), only known to this function). If the multibyte encoding uses shift states, this function is not reentrant. In any case, multiple threads should not call wctomb without synchronization: [std::wcrtomb](/cpp/string/multibyte/wcrtomb/) may be used instead.

## Example
```cpp
#include <clocale>
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <string>
 
void print_wide(const std::wstring& wstr)
{
    bool shifts = std::wctomb(nullptr, 0); // reset the conversion state
    std::cout << "shift sequences are " << (shifts ? "" : "not" )
              << " used\n" << std::uppercase << std::setfill('0');
    for (const wchar_t wc : wstr)
    {
        std::string mb(MB_CUR_MAX, '\0');
        const int ret = std::wctomb(&mb[0], wc);
        const char* s = ret > 1 ? "s" : "";
        std::cout << "multibyte char '" << mb << "' is " << ret
                  << " byte" << s << ": [" << std::hex;
        for (int i{0}; i != ret; ++i)
        {
            const int c = 0xFF & mb[i];
            std::cout << (i ? " " : "") << std::setw(2) << c;
        }
        std::cout << "]\n" << std::dec;
    }
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    std::wstring wstr = L"z\u00df\u6c34\U0001d10b"; // or L"zß水𝄋"
    print_wide(wstr);
}
```

## See also
- [mbtowc](/cpp/string/multibyte/mbtowc/)
- [wcrtomb](/cpp/string/multibyte/wcrtomb/)
- [do_out](/cpp/locale/codecvt/out/)
- [C documentation](/c/string/multibyte/wctomb/)
