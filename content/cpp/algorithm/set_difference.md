---
title: "std::set_difference"
source_path: "cpp/algorithm/set_difference"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Copies the elements from the sorted range [first1,last1) which are not found in the sorted range [first2,last2) to the range beginning at d_first. The output range is also sorted.

## Declarations
```cpp
template< class InputIt1, class InputIt2, class OutputIt >
OutputIt set_difference( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2, class ForwardIt3 >
ForwardIt3 set_difference( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first );
```
_(since C++17)_

```cpp
template< class InputIt1, class InputIt2,
class OutputIt, class Compare >
OutputIt set_difference( InputIt1 first1, InputIt1 last1,
InputIt2 first2, InputIt2 last2,
OutputIt d_first, Compare comp );
```
_(constexpr since C++20)_

```cpp
template< class ExecutionPolicy,
class ForwardIt1, class ForwardIt2,
class ForwardIt3, class Compare >
ForwardIt3 set_difference( ExecutionPolicy&& policy,
ForwardIt1 first1, ForwardIt1 last1,
ForwardIt2 first2, ForwardIt2 last2,
ForwardIt3 d_first, Compare comp );
```
_(since C++17)_

## Parameters
- `first1, last1`: the range of elements to examine
- `first2, last2`: the range of elements to search for
- `d_first`: the beginning of the output range
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that objects of types InputIt1 and InputIt2 can be dereferenced and then implicitly converted to both Type1 and Type2.

## Return value
Iterator past the end of the constructed range.

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <iterator>
#include <vector>
 
template<typename T>
std::ostream& operator<<(std::ostream& os, const std::vector<T>& v)
{
    os << '{';
    for (auto n{v.size()}; const auto& e : v)
        os << e << (--n ? ", " : "");
    return os << '}';
}
 
struct Order // a struct with very interesting data
{
    int order_id{};
 
    friend std::ostream& operator<<(std::ostream& os, const Order& ord)
    {
        return os << ord.order_id;
    }
};
 
int main()
{
    const std::vector<int> v1{1, 2, 5, 5, 5, 9};
    const std::vector<int> v2{2, 5, 7};
    std::vector<int> diff;
 
    std::set_difference(v1.begin(), v1.end(), v2.begin(), v2.end(),
                        std::inserter(diff, diff.begin()));
 
    std::cout << v1 << " ∖ " << v2 << " == " << diff << "\n\n";
 
    // we want to know which orders "cut" between old and new states:
    std::vector<Order> old_orders{{1}, {2}, {5}, {9}};
    std::vector<Order> new_orders{{2}, {5}, {7}};
    std::vector<Order> cut_orders;
 
    std::set_difference(old_orders.begin(), old_orders.end(),
                        new_orders.begin(), new_orders.end(),
                        std::back_inserter(cut_orders),
                        [](auto& a, auto& b) { return a.order_id < b.order_id; });
 
    std::cout << "old orders: " << old_orders << '\n'
              << "new orders: " << new_orders << '\n'
              << "cut orders: " << cut_orders << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 291 | C++98 | it was unspecified how to handle equivalent elements in the input ranges | specified |

## See also
- [includes](/cpp/algorithm/includes/)
- [set_symmetric_difference](/cpp/algorithm/set_symmetric_difference/)
- [ranges::set_difference](/cpp/algorithm/ranges/set_difference/)
