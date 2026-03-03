---
title: "std::boyer_moore_horspool_searcher"
source_path: "cpp/utility/functional/boyer_moore_horspool_searcher"
header: "<functional>"
category: "utility"
since: "C++17"
---

A searcher suitable for use with the overload of [std::search](/cpp/algorithm/search/) that implements the [Boyer-Moore-Horspool string searching algorithm](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore%E2%80%93Horspool_algorithm).

## Declarations
```cpp
template< class RandomIt1,
class Hash = std::hash<typename std::iterator_traits<RandomIt1>::value_type>,
class BinaryPredicate = std::equal_to<> >
class boyer_moore_horspool_searcher;
```
_(since C++17)_

## Parameters
- `pat_first, pat_last`: a pair of iterators designating the string to be searched for
- `hf`: a callable object used to hash the elements of the string
- `pred`: a callable object used to determine equality

## Return value
If the pattern [pat_first,pat_last) is empty, returns [std::make_pair](/cpp/utility/pair/make_pair/)(first, first).

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_boyer_moore_searcher
201603L
(C++17)
searchers

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
                  std::boyer_moore_horspool_searcher(
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
- [default_searcher](/cpp/utility/functional/default_searcher/)
- [boyer_moore_searcher](/cpp/utility/functional/boyer_moore_searcher/)
