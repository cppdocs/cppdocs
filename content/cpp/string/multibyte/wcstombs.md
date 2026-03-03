---
title: "std::wcstombs"
source_path: "cpp/string/multibyte/wcstombs"
header: "<cstdlib>"
category: "string"
---

Converts a sequence of wide characters from the array whose first element is pointed to by src to its narrow multibyte representation that begins in the initial shift state. Converted characters are stored in the successive elements of the char array pointed to by dst. No more than len bytes are written to the destination array.

## Declarations
```cpp
std::size_t wcstombs( char* dst, const wchar_t* src, std::size_t len );
```

## Parameters
- `dst`: pointer to narrow character array where the multibyte character will be stored
- `src`: pointer to the first element of a null-terminated wide string to convert
- `len`: number of byte available in the array pointed to by dst

## Return value
On success, returns the number of bytes (including any shift sequences, but excluding the terminating '\0') written to the character array whose first element is pointed to by dst.

## Notes
In most implementations, this function updates a global static object of type [std::mbstate_t](/cpp/string/multibyte/mbstate_t/) as it processes through the string, and cannot be called simultaneously by two threads, [std::wcsrtombs](/cpp/string/multibyte/wcsrtombs/) should be used in such cases.

POSIX specifies a common extension: if dst is a null pointer, this function returns the number of bytes that would be written to dst, if converted. Similar behavior is standard for [std::wcsrtombs](/cpp/string/multibyte/wcsrtombs/).

## Example
```cpp
#include <clocale>
#include <cstdlib>
#include <iostream>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    const wchar_t* wstr = L"z\u00df\u6c34\U0001d10b"; // or L"zß水𝄋"
    char mbstr[11];
    std::wcstombs(mbstr, wstr, 11);
    std::cout << "multibyte string: " << mbstr << '\n';
}
```

## See also
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [mbstowcs](/cpp/string/multibyte/mbstowcs/)
- [do_out](/cpp/locale/codecvt/out/)
- [C documentation](/c/string/multibyte/wcstombs/)
