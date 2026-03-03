---
title: "std::basic_string<CharT,Traits,Allocator>::clear"
source_path: "cpp/string/basic_string/clear"
category: "string"
---

Removes all characters from the string as if by executing erase(begin(), end()).

## Declarations
```cpp
void clear();
```
_(noexcept since C++11) (constexpr since C++20)_

## Return value
(none)

## Notes
Unlike for [std::vector::clear](/cpp/container/vector/clear/), the C++ standard does not explicitly require that [capacity](/cpp/string/basic_string/capacity/) is unchanged by this function, but existing implementations do not change capacity. This means that they do not release the allocated memory (see also [shrink_to_fit](/cpp/string/basic_string/shrink_to_fit/)).

## Example
```cpp
#include <cassert>
#include <iostream>
#include <string>
 
int main()
{
    std::string s{"Exemplar"};
    std::string::size_type const capacity = s.capacity();
 
    s.clear();
    assert(s.empty());
    assert(s.size() == 0);
    std::cout << std::boolalpha << (s.capacity() == capacity) << '\n';
}
```

## See also
- [erase](/cpp/string/basic_string/erase/)
