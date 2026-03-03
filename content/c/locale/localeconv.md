---
title: "localeconv"
source_path: "c/locale/localeconv"
header: "<locale.h>"
category: "c"
---

The localeconv function obtains a pointer to a static object of type [lconv](/c/locale/lconv/), which represents numeric and monetary formatting rules of the current C locale.

## Declarations
```cpp
struct lconv* localeconv(void);
```

## Return value
pointer to the current [lconv](/c/locale/lconv/) object.

## Notes
Modifying the object references through the returned pointer is undefined behavior.

localeconv modifies a static object, calling it from different threads without synchronization is undefined behavior.

## Example
```cpp
#include <locale.h>
#include <stdio.h>
 
int main(void)
{
    setlocale(LC_MONETARY, "en_IN.utf8");
    struct lconv* lc = localeconv();
    printf("Local Currency Symbol        : %s\n", lc->currency_symbol);
    printf("International Currency Symbol: %s\n", lc->int_curr_symbol);
}
```

## See also
- [setlocale](/c/locale/setlocale/)
- [lconv](/c/locale/lconv/)
- [C++ documentation](/cpp/locale/localeconv/)
