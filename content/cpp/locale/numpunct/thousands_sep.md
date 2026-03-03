---
title: "std::numpunct<CharT>::thousands_sep, do_thousands_sep"
source_path: "cpp/locale/numpunct/thousands_sep"
header: "<locale>"
category: "locale"
---

1) Public member function, calls the member function do_thousands_sep of the most derived class.

## Declarations
```cpp
public:
char_type thousands_sep() const;
```

```cpp
protected:
virtual char_type do_thousands_sep() const;
```

## Return value
The object of type char_type to use as the thousands separator. The standard specializations of std::numpunct return ',' and L','.

## Example
```cpp
#include <iostream>
#include <locale>
 
struct space_out : std::numpunct<char>
{
    char do_thousands_sep()   const { return ' '; }  // separate with spaces
    std::string do_grouping() const { return "\1"; } // groups of 1 digit
};
 
int main()
{
    std::cout << "default locale: " << 12345678 << '\n';
    std::cout.imbue(std::locale(std::cout.getloc(), new space_out));
    std::cout << "locale with modified numpunct: " << 12345678 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 20 | C++98 | the return type was string_type | changed to char_type |

## See also
- [do_grouping](/cpp/locale/numpunct/grouping/)
