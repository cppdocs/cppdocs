---
title: "std::mbsrtowcs"
source_path: "cpp/string/multibyte/mbsrtowcs"
header: "<cwchar>"
category: "string"
---

Converts a null-terminated multibyte character sequence, which begins in the conversion state described by *ps, from the array whose first element is pointed to by *src to its wide character representation. If dst is not null, converted characters are stored in the successive elements of the wchar_t array pointed to by dst. No more than len wide characters are written to the destination array.

## Declarations
```cpp
std::size_t mbsrtowcs( wchar_t* dst,
const char** src,
std::size_t len,
std::mbstate_t* ps );
```

## Parameters
- `dst`: pointer to wide character array where the results will be stored
- `src`: pointer to pointer to the first element of a null-terminated multibyte string
- `len`: number of wide characters available in the array pointed to by dst
- `ps`: pointer to the conversion state object

## Return value
On success, returns the number of wide characters, excluding the terminating L'\0', written to the character array. If dst is a null pointer, returns the number of wide characters that would have been written given unlimited length.

## Notes
This function moves the src pointer to the end of the converted multibyte string. This doesn't happen if dst is a null pointer.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <vector>
 
void print_as_wide(const char* mbstr)
{
    std::mbstate_t state = std::mbstate_t();
    std::size_t len = 1 + std::mbsrtowcs(nullptr, &mbstr, 0, &state);
    std::vector<wchar_t> wstr(len);
    std::mbsrtowcs(&wstr[0], &mbstr, wstr.size(), &state);
    std::wcout << "Wide string: " << &wstr[0] << '\n'
               << "The length, including '\\0': " << wstr.size() << '\n';
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    const char* mbstr = "z\u00df\u6c34\U0001f34c"; // or u8"zß水🍌"
    print_as_wide(mbstr);
}
```

## See also
- [mbrtowc](/cpp/string/multibyte/mbrtowc/)
- [wcsrtombs](/cpp/string/multibyte/wcsrtombs/)
- [do_in](/cpp/locale/codecvt/in/)
- [C documentation](/c/string/multibyte/mbsrtowcs/)
