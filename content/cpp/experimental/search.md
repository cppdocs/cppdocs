---
title: "std::experimental::search"
source_path: "cpp/experimental/search"
header: "<experimental/algorithm>"
category: "experimental"
---

Searches the sequence [first,last) for the pattern specified in the constructor of searcher.

## Declarations
```cpp
template< class ForwardIterator, class Searcher >
ForwardIterator search( ForwardIterator first, ForwardIterator last,
const Searcher& searcher );
```
_(library fundamentals TS)_

## Return value
Returns the result of searcher.operator(), that is, an iterator to the location at which the substring is found or a copy of last if it was not found.

## Example
```cpp
#include <experimental/algorithm>
#include <experimental/functional>
#include <iostream>
#include <string>
 
int main()
{
    std::string in = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
                     "do eiusmod tempor incididunt ut labore et dolore magna aliqua";
    std::string needle = "pisci";
    auto it = std::experimental::search(in.begin(), in.end(),
                  std::experimental::make_boyer_moore_searcher(
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
