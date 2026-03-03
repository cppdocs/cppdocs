---
title: "std::basic_string<CharT,Traits,Allocator>::insert_range"
source_path: "cpp/string/basic_string/insert_range"
category: "string"
since: "C++23"
---

Inserts characters from the range rg before the element (if any) pointed by pos.

## Declarations
```cpp
template< container-compatible-range<CharT> R >
constexpr iterator insert_range( const_iterator pos, R&& rg );
```
_(since C++23)_

## Parameters
- `pos`: iterator before which the characters will be inserted
- `rg`: a container compatible range

## Return value
An iterator which refers to the first inserted character, or pos if no characters were inserted because rg was empty.

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
#include <iterator>
#include <string>
 
int main()
{
    const auto source = {'l', 'i', 'b', '_'};
    std::string target{"__cpp_containers_ranges"};
    //                        ^insertion will occur
    //                         before this position
 
    const auto pos = target.find("container");
    assert(pos != target.npos);
    auto iter = std::next(target.begin(), pos);
 
#ifdef __cpp_lib_containers_ranges
    target.insert_range(iter, source);
#else
    target.insert(iter, source.begin(), source.end());
#endif
 
    assert(target == "__cpp_lib_containers_ranges");
    //                      ^^^^
}
```

## See also
- [insert](/cpp/string/basic_string/insert/)
