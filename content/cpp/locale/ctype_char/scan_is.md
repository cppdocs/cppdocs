---
title: "std::ctype<char>::scan_is"
source_path: "cpp/locale/ctype_char/scan_is"
header: "<locale>"
category: "locale"
---

Locates the first character in the character array [beg,end) that satisfies the classification mask m, that is, the first character c such that table()[(unsigned char) c] & m would return true.

## Declarations
```cpp
const char* scan_is( mask m, const char* beg, const char* end ) const;
```

## Parameters
- `m`: mask to search for
- `beg`: pointer to the first character in an array of characters to search
- `end`: one past the end pointer for the array of characters to search

## Return value
Pointer to the first character in [beg,end) that satisfies the mask, or end if no such character was found.

## Notes
Unlike the primary template [std::ctype](/cpp/locale/ctype/), this specialization does not perform a virtual function call when classifying characters. To customize the behavior, a derived class may provide a non-default classification table to the base class constructor.

## Example
```cpp
#include <iostream>
#include <iterator>
#include <locale>
 
int main()
{
    std::locale loc("");
    auto& f = std::use_facet<std::ctype<char>>(loc);
 
    // skip until the first letter
    char s1[] = "      \t\t\n  Test";
    const char* p1 = f.scan_is(std::ctype_base::alpha, std::begin(s1), std::end(s1));
    std::cout << '\'' << p1 << "'\n";
 
    // skip until the first letter
    char s2[] = "123456789abcd";
    const char* p2 = f.scan_is(std::ctype_base::alpha, std::begin(s2), std::end(s2));
    std::cout << '\'' << p2 << "'\n";
}
```

## See also
- [do_scan_is](/cpp/locale/ctype/scan_is/)
- [scan_not](/cpp/locale/ctype_char/scan_not/)
