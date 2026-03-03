---
title: "std::swap"
source_path: "cpp/utility/swap"
header: "<algorithm>
(until C++11)"
category: "utility"
---

Exchanges the given values.

## Declarations
```cpp
template< class T >
void swap( T& a, T& b );
```
_(conditionally noexcept since C++11)(constexpr since C++20)_

```cpp
template< class T2, std::size_t N >
void swap( T2 (&a)[N], T2 (&b)[N] );
```
_(conditionally noexcept since C++11)(constexpr since C++20)_

## Parameters
- `a, b`: the values to be swapped

## Return value
(none)

## Example
```cpp
#include <algorithm>
#include <iostream>
 
namespace Ns
{
    class A
    {
        int id {};
 
        friend void swap(A& lhs, A& rhs)
        {
            std::cout << "swap(" << lhs << ", " << rhs << ")\n";
            std::swap(lhs.id, rhs.id);
        }
 
        friend std::ostream& operator<<(std::ostream& os, A const& a)
        {
            return os << "A::id=" << a.id;
        }
 
    public:
        A(int i) : id {i} {}
        A(A const&) = delete;
        A& operator = (A const&) = delete;
    };
}
 
int main()
{
    int a = 5, b = 3;
    std::cout << a << ' ' << b << '\n';
    std::swap(a, b);
    std::cout << a << ' ' << b << '\n';
 
    Ns::A p {6}, q {9};
    std::cout << p << ' ' << q << '\n';
//  std::swap(p, q); // error, type requirements are not satisfied
    swap(p, q);      // OK, ADL finds the appropriate friend `swap`
    std::cout << p << ' ' << q << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 227 | C++98 | T was not required to be CopyConstructible or DefaultConstructible(a temporary object of type T might not be able to be constructed) | T is also required tobe CopyConstructible |
| LWG 809 | C++98 | arrays could not be swapped | added overload (2) |
| LWG 2554 | C++11 | swapping multi-dimensional arrays can neverbe noexcept due to name lookup problems | made to work |

## See also
- [ranges::swap](/cpp/utility/ranges/swap/)
- [iter_swap](/cpp/algorithm/iter_swap/)
- [swap_ranges](/cpp/algorithm/swap_ranges/)
- [exchange](/cpp/utility/exchange/)
