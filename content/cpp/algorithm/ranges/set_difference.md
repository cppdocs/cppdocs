---
title: "std::ranges::set_difference, std::ranges::set_difference_result"
source_path: "cpp/algorithm/ranges/set_difference"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Copies the elements from the sorted input range [first1,last1) which are not found in the sorted input range [first2,last2) to the output range beginning at result.

## Declarations
```cpp
Call signature
```

```cpp
template< std::input_iterator I1, std::sentinel_for<I1> S1,
std::input_iterator I2, std::sentinel_for<I2> S2,
std::weakly_incrementable O, class Comp = ranges::less,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::mergeable<I1, I2, O, Comp, Proj1, Proj2>
constexpr set_difference_result<I1, O>
set_difference( I1 first1, S1 last1, I2 first2, S2 last2,
O result, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
template< ranges::input_range R1, ranges::input_range R2,
std::weakly_incrementable O, class Comp = ranges::less,
class Proj1 = std::identity, class Proj2 = std::identity >
requires std::mergeable<ranges::iterator_t<R1>, ranges::iterator_t<R2>,
O, Comp, Proj1, Proj2>
constexpr set_difference_result<ranges::borrowed_iterator_t<R1>, O>
set_difference( R1&& r1, R2&& r2, O result, Comp comp = {},
Proj1 proj1 = {}, Proj2 proj2 = {} );
```
_(since C++20)_

```cpp
Helper types
```

```cpp
template< class I, class O >
using set_difference_result = ranges::in_out_result<I, O>;
```
_(since C++20)_

## Parameters
- `first1, last1`: iterator-sentinel pair denoting the first sorted input range
- `first2, last2`: iterator-sentinel pair denoting the second sorted input range
- `r1`: the first sorted input range
- `r2`: the second sorted input range
- `result`: the beginning of the output range
- `comp`: comparator to apply to the projected elements
- `proj1`: projection to apply to the elements in the first range
- `proj2`: projection to apply to the elements in the second range

## Return value
{last1, result_last}, where result_last is the end of the constructed range.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <iostream>
#include <iterator>
#include <string_view>
#include <vector>
 
auto print = [](const auto& v, std::string_view end = "")
{
    std::cout << "{ ";
    for (auto n{v.size()}; auto i : v)
        std::cout << i << (--n ? ", " : " ");
    std::cout << "} " << end;
};
 
struct Order // a struct with some very interesting data
{
    int order_id{};
 
    friend std::ostream& operator<<(std::ostream& os, const Order& ord)
    {
        return os << '{' << ord.order_id << '}';
    }
};
 
int main()
{
    const auto v1 = {1, 2, 5, 5, 5, 9};
    const auto v2 = {2, 5, 7};
    std::vector<int> diff{};
 
    std::ranges::set_difference(v1, v2, std::back_inserter(diff));
    print(v1, "∖ ");
    print(v2, "= ");
    print(diff, "\n\n");
 
    // We want to know which orders "cut" between old and new states:
    const std::vector<Order> old_orders{{1}, {2}, {5}, {9}};
    const std::vector<Order> new_orders{{2}, {5}, {7}};
    std::vector<Order> cut_orders(old_orders.size() + new_orders.size());
 
    auto [old_orders_end, cut_orders_last] =
        std::ranges::set_difference(old_orders, new_orders,
                                    cut_orders.begin(), {},
                                    &Order::order_id, &Order::order_id);
    assert(old_orders_end == old_orders.end());
 
    std::cout << "old orders = ";
    print(old_orders, "\n");
    std::cout << "new orders = ";
    print(new_orders, "\n");
    std::cout << "cut orders = ";
    print(cut_orders, "\n");
    cut_orders.erase(cut_orders_last, end(cut_orders));
    std::cout << "cut orders = ";
    print(cut_orders, "\n");
}
```

## See also
- [ranges::set_union](/cpp/algorithm/ranges/set_union/)
- [ranges::set_intersection](/cpp/algorithm/ranges/set_intersection/)
- [ranges::set_symmetric_difference](/cpp/algorithm/ranges/set_symmetric_difference/)
- [ranges::includes](/cpp/algorithm/ranges/includes/)
- [set_difference](/cpp/algorithm/set_difference/)
