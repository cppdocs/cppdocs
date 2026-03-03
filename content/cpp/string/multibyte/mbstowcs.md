---
title: "std::mbstowcs"
source_path: "cpp/string/multibyte/mbstowcs"
header: "<cstdlib>"
category: "string"
---

Converts a multibyte character string from the array whose first element is pointed to by src to its wide character representation. Converted characters are stored in the successive elements of the array pointed to by dst. No more than len wide characters are written to the destination array.

## Declarations
```cpp
std::size_t mbstowcs( wchar_t* dst, const char* src, std::size_t len );
```

## Parameters
- `dst`: pointer to wide character array where the wide string will be stored
- `src`: pointer to the first element of a null-terminated multibyte string to convert
- `len`: number of wide characters available in the array pointed to by dst

## Return value
On success, returns the number of wide characters, excluding the terminating L'\0', written to the destination array.

## Notes
In most implementations, this function updates a global static object of type [std::mbstate_t](/cpp/string/multibyte/mbstate_t/) as it processes through the string, and cannot be called simultaneously by two threads, [std::mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/) should be used in such cases.

POSIX specifies a common extension: if dst is a null pointer, this function returns the number of wide characters that would be written to dst, if converted. Similar behavior is standard for [std::mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/).

## Example
```cpp
#include <clocale>
#include <cstdlib>
#include <iostream>
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wcout.imbue(std::locale("en_US.utf8"));
    const char* mbstr = "z\u00df\u6c34\U0001f34c"; // or u8"zß水🍌"
                        // or "\x7a\xc3\x9f\xe6\xb0\xb4\xf0\x9f\x8d\x8c";
    wchar_t wstr[5];
    std::mbstowcs(wstr, mbstr, 5);
    std::wcout << "wide string: " << wstr << '\n';
}
```

## See also
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [wcstombs](/cpp/string/multibyte/wcstombs/)
- [do_in](/cpp/locale/codecvt/in/)
- [C documentation](/c/string/multibyte/mbstowcs/)
