---
title: "std::experimental::reflect::get_source_line"
source_path: "cpp/experimental/reflect/get_source_line"
header: "<experimental/reflect>"
category: "experimental"
---

Provides the member constant value equal to the [presumed line number](/cpp/preprocessor/line/) of the declaration of the entity or typedef-name reflected by T.

## Declarations
```cpp
template< Object T >
struct get_source_line;
```
_(reflection TS)_

## Example
```cpp
#include<experimental/reflect>
#include<iostream>
 
using refl = std::experimental::reflect;
 
float f;
struct P{};
 
int main()
{
    std::cout << refl::get_source_line_v<reflexpr(f)> << '\n';
    std::cout << refl::get_source_line_v<reflexpr(P)> << '\n';
}
```

## See also
- [line](/cpp/utility/source_location/line/)
- [source_line](/cpp/utility/stacktrace_entry/source_line/)
