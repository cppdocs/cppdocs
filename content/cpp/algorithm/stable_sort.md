---
title: "std::stable_sort"
source_path: "cpp/algorithm/stable_sort"
header: "<algorithm>"
category: "algorithm"
since: "C++17"
---

Sorts the elements in the range [first,last) in non-descending order. The order of equivalent elements is guaranteed to be preserved.

## Declarations
```cpp
template< class RandomIt >
void stable_sort( RandomIt first, RandomIt last );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class RandomIt >
void stable_sort( ExecutionPolicy&& policy,
RandomIt first, RandomIt last );
```
_(since C++17)_

```cpp
template< class RandomIt, class Compare >
void stable_sort( RandomIt first, RandomIt last, Compare comp );
```
_(constexpr since C++26)_

```cpp
template< class ExecutionPolicy, class RandomIt, class Compare >
void stable_sort( ExecutionPolicy&& policy,
RandomIt first, RandomIt last, Compare comp );
```
_(since C++17)_

## Parameters
- `first, last`: the range of elements to sort
- `policy`: the execution policy to use
- `comp`: comparison function object (i.e. an object that satisfies the requirements of Compare) which returns true if the first argument is less than (i.e. is ordered before) the second. The signature of the comparison function should be equivalent to the following: bool cmp(const Type1& a, const Type2& b); While the signature does not need to have const&, the function must not modify the objects passed to it and must be able to accept all values of type (possibly const) Type1 and Type2 regardless of value category (thus, Type1& is not allowed, nor is Type1 unless for Type1 a move is equivalent to a copy(since C++11)). The types Type1 and Type2 must be such that an object of type RandomIt can be dereferenced and then implicitly converted to both of them.

## Notes
This function attempts to allocate a temporary buffer equal in size to the sequence to be sorted. If the allocation fails, the less efficient algorithm is chosen.

## Example
```cpp
#include <algorithm>
#include <array>
#include <iostream>
#include <string>
#include <vector>
 
struct Employee
{
    int age;
    std::string name; // Does not participate in comparisons
};
 
bool operator<(const Employee& lhs, const Employee& rhs)
{
    return lhs.age < rhs.age;
}
 
#if __cpp_lib_constexpr_algorithms >= 202306L
consteval auto get_sorted()
{
    auto v = std::array{3, 1, 4, 1, 5, 9};
    std::stable_sort(v.begin(), v.end());
    return v;
}
static_assert(std::ranges::is_sorted(get_sorted()));
#endif
 
int main()
{
    std::vector<Employee> v{{108, "Zaphod"}, {32, "Arthur"}, {108, "Ford"}};
 
    std::stable_sort(v.begin(), v.end());
 
    for (const Employee& e : v)
        std::cout << e.age << ", " << e.name << '\n';
}
```

## See also
- [sort](/cpp/algorithm/sort/)
- [partial_sort](/cpp/algorithm/partial_sort/)
- [stable_partition](/cpp/algorithm/stable_partition/)
- [ranges::stable_sort](/cpp/algorithm/ranges/stable_sort/)
