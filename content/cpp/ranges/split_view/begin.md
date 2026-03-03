---
title: "std::ranges::split_view<V,Pattern>::begin"
source_path: "cpp/ranges/split_view/begin"
category: "ranges"
since: "C++20"
---

Returns an [iterator](/cpp/ranges/split_view/iterator/) to the first found subrange.

## Declarations
```cpp
constexpr /*iterator*/ begin();
```
_(since C++20)_

## Return value
An [iterator](/cpp/ranges/split_view/iterator/).

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <ranges>
#include <string_view>
 
int main()
{
    constexpr std::string_view sentence{"Keep..moving..forward.."};
    constexpr std::string_view delim{".."};
    std::ranges::split_view words{sentence, delim};
 
    std::cout << "begin(): " << std::quoted(std::string_view{*words.begin()})
              << "\nSubstrings: ";
    for (auto word : words)
        std::cout << std::quoted(std::string_view(word)) << ' ';
 
    std::ranges::split_view letters{sentence, std::string_view{""}};
    std::cout << "\nbegin(): " << std::quoted(std::string_view{*letters.begin()})
              << "\nLetters: ";
    for (auto letter : letters)
        std::cout << std::string_view(letter) << ' ';
    std::cout << '\n';
}
```

## See also
- [end](/cpp/ranges/split_view/end/)
- [begin](/cpp/ranges/lazy_split_view/begin/)
- [ranges::begin](/cpp/ranges/begin/)
