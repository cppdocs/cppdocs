---
title: "std::experimental::boyer_moore_searcher, std::experimental::make_boyer_moore_searcher"
source_path: "cpp/experimental/boyer_moore_searcher"
header: "<experimental/functional>"
category: "experimental"
---

A searcher suitable for use with [std::experimental::search](/cpp/experimental/search/) that implements the [Boyer-Moore string searching algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_string_search_algorithm).

## Declarations
```cpp
template< class RandomIt1,
class Hash = std::hash<typename std::iterator_traits<RandomIt1>::value_type>,
class BinaryPredicate = std::equal_to<> >
class boyer_moore_searcher;
```
_(library fundamentals TS)_

## Parameters
- `pat_first, pat_last`: a pair of iterators designating the string to be searched for
- `hf`: a callable object used to hash the elements of the string
- `pred`: a callable object used to determine equality

## Return value
If the pattern [pat_first,pat_last) is empty, returns first.

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
