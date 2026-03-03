---
title: "std::erase, std::erase_if(std::basic_string)"
source_path: "cpp/string/basic_string/erase2"
header: "<string>"
category: "string"
since: "C++26"
---

1) Erases all elements that compare equal to value from the container. Equivalent to
auto it = std::remove(c.begin(), c.end(), value);
auto r = c.end() - it;
c.erase(it, c.end());
return r;

## Declarations
```cpp
template< class CharT, class Traits, class Alloc, class U >
constexpr std::basic_string<CharT, Traits, Alloc>::size_type
erase( std::basic_string<CharT, Traits, Alloc>& c, const U& value );
```
_(since C++20) (until C++26)_

```cpp
template< class CharT, class Traits, class Alloc, class U = CharT >
constexpr std::basic_string<CharT, Traits, Alloc>::size_type
erase( std::basic_string<CharT, Traits, Alloc>& c, const U& value );
```
_(since C++26)_

```cpp
template< class CharT, class Traits, class Alloc, class Pred >
constexpr std::basic_string<CharT, Traits, Alloc>::size_type
erase_if( std::basic_string<CharT, Traits, Alloc>& c, Pred pred );
```
_(since C++20)_

## Parameters
- `c`: container from which to erase
- `value`: value to be removed
- `pred`: unary predicate which returns true if the element should be erased. The expression pred(v) must be convertible to bool for every argument v of type (possibly const) CharT, regardless of value category, and must not modify v. Thus, a parameter type of CharT&is not allowed, nor is CharT unless for CharT a move is equivalent to a copy(since C++11).

## Return value
The number of erased elements.

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_algorithm_default_value_type
202403
(C++26)
List-initialization for algorithm (1)

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
 
int main()
{
    std::string word{"startling"};
    std::cout << "Initially, word = " << std::quoted(word) << '\n';
 
    std::erase(word, 'l');
    std::cout << "After erase 'l': " << std::quoted(word) << '\n';
 
    auto erased = std::erase_if(word, [](char x)
    {
        return x == 'a' or x == 'r' or x == 't';
    });
 
    std::cout << "After erase all 'a', 'r', and 't': " << std::quoted(word) << '\n';
    std::cout << "Erased symbols count: " << erased << '\n';
 
#if __cpp_lib_algorithm_default_value_type
    std::erase(word, {'g'});
    std::cout << "After erase {'g'}: " << std::quoted(word) << '\n';
#endif
}
```

## See also
- [removeremove_if](/cpp/algorithm/remove/)
- [ranges::removeranges::remove_if](/cpp/algorithm/ranges/remove/)
