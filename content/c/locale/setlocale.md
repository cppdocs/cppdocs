---
title: "setlocale"
source_path: "c/locale/setlocale"
header: "<locale.h>"
category: "c"
---

The setlocale function installs the specified system locale or its portion as the new C locale. The modifications remain in effect and influences the execution of all locale-sensitive C library functions until the next call to setlocale. If locale is a null pointer, setlocale queries the current C locale without modifying it.

## Declarations
```cpp
char* setlocale( int category, const char* locale );
```

## Parameters
- `category`: locale category identifier, one of the LC_xxx macros. May be null.
- `locale`: system-specific locale identifier. Can be "" for the user-preferred locale or "C" for the minimal locale

## Return value
pointer to a narrow null-terminated string identifying the C locale after applying the changes, if any, or null pointer on failure.

## Notes
During program startup, the equivalent of setlocale([LC_ALL](/c/locale/LC_categories/), "C"); is executed before any user code is run.

Although the return type is char*, modifying the pointed-to characters is undefined behavior.

Because setlocale modifies global state which affects execution of locale-dependent functions, it is undefined behavior to call it from one thread, while another thread is executing any of the following functions: [fprintf](/c/io/fprintf/), [isprint](/c/string/byte/isprint/), [iswdigit](/c/string/wide/iswdigit/), [localeconv](/c/locale/localeconv/), [tolower](/c/string/byte/tolower/), [fscanf](/c/io/fscanf/), [ispunct](/c/string/byte/ispunct/), [iswgraph](/c/string/wide/iswgraph/), [mblen](/c/string/multibyte/mblen/), [toupper](/c/string/byte/toupper/), [isalnum](/c/string/byte/isalnum/), [isspace](/c/string/byte/isspace/), [iswlower](/c/string/wide/iswlower/), [mbstowcs](/c/string/multibyte/mbstowcs/), [towlower](/c/string/wide/towlower/), [isalpha](/c/string/byte/isalpha/), [isupper](/c/string/byte/isupper/), [iswprint](/c/string/wide/iswprint/), [mbtowc](/c/string/multibyte/mbtowc/), [towupper](/c/string/wide/towupper/), [isblank](/c/string/byte/isblank/), [iswalnum](/c/string/wide/iswalnum/), [iswpunct](/c/string/wide/iswpunct/), setlocale, [wcscoll](/c/string/wide/wcscoll/), [iscntrl](/c/string/byte/iscntrl/), [iswalpha](/c/string/wide/iswalpha/), [iswspace](/c/string/wide/iswspace/), [strcoll](/c/string/byte/strcoll/), [wcstod](/c/string/wide/wcstof/), [isdigit](/c/string/byte/isdigit/), [iswblank](/c/string/wide/iswblank/), [iswupper](/c/string/wide/iswupper/), [strerror](/c/string/byte/strerror/), [wcstombs](/c/string/multibyte/wcstombs/), [isgraph](/c/string/byte/isgraph/), [iswcntrl](/c/string/wide/iswcntrl/), [iswxdigit](/c/string/wide/iswxdigit/), [strtod](/c/string/byte/strtof/), [wcsxfrm](/c/string/wide/wcsxfrm/), [islower](/c/string/byte/islower/), [iswctype](/c/string/wide/iswctype/), [isxdigit](/c/string/byte/isxdigit/).

POSIX also defines a locale named "POSIX", which is always accessible and is exactly equivalent to the default minimal "C" locale.

POSIX also specifies that the returned pointer, not just the contents of the pointed-to string, may be invalidated by subsequent calls to setlocale.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <time.h>
#include <wchar.h>
 
int main(void)
{
    // the C locale will be UTF-8 enabled English;
    // decimal dot will be German
    // date and time formatting will be Japanese
    setlocale(LC_ALL, "en_US.UTF-8");
    setlocale(LC_NUMERIC, "de_DE.utf8");
    setlocale(LC_TIME, "ja_JP.utf8");
 
    wchar_t str[100];
    time_t t = time(NULL);
    wcsftime(str, 100, L"%A %c", localtime(&t));
    wprintf(L"Number: %.2f\nDate: %ls\n", 3.14, str);
}
```

## See also
- [LC_ALLLC_COLLATELC_CTYPELC_MONETARYLC_NUMERICLC_TIME](/c/locale/LC_categories/)
- [C++ documentation](/cpp/locale/setlocale/)
