---
title: "div, ldiv, lldiv, imaxdiv"
source_path: "c/numeric/math/div"
header: "<stdlib.h>"
category: "c"
---

Computes both the quotient and the remainder of the division of the numerator x by the denominator y.

## Declarations
```cpp
div_t div( int x, int y );
```

```cpp
ldiv_t ldiv( long x, long y );
```

```cpp
lldiv_t lldiv( long long x, long long y );
```
_(since C99)_

```cpp
imaxdiv_t imaxdiv( intmax_t x, intmax_t y );
```
_(since C99)_

## Parameters
- `x, y`: integer values

## Return value
If both the remainder and the quotient can be represented as objects of the corresponding type (int, long, long long, [intmax_t](/c/types/integer/), respectively), returns both as an object of type div_t, ldiv_t, lldiv_t, imaxdiv_t defined as follows:

## Notes
Until C99, the rounding direction of the quotient and the sign of the remainder in the built-in division and remainder operators was implementation-defined if either of the operands was negative, but it was well-defined in div and ldiv.

On many platforms, a single CPU instruction obtains both the quotient and the remainder, and this function may leverage that, although compilers are generally able to merge nearby / and % where suitable.

## Example
```cpp
#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdio.h>
#include <stdlib.h>
 
void reverse(char* first, char* last)
{
    for (--last; first < last; ++first, --last)
    {
        char c = *last;
        *last = *first;
        *first = c;
    }
}
 
// returns empty buffer in case of buffer overflow
char* itoa(int n, int base, char* buf, size_t buf_size)
{
    assert(2 <= base && base <= 16 && buf && buf_size);
    div_t dv = {.quot = n};
    char* p = buf;
    do
    {
        if (!--buf_size)
            return (*buf = '\0'), buf;
        dv = div(dv.quot, base);
        *p++ = "0123456789abcdef"[abs(dv.rem)];
    }
    while(dv.quot);
    if (n < 0)
        *p++ = '-';
    *p = '\0';
    reverse(buf, p);
    return buf;
}
 
int main(void)
{
    char buf[16];
    printf("%s\n", itoa(0, 2, buf, sizeof buf));
    printf("%s\n", itoa(007, 3, buf, sizeof buf));
    printf("%s\n", itoa(12346, 10, buf, sizeof buf));
    printf("%s\n", itoa(-12346, 10, buf, sizeof buf));
    printf("%s\n", itoa(-42, 2, buf, sizeof buf));
    printf("%s\n", itoa(INT_MAX, 16, buf, sizeof buf));
    printf("%s\n", itoa(INT_MIN, 16, buf, sizeof buf));
}
```

## See also
- [fmodfmodffmodl](/c/numeric/math/fmod/)
- [remainderremainderfremainderl](/c/numeric/math/remainder/)
- [remquoremquofremquol](/c/numeric/math/remquo/)
- [C++ documentation](/cpp/numeric/math/div/)
