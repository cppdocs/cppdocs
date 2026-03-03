---
title: "std::search"
source_path: "cpp/algorithm/search"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

1-4) Searches for the first occurrence of the sequence of elements [s_first,s_last) in the range [first,last).

## Declarations
```cpp
template< class ForwardIt1, class ForwardIt2 >
ForwardIt1 search( ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt1, class ForwardIt2 >
ForwardIt1 search( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last );
```
_(since C++17)_

```cpp
template< class ForwardIt1, class ForwardIt2, class BinaryPred >
ForwardIt1 search( ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last,
BinaryPred p );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class BinaryPred >
ForwardIt1 search( ExecutionPolicy&& policy,
ForwardIt1 first, ForwardIt1 last,
ForwardIt2 s_first, ForwardIt2 s_last,
BinaryPred p );
```
_(since C++17)_

```cpp
template< class ForwardIt, class Searcher >
ForwardIt search( ForwardIt first, ForwardIt last,
const Searcher& searcher );
```
_(since C++17) (constexpr since C++20)_

## Parameters
- `first, last`: the range of elements to examine
- `s_first, s_last`: the range of elements to search for
- `policy`: the execution policy to use
- `searcher`: the searcher encapsulating the search algorithm and the pattern to look for
- `p`: binary predicate which returns true if the elements should be treated as equal. The signature of the predicate function should be equivalent to the following: bool pred(const Type1 &a, const Type2 &b); While the signature does not need to have const &, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1 & is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types ForwardIt1 and ForwardIt2 can be dereferenced and then implicitly converted to Type1 and Type2 respectively.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <functional>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <string_view>
#include <vector>
 
using namespace std::literals;
 
bool contains(const auto& cont, std::string_view s)
{
    // str.find() (or str.contains(), since C++23) can be used as well
    return std::search(cont.begin(), cont.end(), s.begin(), s.end()) != cont.end();
}
 
int main()
{
    const auto str{"why waste time learning, when ignorance is instantaneous?"sv};
    assert(contains(str, "learning"));
    assert(not contains(str, "lemming"));
 
    const std::vector vec(str.begin(), str.end());
    assert(contains(vec, "learning"));
    assert(not contains(vec, "leaning"));
 
    // The C++17 overload with searchers demo:
    constexpr auto quote
    {
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
        "do eiusmod tempor incididunt ut labore et dolore magna aliqua"sv
    };
 
    for (const auto word : {"pisci"sv, "Pisci"sv})
    {
        std::cout << "The string " << std::quoted(word) << ' ';
        const std::boyer_moore_searcher searcher(word.begin(), word.end());
        const auto it = std::search(quote.begin(), quote.end(), searcher);
        if (it == quote.end())
            std::cout << "not found\n";
        else
            std::cout << "found at offset " << std::distance(quote.begin(), it) << '\n';
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 1205 | C++98 | the return value was unclear if [s_first, s_last) is empty | returns first in this case |
| LWG 1338 | C++98 | the resolution of LWG issue 1205 was incorrectly applied,making first to be returned if no occurence is found | returns last in this case |
| LWG 2150 | C++98 | the condition of “sequence occurence” was incorrect | corrected |

## See also
- [find_end](/cpp/algorithm/find_end/)
- [includes](/cpp/algorithm/includes/)
- [equal](/cpp/algorithm/equal/)
- [findfind_iffind_if_not](/cpp/algorithm/find/)
- [lexicographical_compare](/cpp/algorithm/lexicographical_compare/)
- [mismatch](/cpp/algorithm/mismatch/)
- [search_n](/cpp/algorithm/search_n/)
- [default_searcher](/cpp/utility/functional/default_searcher/)
- [boyer_moore_searcher](/cpp/utility/functional/boyer_moore_searcher/)
- [boyer_moore_horspool_searcher](/cpp/utility/functional/boyer_moore_horspool_searcher/)
- [ranges::search](/cpp/algorithm/ranges/search/)
