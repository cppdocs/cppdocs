---
title: "std::numpunct<CharT>::decimal_point, do_decimal_point"
source_path: "cpp/locale/numpunct/decimal_point"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_decimal_point of the most derived class.

## Declarations
```cpp
public:
char_type decimal_point() const;
```

```cpp
protected:
virtual char_type do_decimal_point() const;
```

## Return value
The value of type char_type to use as the decimal separator. The standard specializations of std::numpunct return '.' and L'.'.

## Example
```cpp
#include <iostream>
#include <locale>
 
struct slash : std::numpunct<char>
{
    char do_decimal_point() const { return '/'; }  // separate with slash
};
 
int main()
{
    std::cout.precision(10);
    std::cout << "default locale: " << 1234.5678 << '\n';
    std::cout.imbue(std::locale(std::cout.getloc(), new slash));
    std::cout << "locale with modified numpunct: " << 1234.5678 << '\n';
}
```
