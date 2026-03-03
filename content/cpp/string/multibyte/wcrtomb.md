---
title: "std::wcrtomb"
source_path: "cpp/string/multibyte/wcrtomb"
header: "<cwchar>"
category: "string"
---

Converts a wide character to its narrow multibyte representation.

## Declarations
```cpp
std::size_t wcrtomb( char* s, wchar_t wc, std::mbstate_t* ps );
```

## Parameters
- `s`: pointer to narrow character array where the multibyte character will be stored
- `wc`: the wide character to convert
- `ps`: pointer to the conversion state object used when interpreting the multibyte string

## Return value
On success, returns the number of bytes (including any shift sequences) written to the character array whose first element is pointed to by s.

## Example
```cpp
#include <clocale>
#include <cwchar>
#include <iostream>
#include <string>
 
void print_wide(const std::wstring& wstr)
{
    std::mbstate_t state{};
    for (wchar_t wc : wstr)
    {
        std::string mb(MB_CUR_MAX, '\0');
        std::size_t ret = std::wcrtomb(&mb[0], wc, &state);
        std::cout << "multibyte char " << mb << " is " << ret << " bytes\n";
    }
}
 
int main()
{
    std::setlocale(LC_ALL, "en_US.utf8");
    std::wstring wstr = L"z\u00df\u6c34\U0001f34c"; // or L"zß水🍌"
    print_wide(wstr);
}
```

## See also
- [wctomb](/cpp/string/multibyte/wctomb/)
- [mbrtowc](/cpp/string/multibyte/mbrtowc/)
- [do_out](/cpp/locale/codecvt/out/)
- [C documentation](/c/string/multibyte/wcrtomb/)
