---
title: "std::move_iterator"
source_path: "cpp/iterator/move_iterator"
header: "<iterator>"
---

std::move_iterator is an iterator adaptor which behaves exactly like the underlying iterator (which must be at least a [LegacyInputIterator](/cpp/named_req/InputIterator/)or model [input_iterator](/cpp/iterator/input_iterator/)(since C++20), or stronger iterator concept(since C++23)), except that dereferencing converts the value returned by the underlying iterator into an rvalue. If this iterator is used as an input iterator, the effect is that the values are moved from, rather than copied from.

## Declarations
```cpp
template< class Iter >
class move_iterator;
```
_(since C++11)_

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_move_iterator_concept
202207L
(C++23)
Make std::move_iterator<T*> a random access iterator

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <ranges>
#include <string>
#include <string_view>
#include <vector>
 
void print(const std::string_view rem, const auto& v)
{
    std::cout << rem;
    for (const auto& s : v)
        std::cout << std::quoted(s) << ' ';
    std::cout << '\n';
};
 
int main()
{
    std::vector<std::string> v{"this", "_", "is", "_", "an", "_", "example"};
    print("Old contents of the vector: ", v);
    std::string concat;
    for (auto begin = std::make_move_iterator(v.begin()),
              end = std::make_move_iterator(v.end());
         begin != end; ++begin)
    {
        std::string temp{*begin}; // moves the contents of *begin to temp
        concat += temp;
    }
 
    // Starting from C++17, which introduced class template argument deduction,
    // the constructor of std::move_iterator can be used directly:
    // std::string concat = std::accumulate(std::move_iterator(v.begin()),
    //                                      std::move_iterator(v.end()),
    //                                      std::string());
 
    print("New contents of the vector: ", v);
    print("Concatenated as string: ", std::ranges::single_view(concat));
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2106 | C++11 | dereferencing a move_iterator could return a dangling referenceif the dereferencing the underlying iterator returns a prvalue | returns theobject instead |
| LWG 3736 | C++20 | move_iterator was missing disable_sized_sentinel_for specialization | added |
| P2259R1 | C++20 | member iterator_category was defined even ifstd::iterator_traits<Iter>::iterator_category is not defined | iterator_category isnot defined in this case |

## See also
- [make_move_iterator](/cpp/iterator/make_move_iterator/)
- [move_sentinel](/cpp/iterator/move_sentinel/)
