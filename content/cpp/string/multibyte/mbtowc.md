---
title: "std::mbtowc"
source_path: "cpp/string/multibyte/mbtowc"
header: "<cstdlib>"
category: "string"
---

Converts a multibyte character whose first byte is pointed to by s to a wide character, written to *pwc if pwc is not null.

## Declarations
```cpp
int mbtowc( wchar_t* pwc, const char* s, std::size_t n );
```

## Parameters
- `s`: pointer to the multibyte character
- `n`: limit on the number of bytes in s that can be examined
- `pwc`: pointer to the wide character for output

## Return value
If s is not a null pointer, returns the number of bytes that are contained in the multibyte character or -1 if the first bytes pointed to by s do not form a valid multibyte character or 0 if s is pointing at the null character '\0'.

## Notes
Each call to mbtowc updates the internal global conversion state (a static object of type [std::mbstate_t](/cpp/string/multibyte/mbstate_t/), only known to this function). If the multibyte encoding uses shift states, care must be taken to avoid backtracking or multiple scans. In any case, multiple threads should not call mbtowc without synchronization: [std::mbrtowc](/cpp/string/multibyte/mbrtowc/) may be used instead.

## Example
```cpp
#include <clocale>
#include <cstdlib>
#include <cstring>
#include <iostream>
 
int print_mb(const char* ptr)
{
    std::mbtowc(nullptr, 0, 0); // reset the conversion state
    const char* end = ptr + std::strlen(ptr);
    int ret{};
    for (wchar_t wc; (ret = std::mbtowc(&wc, ptr, end - ptr)) > 0; ptr += ret)
        std::wcout << wc;
    std::wcout << '\n';
    return ret;
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    const char* str = "z\u00df\u6c34\U0001d10b"; // or "zß水𝄋"
                      // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9d\x84\x8b";
    print_mb(str);
}
```

## See also
- [mbrtowc](/cpp/string/multibyte/mbrtowc/)
- [mblen](/cpp/string/multibyte/mblen/)
- [do_in](/cpp/locale/codecvt/in/)
- [C documentation](/c/string/multibyte/mbtowc/)
