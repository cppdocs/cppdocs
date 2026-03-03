---
title: "std::basic_string<CharT,Traits,Allocator>::append_range"
source_path: "cpp/string/basic_string/append_range"
category: "string"
since: "C++23"
---

Appends all characters from the range rg.

## Declarations
```cpp
template< container-compatible-range<CharT> R >
constexpr std::basic_string& append_range( R&& rg );
```
_(since C++23)_

## Parameters
- `rg`: a container compatible range

## Return value
*this

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
member functions that accept container compatible range

## Example
```cpp
#include <cassert>
#include <string>
 
int main()
{
    std::string head{"long long"};
    const auto tail = {' ', 'i', 'n', 't'};
 
#ifdef __cpp_lib_containers_ranges
    head.append_range(tail);
#else
    head.append(tail.begin(), tail.end());
#endif
 
    assert(head == "long long int");
}
```

## See also
- [append](/cpp/string/basic_string/append/)
