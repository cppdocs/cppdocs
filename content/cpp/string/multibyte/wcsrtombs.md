---
title: "std::wcsrtombs"
source_path: "cpp/string/multibyte/wcsrtombs"
header: "<cwchar>"
category: "string"
---

Converts a sequence of wide characters from the array whose first element is pointed to by *src to its narrow multibyte representation that begins in the conversion state described by *ps. If dst is not null, converted characters are stored in the successive elements of the char array pointed to by dst. No more than len bytes are written to the destination array.

## Declarations
```cpp
std::size_t wcsrtombs( char* dst,
const wchar_t** src,
std::size_t len,
std::mbstate_t* ps );
```

## Parameters
- `dst`: pointer to narrow character array where the multibyte characters will be stored
- `src`: pointer to pointer to the first element of a null-terminated wide string
- `len`: number of bytes available in the array pointed to by dst
- `ps`: pointer to the conversion state object

## Return value
On success, returns the number of bytes (including any shift sequences, but excluding the terminating '\0') written to the character array whose first element is pointed to by dst. If dst is a null pointer, returns the number of bytes that would have been written (again, excluding the terminating null character '\0').

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <string>
#include <vector>
 
void print_wide(const wchar_t* wstr)
{
    std::mbstate_t state = std::mbstate_t();
    std::size_t len = 1 + std::wcsrtombs(nullptr, &wstr, 0, &state);
    std::vector<char> mbstr(len);
    std::wcsrtombs(&mbstr[0], &wstr, mbstr.size(), &state);
    std::cout << "multibyte string: " << &mbstr[0] << '\n'
              << "Length, including '\\0': " << mbstr.size() << '\n';
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    // UTF-8 narrow multibyte encoding
    const wchar_t* wstr = L"z\u00df\u6c34\U0001d10b"; // or L"zß水𝄋"
    print_wide(wstr);
}
```

## See also
- [wcrtomb](/cpp/string/multibyte/wcrtomb/)
- [mbsrtowcs](/cpp/string/multibyte/mbsrtowcs/)
- [do_out](/cpp/locale/codecvt/out/)
- [C documentation](/c/string/multibyte/wcsrtombs/)
