---
title: "std::move_iterator<Iter>::operator[]"
source_path: "cpp/iterator/move_iterator/operator_at"
aliases:
  - "/cpp/iterator/move_iterator/operator&/"
category: "iterator"
since: "C++20"
---

Returns a reference to the element at specified relative location.

## Declarations
```cpp
/* unspecified */ operator[]( difference_type n ) const;
```
_(constexpr since C++17) (until C++20)_

```cpp
constexpr reference operator[]( difference_type n ) const;
```
_(since C++20)_

## Parameters
- `n`: position relative to current location

## Return value
std::move([current](/cpp/iterator/move_iterator/#current) ﻿[n])(until C++20)[ranges::iter_move](/cpp/iterator/ranges/iter_move/)([current](/cpp/iterator/move_iterator/#current)+ n)(since C++20)

## Notes
The return type is unspecified because the return type of the underlying iterator's operator[] is also unspecified (see [LegacyRandomAccessIterator](/cpp/named_req/randomaccessiterator/)).

## Example
```cpp
#include <cstddef>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <list>
#include <string>
#include <vector>
 
void print(auto rem, const auto& v)
{
    for (std::cout << rem; const auto& e : v)
        std::cout << std::quoted(e) << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::vector<std::string> p{"alpha", "beta", "gamma", "delta"}, q;
    print("1) p: ", p);
 
    std::move_iterator it{p.begin()};
 
    for (std::size_t t{}; t != p.size(); ++t)
        q.emplace_back(it[t]); 
 
    print("2) p: ", p);
    print("3) q: ", q);
 
    std::list l{1, 2, 3};
    std::move_iterator it2{l.begin()};
//  it2[1] = 13; // Compilation error: the underlying iterator
                 // does not model the random access iterator
//  *it2 = 999;  // Compilation error: using rvalue as lvalue
}
```

## See also
- [operator*operator->](/cpp/iterator/move_iterator/operator/)
