---
title: "LC_ALL, LC_COLLATE, LC_CTYPE, LC_MONETARY, LC_NUMERIC, LC_TIME"
source_path: "cpp/locale/LC_categories"
header: "<clocale>"
category: "locale"
aliases:
  - "/cpp/locale/LC_categories/"
---

Each of the above macro constants expand to integer constant expressions with distinct values that are suitable for use as the first argument of [std::setlocale](/cpp/locale/setlocale/).

## Declarations
```cpp
#define LC_ALL /* implementation defined */
```

```cpp
#define LC_COLLATE /* implementation defined */
```

```cpp
#define LC_CTYPE /* implementation defined */
```

```cpp
#define LC_MONETARY /* implementation defined */
```

```cpp
#define LC_NUMERIC /* implementation defined */
```

```cpp
#define LC_TIME /* implementation defined */
```

## Example
```cpp
#include <clocale>
#include <cstdio>
#include <ctime>
#include <cwchar>
 
int main()
{
    // the C locale will be the UTF-8 enabled English:
    std::setlocale(LC_ALL, "en_US.UTF-8");
 
    // decimal dot will be German:
    std::setlocale(LC_NUMERIC, "de_DE.UTF-8");
 
    // date/time formatting will be Japanese:
    std::setlocale(LC_TIME, "ja_JP.UTF-8");
 
    wchar_t str[100];
    std::time_t t = std::time(nullptr);
    std::wcsftime(str, 100, L"%A %c", std::localtime(&t));
    std::wprintf(L"Number: %.2f\nDate: %Ls\n", 3.14, str);
}
```

## See also
- [setlocale](/cpp/locale/setlocale/)
- [locale](/cpp/locale/locale/)
- [C documentation](/c/locale/LC_categories/)
