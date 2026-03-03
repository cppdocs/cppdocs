---
title: "std::localeconv"
source_path: "cpp/locale/localeconv"
header: "<clocale>"
category: "locale"
---

The localeconv function obtains a pointer to a static object of type [std::lconv](/cpp/locale/lconv/), which represents numeric and monetary formatting rules of the current C locale.

## Declarations
```cpp
std::lconv* localeconv();
```

## Return value
Pointer to the current [std::lconv](/cpp/locale/lconv/) object.

## Notes
Modifying the object references through the returned pointer is undefined behavior.

std::localeconv modifies a static object, calling it from different threads without synchronization is undefined behavior.

## Example
```cpp
#include <clocale>
#include <iostream>
 
int main()
{
    std::setlocale(LC_ALL, "ja_JP.UTF-8");
    std::lconv* lc = std::localeconv();
    std::cout << "Japanese currency symbol: " << lc->currency_symbol
              << '(' << lc->int_curr_symbol << ")\n";
}
```

## See also
- [setlocale](/cpp/locale/setlocale/)
- [lconv](/cpp/locale/lconv/)
- [C documentation](/c/locale/localeconv/)
