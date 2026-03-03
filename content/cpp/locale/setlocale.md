---
title: "std::setlocale"
source_path: "cpp/locale/setlocale"
header: "<clocale>"
category: "locale"
---

The setlocale function installs the specified system locale or its portion as the new C locale. The modifications remain in effect and influences the execution of all locale-sensitive C library functions until the next call to setlocale. If locale is a null pointer, setlocale queries the current C locale without modifying it.

## Declarations
```cpp
char* setlocale( int category, const char* locale );
```

## Parameters
- `category`: locale category identifier, one of the LC_xxx macros. May be 0.
- `locale`: system-specific locale identifier. Can be "" for the user-preferred locale or "C" for the minimal locale

## Return value
Pointer to a narrow null-terminated string identifying the C locale after applying the changes, if any, or null pointer on failure.

## Notes
During program startup, the equivalent of std::setlocale([LC_ALL](/cpp/locale/lc_categories/), "C"); is executed before any user code is run.

Although the return type is char*, modifying the pointed-to characters is undefined behavior.

Because setlocale modifies global state which affects execution of locale-dependent functions, it is undefined behavior to call it from one thread, while another thread is executing any of the following functions: [std::fprintf](/cpp/io/c/printf/), std::isprint, [std::iswdigit](/cpp/string/wide/iswdigit/), [std::localeconv](/cpp/locale/localeconv/), std::tolower, [std::fscanf](/cpp/io/c/scanf/), std::ispunct, [std::iswgraph](/cpp/string/wide/iswgraph/), [std::mblen](/cpp/string/multibyte/mblen/), std::toupper, std::isalnum, std::isspace, [std::iswlower](/cpp/string/wide/iswlower/), [std::mbstowcs](/cpp/string/multibyte/mbstowcs/), [std::towlower](/cpp/string/wide/towlower/), std::isalpha, std::isupper, [std::iswprint](/cpp/string/wide/iswprint/), [std::mbtowc](/cpp/string/multibyte/mbtowc/), [std::towupper](/cpp/string/wide/towupper/), std::isblank, [std::iswalnum](/cpp/string/wide/iswalnum/), [std::iswpunct](/cpp/string/wide/iswpunct/), std::setlocale, [std::wcscoll](/cpp/string/wide/wcscoll/), std::iscntrl, [std::iswalpha](/cpp/string/wide/iswalpha/), [std::iswspace](/cpp/string/wide/iswspace/), [std::strcoll](/cpp/string/byte/strcoll/), [std::wcstod](/cpp/string/wide/wcstof/), std::isdigit, [std::iswblank](/cpp/string/wide/iswblank/), [std::iswupper](/cpp/string/wide/iswupper/), [std::strerror](/cpp/string/byte/strerror/), [std::wcstombs](/cpp/string/multibyte/wcstombs/), std::isgraph, [std::iswcntrl](/cpp/string/wide/iswcntrl/), [std::iswxdigit](/cpp/string/wide/iswxdigit/), [std::strtod](/cpp/string/byte/strtof/), [std::wcsxfrm](/cpp/string/wide/wcsxfrm/), std::islower, [std::iswctype](/cpp/string/wide/iswctype/), std::isxdigit.

POSIX also defines a locale named "POSIX", which is always accessible and is exactly equivalent to the default minimal "C" locale.

POSIX also specifies that the returned pointer, not just the contents of the pointed-to string, may be invalidated by subsequent calls to setlocale.

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <ctime>
#include <cwchar>
#include <iterator>
#include <string>
 
int main()
{
    // Make a "deep copy" of current locale name.
    std::string prev_loc = std::setlocale(LC_ALL, nullptr);
 
    // The C locale will be UTF-8 enabled English,
    // decimal dot will be German,
    // date and time formatting will be Japanese.
    if (const char* loc = std::setlocale(LC_ALL, "en_US.UTF-8"))
        std::wprintf(L"New LC_ALL locale: %s\n", loc);
    if (const char* loc = std::setlocale(LC_NUMERIC, "de_DE.UTF-8"))
        std::wprintf(L"New LC_NUMERIC locale: %s\n", loc);
    if (const char* loc = std::setlocale(LC_TIME, "ja_JP.UTF-8"))
        std::wprintf(L"New LC_TIME locale: %s\n", loc);
 
    wchar_t buf[100];
    std::time_t t = std::time(nullptr);
    std::wcsftime(buf, std::size(buf), L"%A %c", std::localtime(&t));
    std::wprintf(L"Number: %.2f\nDate: %Ls\n", 3.14, buf);
 
    // Restore the previous locale.
    if (const char* loc = std::setlocale(LC_ALL, prev_loc.c_str()))
        std::wprintf(L"Restorred LC_ALL locale: %s\n", loc);
}
```

## See also
- [LC_ALLLC_COLLATELC_CTYPELC_MONETARYLC_NUMERICLC_TIME](/cpp/locale/lc_categories/)
- [locale](/cpp/locale/locale/)
- [C documentation](/c/locale/setlocale/)
