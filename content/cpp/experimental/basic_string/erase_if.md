---
title: "std::experimental::erase_if (std::basic_string)"
source_path: "cpp/experimental/basic_string/erase_if"
header: "<experimental/string>"
category: "experimental"
---

Erases all elements that satisfy the predicate pred from the container. Equivalent to c.erase([std::remove_if](/cpp/algorithm/remove/)(c.begin(), c.end(), pred), c.end());.

## Declarations
```cpp
template< class CharT, class Traits, class Alloc, class Pred >
void erase_if( std::basic_string<CharT, Traits, Alloc>& c, Pred pred );
```
_(library fundamentals TS v2)_

## Parameters
- `c`: container from which to erase
- `pred`: predicate that determines which elements should be erased

## Example
```cpp
#include <experimental/string>
#include <iomanip>
#include <iostream>
 
int main()
{
    std::string data{"1337!p_C00L_<a-_HACKER_!@s_(!s#@_w^o%r*d#42"};
    std::cout << "Original string: " << std::quoted(data) << '\n';
    auto crack = [](auto O) { return '`' ^ ('`' & O); };
    std::experimental::erase_if(data, crack);
    std::cout << "After erase_if:  " << std::quoted(data) << '\n';
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [erase (std::basic_string)](/cpp/experimental/basic_string/erase/)
- [std::basic_string](/cpp/string/basic_string/)
