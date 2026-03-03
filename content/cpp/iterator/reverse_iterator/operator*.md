---
title: "std::reverse_iterator<Iter>::operator*,->"
source_path: "cpp/iterator/reverse_iterator/operator"
category: "iterator"
since: "C++20"
---

Returns a reference or pointer to the element previous to [current](/cpp/iterator/reverse_iterator/#current).

## Declarations
```cpp
reference operator*() const;
```
_(constexpr since C++17)_

```cpp
pointer operator->() const;
```
_(constexpr since C++17) (until C++20)_

```cpp
constexpr pointer operator->() const
requires (std::is_pointer_v<Iter> ||
requires (const Iter i) { i.operator->(); });
```
_(since C++20)_

## Return value
As described above.

## Example
```cpp
#include <complex>
#include <iostream>
#include <iterator>
#include <vector>
 
int main()
{
    using RI0 = std::reverse_iterator<int*>;
    int a[]{0, 1, 2, 3};
    RI0 r0{std::rbegin(a)};
    std::cout << "*r0 = " << *r0 << '\n';
    *r0 = 42;
    std::cout << "a[3] = " << a[3] << '\n';
 
    using RI1 = std::reverse_iterator<std::vector<int>::iterator>;
    std::vector<int> vi{0, 1, 2, 3};
    RI1 r1{vi.rend() - 2};
    std::cout << "*r1 = " << *r1 << '\n';
 
    using RI2 = std::reverse_iterator<std::vector<std::complex<double>>::iterator>;
    std::vector<std::complex<double>> vc{{1, 2}, {3, 4}, {5, 6}, {7, 8}};
    RI2 r2{vc.rbegin() + 1};
    std::cout << "vc[2] = (" << r2->real() << ',' << r2->imag() << ")\n";
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2188 | C++11 | operator-> used & to take address | uses std::addressof instead |

## See also
- [operator[]](/cpp/iterator/reverse_iterator/operator_at/)
