---
title: "LC_ALL, LC_COLLATE, LC_CTYPE, LC_MONETARY, LC_NUMERIC, LC_TIME"
source_path: "c/locale/LC_categories"
url: "/c/locale/LC_categories/"
header: "<locale.h>"
category: "c"
---

Each of the above macro constants expand to integer constant expressions with distinct values that are suitable for use as the first argument of [setlocale](/c/locale/setlocale/).

## Declarations
```cpp
#define LC_ALL /* implementation-defined */
```

```cpp
#define LC_COLLATE /* implementation-defined */
```

```cpp
#define LC_CTYPE /* implementation-defined */
```

```cpp
#define LC_MONETARY /* implementation-defined */
```

```cpp
#define LC_NUMERIC /* implementation-defined */
```

```cpp
#define LC_TIME /* implementation-defined */
```

## Example
```cpp
#include <locale.h>
#include <stdio.h>
#include <time.h>
#include <wchar.h>
 
int main(void)
{
    setlocale(LC_ALL, "en_US.UTF-8"); // the C locale will be the UTF-8 enabled English
    setlocale(LC_NUMERIC, "de_DE.utf8"); // decimal dot will be German
    setlocale(LC_TIME, "ja_JP.utf8");    // date/time formatting will be Japanese
    wchar_t str[100];
    time_t t = time(NULL);
    wcsftime(str, 100, L"%A %c", localtime(&t));
    wprintf(L"Number: %.2f\nDate: %Ls\n", 3.14, str);
}
```

## See also
- [setlocale](/c/locale/setlocale/)
- [C++ documentation](/cpp/locale/lc_categories/)
