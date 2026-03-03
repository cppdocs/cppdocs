---
title: "std::compare_three_way_result"
source_path: "cpp/utility/compare/compare_three_way_result"
header: "<compare>"
category: "utility"
since: "C++20"
---

Let t and u denote lvalue of const [std::remove_reference_t](/cpp/types/remove_reference/)<T> and const [std::remove_reference_t](/cpp/types/remove_reference/)<U> respectively, if the expression t <=> u is well-formed, provides the member typedef type equal to decltype(t <=> u), otherwise there is no member type.

## Declarations
```cpp
template< class T, class U = T >
struct compare_three_way_result;
```
_(since C++20)_

## Example
```cpp
#include <compare>
#include <iostream>
#include <type_traits>
 
template<class Ord>
void print_cmp_type()
{
    if constexpr (std::is_same_v<Ord, std::strong_ordering>)
        std::cout << "strong ordering\n";
    else if constexpr (std::is_same_v<Ord, std::weak_ordering>)
        std::cout << "weak ordering\n";
    else if constexpr (std::is_same_v<Ord, std::partial_ordering>)
        std::cout << "partial ordering\n";
    else
        std::cout << "illegal comparison result type\n";
}
 
int main()
{
    print_cmp_type<std::compare_three_way_result_t<int>>();
    print_cmp_type<std::compare_three_way_result_t<double>>();
}
```

## See also
- [partial_ordering](/cpp/utility/compare/partial_ordering/)
- [weak_ordering](/cpp/utility/compare/weak_ordering/)
- [strong_ordering](/cpp/utility/compare/strong_ordering/)
