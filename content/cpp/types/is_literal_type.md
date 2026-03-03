---
title: "std::is_literal_type"
source_path: "cpp/types/is_literal_type"
header: "<type_traits>"
category: "types"
---

std::is_literal_type is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_literal_type;
```
_(since C++11) (deprecated in C++17) (removed in C++20)_

## Notes
Only literal types may be used as parameters to or returned from [constexpr functions](/cpp/language/constexpr/#constexpr_function). Only literal classes may have constexpr member functions.

## Example
```cpp
#include <type_traits>
 
struct A { int m; };
static_assert(std::is_literal_type_v<A> == true);
 
struct B { virtual ~B(); };
static_assert(std::is_literal_type_v<B> == false);
 
int main() {}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2015 | C++11 | T could be an array of incompleteclass type with unknown bound | the behavior isundefined in this case |
