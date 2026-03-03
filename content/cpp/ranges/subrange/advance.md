---
title: "std::ranges::subrange<I,S,K>::advance"
source_path: "cpp/ranges/subrange/advance"
category: "ranges"
since: "C++20"
---

Increments or decrements [begin_](/cpp/ranges/subrange/#begin) ﻿:

## Declarations
```cpp
constexpr subrange& advance( std::iter_difference_t<I> n );
```
_(since C++20)_

## Parameters
- `n`: number of maximal increments of the iterator

## Return value
*this

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <iterator>
#include <ranges>
 
void print(auto name, auto const sub)
{
    std::cout << name << ".size() == " << sub.size() << "; { ";
    std::ranges::for_each(sub, [](int x) { std::cout << x << ' '; });
    std::cout << "}\n";
};
 
int main()
{
    std::array arr{1, 2, 3, 4, 5, 6, 7};
    std::ranges::subrange sub{std::next(arr.begin()), std::prev(arr.end())};
    print("1) sub", sub);
    print("2) sub", sub.advance(3));
    print("3) sub", sub.advance(-2));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3433 | C++20 | the behavior was undefined if n < 0 | made well-defined if begin_ can be decremented |

## See also
- [next](/cpp/ranges/subrange/next/)
- [prev](/cpp/ranges/subrange/prev/)
- [advance](/cpp/iterator/advance/)
- [ranges::advance](/cpp/iterator/ranges/advance/)
