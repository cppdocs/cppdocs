---
title: "std::ranges::subrange<I,S,K>::operator PairLike"
source_path: "cpp/ranges/subrange/operator"
category: "ranges"
since: "C++20"
---

1) Converts subrange to a pair-like type.

## Declarations
```cpp
template< /*different-from*/<subrange> PairLike >
requires /*pair-like-convertible-from*/<PairLike, const I&, const S&>
constexpr operator PairLike() const;
```
_(since C++20)_

```cpp
Helper concepts
```

```cpp
template< class T >
concept /*pair-like*/ = /* see description */;
```
_(exposition only*)_

```cpp
template< class T, class U, class V >
concept /*pair-like-convertible-from*/ = /* see description */;
```
_(exposition only*)_

## Return value
PairLike([begin_](/cpp/ranges/subrange/#begin) ﻿,[end_](/cpp/ranges/subrange/#end) ﻿)

## Notes
Following types in the standard library are pair-like:

A program-defined type derived from one of these types can be a pair-like type, if

Since subrange specializations are [range](/cpp/ranges/range/) types, conversion to them are not performed via this conversion function.

[std::array](/cpp/container/array/) specializations cannot be converted from subrange, since they are [range](/cpp/ranges/range/) types.

## Example
```cpp
#include <iostream>
#include <ranges>
#include <string>
#include <utility>
 
using striter = std::string::const_iterator;
 
using legacy_strview = std::pair<striter, striter>;
 
void legacy_print(legacy_strview p)
{
    for (; p.first != p.second; ++p.first)
        std::cout << *p.first << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::string dat{"ABCDE"};
    for (auto v{std::ranges::subrange{dat}}; v; v = {v.begin(), v.end() - 1})
    {
        /*...*/
        legacy_print(legacy_strview{v});
    }
}
```

## See also
- [tuple-likepair-like](/cpp/utility/tuple/tuple-like/)
- [std::get](/cpp/utility/tuple/get/)
- [std::tuple_element](/cpp/utility/tuple_element/)
- [std::tuple_size](/cpp/utility/tuple_size/)
