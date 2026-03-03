---
title: "std::default_searcher"
source_path: "cpp/utility/functional/default_searcher"
header: "<functional>"
category: "utility"
since: "C++17"
---

A class suitable for use with overload of [std::search](/cpp/algorithm/search/) that delegates the search operation to the pre-C++17 standard library's [std::search](/cpp/algorithm/search/).

## Declarations
```cpp
template< class ForwardIt, class BinaryPredicate = std::equal_to<> >
class default_searcher;
```
_(since C++17)_

## Parameters
- `pat_first, pat_last`: a pair of iterators designating the string to be searched for
- `pred`: a callable object used to determine equality

## Return value
A pair of iterators to the first and one past last positions in [first,last) where a subsequence that compares equal to [pat_first,pat_last) as defined by pred is located, or a pair of copies of last otherwise.

## Example
```cpp
#include <algorithm>
#include <functional>
#include <iomanip>
#include <iostream>
#include <string_view>
 
int main()
{
    constexpr std::string_view in =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua";
 
    const std::string_view needle{"pisci"};
 
    auto it = std::search(in.begin(), in.end(),
                  std::default_searcher(
                      needle.begin(), needle.end()));
    if (it != in.end())
        std::cout << "The string " << std::quoted(needle) << " found at offset "
                  << it - in.begin() << '\n';
    else
        std::cout << "The string " << std::quoted(needle) << " not found\n";
}
```

## See also
- [search](/cpp/algorithm/search/)
- [boyer_moore_searcher](/cpp/utility/functional/boyer_moore_searcher/)
- [boyer_moore_horspool_searcher](/cpp/utility/functional/boyer_moore_horspool_searcher/)
