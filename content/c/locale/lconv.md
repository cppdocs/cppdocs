---
title: "lconv"
source_path: "c/locale/lconv"
header: "<locale.h>"
category: "c"
---

The struct lconv contains numeric and monetary formatting rules as defined by a C locale. Objects of this struct may be obtained with [localeconv](/c/locale/localeconv/). The members of lconv are values of type char and of type char*. Each char* member except decimal_point may be pointing at a null character (that is, at an empty C-string). The members of type char are all non-negative numbers, any of which may be [CHAR_MAX](/c/types/limits/) if the corresponding value is not available in the current C locale.

## Declarations
```cpp
struct lconv;
```

## Example
```cpp
#include <locale.h>
#include <stdio.h>
 
int main(void)
{
    setlocale(LC_ALL, "ja_JP.UTF-8");
    struct lconv* lc = localeconv();
    printf("Japanese currency symbol: %s(%s)\n", lc->currency_symbol, lc->int_curr_symbol);
}
```

## See also
- [localeconv](/c/locale/localeconv/)
- [C++ documentation](/cpp/locale/lconv/)
