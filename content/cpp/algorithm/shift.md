---
title: "std::shift_left, std::shift_right"
source_path: "cpp/algorithm/shift"
header: "<algorithm>"
category: "algorithm"
since: "C++20"
---

Shifts the elements in the range [first,last) by n positions.

## Declarations
```cpp
template< class ForwardIt >
constexpr ForwardIt shift_left( ForwardIt first, ForwardIt last,
typename std::iterator_traits<ForwardIt>::
difference_type n );
```
_(since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt shift_left( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
typename std::iterator_traits<ForwardIt>::
difference_type n );
```
_(since C++20)_

```cpp
template< class ForwardIt >
constexpr ForwardIt shift_right( ForwardIt first, ForwardIt last,
typename std::iterator_traits<ForwardIt>::
difference_type n );
```
_(since C++20)_

```cpp
template< class ExecutionPolicy, class ForwardIt >
ForwardIt shift_right( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
typename std::iterator_traits<ForwardIt>::
difference_type n );
```
_(since C++20)_

## Parameters
- `first`: the beginning of the original range
- `last`: the end of the original range
- `n`: the number of positions to shift
- `policy`: the execution policy to use

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_shift
201806L
(C++20)
std::shift_left and std::shift_right

## Example
```cpp
#include <algorithm>
#include <iostream>
#include <string>
#include <type_traits>
#include <vector>
 
struct S
{
    int value{0};
    bool specified_state{true};
 
    S(int v = 0) : value{v} {}
    S(S const& rhs) = default;
    S(S&& rhs) { *this = std::move(rhs); }
    S& operator=(S const& rhs) = default;
    S& operator=(S&& rhs)
    {
        if (this != &rhs)
        {
            value = rhs.value;
            specified_state = rhs.specified_state;
            rhs.specified_state = false;
        }
        return *this;
    }
};
 
template<typename T>
std::ostream& operator<<(std::ostream& os, std::vector<T> const& v)
{
    for (const auto& s : v)
    {
        if constexpr (std::is_same_v<T, S>)
            s.specified_state ? os << s.value << ' ' : os << ". ";
        else if constexpr (std::is_same_v<T, std::string>)
            os << (s.empty() ? "." : s) << ' ';
        else
            os << s << ' ';
    }
    return os;
}
 
int main()
{
    std::cout << std::left;
 
    std::vector<S>           a{1, 2, 3, 4, 5, 6, 7};
    std::vector<int>         b{1, 2, 3, 4, 5, 6, 7};
    std::vector<std::string> c{"α", "β", "γ", "δ", "ε", "ζ", "η"};
 
    std::cout << "vector<S> \tvector<int> \tvector<string>\n";
    std::cout << a << "  " << b << "  " << c << '\n';
 
    std::shift_left(begin(a), end(a), 3);
    std::shift_left(begin(b), end(b), 3);
    std::shift_left(begin(c), end(c), 3);
    std::cout << a << "  " << b << "  " << c << '\n';
 
    std::shift_right(begin(a), end(a), 2);
    std::shift_right(begin(b), end(b), 2);
    std::shift_right(begin(c), end(c), 2);
    std::cout << a << "  " << b << "  " << c << '\n';
 
    std::shift_left(begin(a), end(a), 8); // has no effect: n >= last - first
    std::shift_left(begin(b), end(b), 8); // ditto
    std::shift_left(begin(c), end(c), 8); // ditto
    std::cout << a << "  " << b << "  " << c << '\n';
 
//  std::shift_left(begin(a), end(a), -3); // UB, e.g. segfault
}
```

## See also
- [move](/cpp/algorithm/move/)
- [move_backward](/cpp/algorithm/move_backward/)
- [rotate](/cpp/algorithm/rotate/)
- [ranges::shift_leftranges::shift_right](/cpp/algorithm/ranges/shift/)
