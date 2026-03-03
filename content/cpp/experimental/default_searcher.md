---
title: "std::experimental::default_searcher, std::experimental::make_default_searcher"
source_path: "cpp/experimental/default_searcher"
header: "<experimental/functional>"
category: "experimental"
---

A class suitable for use with [std::experimental::search](/cpp/experimental/search/) that delegates the search operation to the standard library's [std::search](/cpp/algorithm/search/).

## Declarations
```cpp
template< class ForwardIterator1, class BinaryPredicate = std::equal_to<> >
class default_searcher;
```
_(library fundamentals TS)_

## Parameters
- `pat_first, pat_last`: a pair of iterators designating the string to be searched for
- `pred`: a callable object used to determine equality

## Return value
Iterator to the first position in [first,last) where a subsequence that compares equal to [pat_first,pat_last) as defined by pred is located, or a copy of last otherwise.

## Example
```cpp
#include <experimental/algorithm>
#include <experimental/functional>
#include <iostream>
#include <string>
 
int main()
{
    std::string in = "Lorem ipsum dolor sit amet, consectetur adipiscing elit,"
                     " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    std::string needle = "pisci";
    auto it = std::experimental::search(in.begin(), in.end(),
                  std::experimental::make_default_searcher(
                      needle.begin(), needle.end()));
    if (it != in.end())
        std::cout << "The string " << needle << " found at offset "
                  << it - in.begin() << '\n';
    else
        std::cout << "The string " << needle << " not found\n";
}
```

## See also
- [search](/cpp/algorithm/search/)
