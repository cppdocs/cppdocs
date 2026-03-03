---
title: "std::experimental::erase (std::basic_string)"
source_path: "cpp/experimental/basic_string/erase"
header: "<experimental/string>"
category: "experimental"
---

Erases all elements that compare equal to value from the container. Equivalent to c.erase(std::remove(c.begin(), c.end(), value), c.end());.

## Declarations
```cpp
template< class CharT, class Traits, class A, class U >
void erase( std::basic_string<CharT, Traits, A>& c, const U& value );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed

## Example
```cpp
#include <experimental/string>
#include <iostream>
 
int main()
{
    std::string data{"$$P$A$S$S$$W$O$R$$D$"};
    std::cout << data << '\n';
    auto crack{'$'};
    std::experimental::erase(data, crack);
    std::cout << data << '\n';
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [erase_if (std::basic_string)](/cpp/experimental/basic_string/erase_if/)
- [std::basic_string](/cpp/string/basic_string/)
