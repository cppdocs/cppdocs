---
title: "std::numpunct"
source_path: "cpp/locale/numpunct"
header: "<locale>"
category: "locale"
---

The facet std::numpunct encapsulates numeric punctuation preferences. Stream I/O operations use std::numpunct through [std::num_get](/cpp/locale/num_get/) and [std::num_put](/cpp/locale/num_put/) for parsing numeric input and formatting numeric output.

## Declarations
```cpp
template< class CharT >
class numpunct;
```

## Example
```cpp
#include <iostream>
#include <locale>
 
struct french_bool : std::numpunct<char>
{
    string_type do_truename() const override { return "vrai"; }
    string_type do_falsename() const override { return "faux"; }
};
 
int main()
{
    std::cout << "default locale: "
              << std::boolalpha << true << ", " << false << '\n';
    std::cout.imbue(std::locale(std::cout.getloc(), new french_bool));
    std::cout << "locale with modified numpunct: "
              << std::boolalpha << true << ", " << false << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 338 | C++98 | the sign token allowed an optional whitespace following + or - | removed the whitespace |

## See also
- [numpunct_byname](/cpp/locale/numpunct_byname/)
