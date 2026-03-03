---
title: "std::atof"
source_path: "cpp/string/byte/atof"
header: "<cstdlib>"
category: "string"
---

Interprets a floating point value in a byte string pointed to by str.

## Declarations
```cpp
double atof( const char* str );
```

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted

## Return value
double value corresponding to the contents of str on success. If the converted value falls out of range of the return type, the return value is undefined. If no conversion can be performed, 0.0 is returned.

## Example
```cpp
#include <cstdlib>
#include <iostream>
 
int main()
{
    std::cout << std::atof("0.0000000123") << '\n'
              << std::atof("0.012") << '\n'
              << std::atof("15e16") << '\n'
              << std::atof("-0x1afp-2") << '\n'
              << std::atof("inF") << '\n'
              << std::atof("Nan") << '\n'
              << std::atof("invalid") << '\n';
}
```

## See also
- [stofstodstold](/cpp/string/basic_string/stof/)
- [strtofstrtodstrtold](/cpp/string/byte/strtof/)
- [from_chars](/cpp/utility/from_chars/)
- [atoiatolatoll](/cpp/string/byte/atoi/)
- [C documentation](/c/string/byte/atof/)
