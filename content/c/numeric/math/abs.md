---
title: "abs, labs, llabs, imaxabs"
source_path: "c/numeric/math/abs"
header: "<stdlib.h>"
category: "c"
---

Computes the absolute value of an integer number. The behavior is undefined if the result cannot be represented by the return type.

## Declarations
```cpp
int abs( int n );
```

```cpp
long labs( long n );
```

```cpp
long long llabs( long long n );
```
_(since C99)_

```cpp
intmax_t imaxabs( intmax_t n );
```
_(since C99)_

## Parameters
- `n`: integer value

## Return value
The absolute value of n (i.e. |n|), if it is representable.

## Notes
In 2's complement systems, the absolute value of the most-negative value is out of range, e.g. for 32-bit 2's complement type int, [INT_MIN](/c/types/limits/) is -2147483648, but the would-be result 2147483648 is greater than [INT_MAX](/c/types/limits/), which is 2147483647.

## Example
```cpp
#include <limits.h>
#include <stdio.h>
#include <stdlib.h>
 
int main(void)
{
    printf("abs(+3) = %d\n", abs(+3));
    printf("abs(-3) = %d\n", abs(-3));
 
//  printf("%+d\n", abs(INT_MIN)); // undefined behavior on 2's complement systems
}
```

## See also
- [fabsfabsffabsl](/c/numeric/math/fabs/)
- [cabscabsfcabsl](/c/numeric/complex/cabs/)
- [C++ documentation](/cpp/numeric/math/abs/)
