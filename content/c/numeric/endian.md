---
title: "__STDC_ENDIAN_LITTLE__, __STDC_ENDIAN_BIG__, __STDC_ENDIAN_NATIVE__"
source_path: "c/numeric/endian"
header: "<stdbit.h>"
category: "c"
---

Indicates the [endianness](https://en.wikipedia.org/wiki/Endianness#Overview) of all [scalar types](/cpp/language/type-id/):

## Declarations
```cpp
#define __STDC_ENDIAN_LITTLE__ /* implementation-defined */
```
_(since C23)_

```cpp
#define __STDC_ENDIAN_BIG__ /* implementation-defined */
```
_(since C23)_

```cpp
#define __STDC_ENDIAN_NATIVE__ /* implementation-defined */
```
_(since C23)_

## Example
```cpp
#include <stdbit.h>
#include <stdio.h>
 
int main()
{
    switch(__STDC_ENDIAN_NATIVE__)
    {
        case __STDC_ENDIAN_LITTLE__:
            printf("__STDC_ENDIAN_LITTLE__\n");
            break;
        case __STDC_ENDIAN_BIG__:
            printf("__STDC_ENDIAN_BIG__\n");
            break;
        default:
            printf("mixed-endian\n");
    }
    return __STDC_ENDIAN_NATIVE__;
}
```

## See also
- [C++ documentation](/cpp/types/endian/)
