---
title: "std::tuple"
source_path: "cpp/utility/tuple"
header: "<tuple>"
category: "utility"
since: "C++11"
---

Class template std::tuple is a fixed-size collection of heterogeneous values. It is a generalization of [std::pair](/cpp/utility/pair/).

## Declarations
```cpp
template< class... Types >
class tuple;
```
_(since C++11)_

## Notes
Since the "shape" of a tuple – its size, the types of its elements, and the ordering of those types – are part of its type signature, they must all be available at compile time and can only depend on other compile-time information. This means that many conditional operations on tuples – in particular, conditional prepend/append and filter – are only possible if the conditions can be evaluated at compile time. For example, given a std::tuple<int, double, int>, it is possible to filter on types – e.g. returning a std::tuple<int, int> – but not to filter on whether or not each element is positive (which would have a different type signature depending on runtime values of the tuple), unless all the elements were themselves constexpr.

As a workaround, one can work with tuples of [std::optional](/cpp/utility/optional/), but there is still no way to adjust the size based on runtime information.

Until [N4387](https://wg21.link/N4387) (applied as a defect report for C++11), a function could not return a tuple using copy-list-initialization:

## Example
```cpp
#include <iostream>
#include <stdexcept>
#include <string>
#include <tuple>
 
std::tuple<double, char, std::string> get_student(int id)
{
    switch (id)
    {
        case 0: return {3.8, 'A', "Lisa Simpson"};
        case 1: return {2.9, 'C', "Milhouse Van Houten"};
        case 2: return {1.7, 'D', "Ralph Wiggum"};
        case 3: return {0.6, 'F', "Bart Simpson"};
    }
 
    throw std::invalid_argument("id");
}
 
int main()
{
    const auto student0 = get_student(0);
    std::cout << "ID: 0, "
              << "GPA: " << std::get<0>(student0) << ", "
              << "grade: " << std::get<1>(student0) << ", "
              << "name: " << std::get<2>(student0) << '\n';
 
    const auto student1 = get_student(1);
    std::cout << "ID: 1, "
              << "GPA: " << std::get<double>(student1) << ", "
              << "grade: " << std::get<char>(student1) << ", "
              << "name: " << std::get<std::string>(student1) << '\n';
 
    double gpa2;
    char grade2;
    std::string name2;
    std::tie(gpa2, grade2, name2) = get_student(2);
    std::cout << "ID: 2, "
              << "GPA: " << gpa2 << ", "
              << "grade: " << grade2 << ", "
              << "name: " << name2 << '\n';
 
    // C++17 structured binding:
    const auto [gpa3, grade3, name3] = get_student(3);
    std::cout << "ID: 3, "
              << "GPA: " << gpa3 << ", "
              << "grade: " << grade3 << ", "
              << "name: " << name3 << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2796 | C++11 | triviality of the destructor of std::tuple was unspecified | specified |
| LWG 3990 | C++11 | a program could declare an explicit orpartial specialization of std::tuple | the program is ill-formed in thiscase (no diagnostic required) |

## See also
- [pair](/cpp/utility/pair/)
