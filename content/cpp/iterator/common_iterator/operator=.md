---
title: "std::common_iterator<I,S>::operator="
source_path: "cpp/iterator/common_iterator/operator"
category: "iterator"
since: "C++20"
---

Assigns the underlying [std::variant](/cpp/utility/variant/) member object var from that of x.

## Declarations
```cpp
template< class I2, class S2 >
requires std::convertible_to<const I2&, I> &&
std::convertible_to<const S2&, S> &&
std::assignable_from<I&, const I2&> &&
std::assignable_from<S&, const S2&>
constexpr common_iterator& operator=( const common_iterator<I2, S2>& x );
```
_(since C++20)_

## Parameters
- `x`: iterator adaptor to assign from

## Return value
*this

## Example
```cpp
#include <algorithm>
#include <initializer_list>
#include <iostream>
#include <iterator>
 
int main()
{
    const auto il = {1, 2, 3, 4, 5, 6};
    using CI = std::common_iterator<
                   std::counted_iterator<std::initializer_list<int>::iterator>,
                   std::default_sentinel_t>;
    CI first{std::counted_iterator{std::next(begin(il), 1), ssize(il) - 1}};
    const CI first2{std::counted_iterator{std::next(begin(il), 2), ssize(il) - 2}};
    const CI last{std::default_sentinel};
    std::copy(first, last, std::ostream_iterator<int>{std::cout, " "});
    std::cout << '\n';
    first = first2;
    std::copy(first, last, std::ostream_iterator<int>{std::cout, " "});
    std::cout << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3574 | C++20 | variant was fully constexpr (P2231R1) but common_iterator was not | also made constexpr |

## See also
- [(constructor)](/cpp/iterator/common_iterator/common_iterator/)
