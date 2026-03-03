---
title: "atof"
source_path: "c/string/byte/atof"
header: "<stdlib.h>"
category: "c"
---

Interprets a floating-point value in a byte string pointed to by str.

## Declarations
```cpp
double atof( const char* str );
```

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted

## Return value
double value corresponding to the contents of str on success. If the converted value falls out of range of the return type, the return value is undefined. If no conversion can be performed, 0.0 is returned.

## Notes
The name stands for "ASCII to float".

## Example
```cpp
#include <stdlib.h>
#include <stdio.h>
 
int main(void)
{
    printf("%g\n", atof("  -0.0000000123junk"));
    printf("%g\n", atof("0.012"));
    printf("%g\n", atof("15e16"));
    printf("%g\n", atof("-0x1afp-2"));
    printf("%g\n", atof("inF"));
    printf("%g\n", atof("Nan"));
    printf("%g\n", atof("1.0e+309"));   // UB: out of range of double
    printf("%g\n", atof("0.0"));
    printf("%g\n", atof("junk"));       // no conversion can be performed
}
```

## See also
- [strtofstrtodstrtold](/c/string/byte/strtof/)
- [C++ documentation](/cpp/string/byte/atof/)
