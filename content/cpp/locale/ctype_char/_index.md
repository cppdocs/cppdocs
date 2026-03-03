---
title: "std::ctype<char>"
source_path: "cpp/locale/ctype_char"
header: "<locale>"
category: "locale"
---

This specialization of [std::ctype](/cpp/locale/ctype/) encapsulates character classification features for type char. Unlike general-purpose [std::ctype](/cpp/locale/ctype/), which uses virtual functions, this specialization uses table lookup to classify characters (which is generally faster).

## Declarations
```cpp
template<>
class ctype<char>;
```

## Example
```cpp
#include <cstddef>
#include <iostream>
#include <locale>
#include <sstream>
#include <vector>
 
// This ctype facet classifies commas and endlines as whitespace
struct csv_whitespace : std::ctype<char>
{
    static const mask* make_table()
    {
        // make a copy of the "C" locale table
        static std::vector<mask> v(classic_table(), classic_table() + table_size);
        v[','] |=  space; // comma will be classified as whitespace
        v[' '] &= ~space; // space will not be classified as whitespace
        return &v[0];
    }
 
    csv_whitespace(std::size_t refs = 0) : ctype(make_table(), false, refs) {}
};
 
int main()
{
    std::string in = "Column 1,Column 2,Column 3\n123,456,789";
    std::string token;
 
    std::cout << "Default locale:\n";
    std::istringstream s1(in);
    while (s1 >> token)
        std::cout << "  " << token << '\n';
 
    std::cout << "Locale with modified ctype:\n";
    std::istringstream s2(in);
    s2.imbue(std::locale(s2.getloc(), new csv_whitespace));
    while (s2 >> token)
        std::cout << "  " << token << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 695 | C++98 | table() and classic_table() were protected member functions | made them public |

## See also
- [ctype](/cpp/locale/ctype/)
- [ctype_base](/cpp/locale/ctype_base/)
- [ctype_byname](/cpp/locale/ctype_byname/)
- [std::ctype](/cpp/locale/ctype/)
