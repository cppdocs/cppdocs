---
title: "std::make_move_iterator"
source_path: "cpp/iterator/make_move_iterator"
header: "<iterator>"
category: "iterator"
---

make_move_iterator is a convenience function template that constructs a [std::move_iterator](/cpp/iterator/move_iterator/) for the given iterator i with the type deduced from the type of the argument.

## Declarations
```cpp
template< class Iter >
std::move_iterator<Iter> make_move_iterator( Iter i );
```
_(since C++11) (constexpr since C++17)_

## Parameters
- `i`: input iterator to be converted to move iterator

## Return value
[std::move_iterator](/cpp/iterator/move_iterator/)<Iter>(std::move(i))

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <iterator>
#include <list>
#include <string>
#include <vector>
 
auto print = [](const auto rem, const auto& seq)
{
    for (std::cout << rem; const auto& str : seq)
        std::cout << std::quoted(str) << ' ';
    std::cout << '\n';
};
 
int main()
{
    std::list<std::string> s{"one", "two", "three"};
 
    std::vector<std::string> v1(s.begin(), s.end()); // copy
 
    std::vector<std::string> v2(std::make_move_iterator(s.begin()),
                                std::make_move_iterator(s.end())); // move
 
    print("v1 now holds: ", v1);
    print("v2 now holds: ", v2);
    print("original list now holds: ", s);
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2061 | C++11 | make_move_iterator did not convert array arguments to pointers | made to convert |

## See also
- [move_iterator](/cpp/iterator/move_iterator/)
- [move](/cpp/utility/move/)
