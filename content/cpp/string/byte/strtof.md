---
title: "std::strtof, std::strtod, std::strtold"
source_path: "cpp/string/byte/strtof"
header: "<cstdlib>"
category: "string"
since: "C++11"
---

Interprets a floating point value in a byte string pointed to by str.

## Declarations
```cpp
float strtof ( const char* str, char** str_end );
```
_(since C++11)_

```cpp
double strtod ( const char* str, char** str_end );
```

```cpp
long double strtold( const char* str, char** str_end );
```
_(since C++11)_

## Parameters
- `str`: pointer to the null-terminated byte string to be interpreted
- `str_end`: pointer to a pointer to character.

## Return value
Floating point value corresponding to the contents of str on success. If the converted value falls out of range of corresponding return type, range error occurs and [HUGE_VAL](/cpp/numeric/math/huge_val/), [HUGE_VALF](/cpp/numeric/math/huge_val/) or [HUGE_VALL](/cpp/numeric/math/huge_val/) is returned. If no conversion can be performed, 0 is returned and *str_end is set to str.

## Example
```cpp
#include <cerrno>
#include <clocale>
#include <cstdlib>
#include <iostream>
#include <string>
 
int main()
{
    const char* p = "111.11 -2.22 0X1.BC70A3D70A3D7P+6 -Inf 1.18973e+4932zzz";
    char* end{};
    std::cout << "Parsing \"" << p << "\":\n";
    errno = 0;
    for (double f = std::strtod(p, &end); p != end; f = std::strtod(p, &end))
    {
        std::cout << "  '" << std::string(p, end - p) << "' -> ";
        p = end;
        if (errno == ERANGE)
        {
            std::cout << "range error, got ";
            errno = 0;
        }
        std::cout << f << '\n';
    }
 
    if (std::setlocale(LC_NUMERIC, "de_DE.utf8"))
    {
        std::cout << "With de_DE.utf8 locale:\n";
        std::cout << "  '123.45' -> " << std::strtod("123.45", 0) << '\n';
        std::cout << "  '123,45' -> " << std::strtod("123,45", 0) << '\n';
    }
}
```

## See also
- [atof](/cpp/string/byte/atof/)
- [wcstofwcstodwcstold](/cpp/string/wide/wcstof/)
- [from_chars](/cpp/utility/from_chars/)
- [C documentation](/c/string/byte/strtof/)
