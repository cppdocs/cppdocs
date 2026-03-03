---
title: "std::is_volatile"
source_path: "cpp/types/is_volatile"
header: "<type_traits>"
category: "types"
since: "C++11"
---

std::is_volatile is a [UnaryTypeTrait](/cpp/named_req/unarytypetrait/).

## Declarations
```cpp
template< class T >
struct is_volatile;
```
_(since C++11)_

## Example
```cpp
#include <type_traits>
#include <valarray>
 
static_assert(!std::is_volatile_v<int>);
static_assert(std::is_volatile_v<volatile int>);
static_assert(std::is_volatile_v<volatile const int>);
static_assert(std::is_volatile_v<volatile std::valarray<float>>);
static_assert(!std::is_volatile_v<std::valarray<volatile float>>);
 
int main() {}
```

## See also
- [is_const](/cpp/types/is_const/)
