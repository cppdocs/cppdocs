---
title: "std::basic_string<CharT,Traits,Allocator>::assign_range"
source_path: "cpp/string/basic_string/assign_range"
category: "string"
since: "C++23"
---

Replaces the contents of the string with the values in the range rg.

## Declarations
```cpp
template< container-compatible-range<CharT> R >
constexpr std::basic_string& assign_range( R&& rg );
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
    const auto source = {'s', 'o', 'u', 'r', 'c', 'e'};
    std::string destination{"destination"};
 
#ifdef __cpp_lib_containers_ranges
    destination.assign_range(source);
#else
    destination.assign(source.begin(), source.end());
#endif
 
    assert(destination == "source");
}
```

## See also
- [assign](/cpp/string/basic_string/assign/)
- [operator=](/cpp/string/basic_string/operator/)
- [(constructor)](/cpp/string/basic_string/basic_string/)
