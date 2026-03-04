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

## Template parameters
- `Types...`: the element types stored by the tuple. Every element type must satisfy the construction, assignment, and destruction requirements needed by the operations being used.

## Semantics
- A `tuple` stores a fixed number of elements, and both the number of elements and their types are part of the tuple type itself.
- The element layout is heterogeneous: each position may have a different type.
- Access can be index-based with [`get`](/cpp/utility/tuple/get/) or type-based when the requested type appears exactly once.
- Because the tuple shape is part of the type, most structural manipulations are compile-time operations rather than runtime ones.

## Member functions
### Special members
| Member | Description |
| --- | --- |
| [tuple::tuple](/cpp/utility/tuple/tuple/) | Constructs a tuple from values, tuples, pairs, or allocator-aware inputs. |
| [tuple::~tuple](/cpp/utility/tuple/~tuple/) | Destroys the tuple elements. |
| [tuple::operator=](/cpp/utility/tuple/operator=/) | Assigns from another tuple or tuple-like object. |

### Utilities
| Member | Description |
| --- | --- |
| [tuple::swap](/cpp/utility/tuple/swap/) | Exchanges the tuple elements with another tuple. |

## Non-member functions
| Function | Description |
| --- | --- |
| [get](/cpp/utility/tuple/get/) | Accesses tuple elements by index or by unique type. |
| [make_tuple](/cpp/utility/tuple/make_tuple/) | Creates a tuple from values with type decay. |
| [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/) | Creates a tuple of forwarding references. |
| [tie](/cpp/utility/tuple/tie/) | Creates a tuple of lvalue references for unpacking and assignment. |
| [tuple_cat](/cpp/utility/tuple/tuple_cat/) | Concatenates tuples into a new tuple. |
| [apply](/cpp/utility/apply/) | Invokes a callable with tuple elements expanded as arguments. |
| [make_from_tuple](/cpp/utility/make_from_tuple/) | Constructs an object from tuple elements. |
| [operator==, !=, <, <=, >, >=, <=>](/cpp/utility/tuple/operator_cmp/) | Compares tuple objects element-wise. |
| [swap](/cpp/utility/tuple/swap2/) | Specializes `std::swap` for tuples. |

## Helper classes
| Helper | Description |
| --- | --- |
| [tuple_size, tuple_size_v](/cpp/utility/tuple_size/) | Compile-time number of elements in a tuple-like type. |
| [tuple_element, tuple_element_t](/cpp/utility/tuple_element/) | Compile-time type lookup by tuple index. |
| [uses_allocator](/cpp/utility/tuple/uses_allocator/) | Allocator-awareness trait specialization for tuples. |

## Helper concepts and specializations
| Helper | Description |
| --- | --- |
| [basic_common_reference](/cpp/utility/tuple/basic_common_reference/) | Common-reference support for tuples. |
| [common_type](/cpp/utility/tuple/common_type/) | Common-type support for tuples. |
| [tuple-like](/cpp/utility/tuple/tuple-like/) | C++23 exposition concept describing tuple-like types. |
| [deduction guides](/cpp/utility/tuple/deduction_guides/) | Guide tuple class template argument deduction. |

## Notes
`std::tuple` is the standard library's general-purpose heterogeneous product type. It is most useful when a function needs to return several values together, or when generic code needs to bundle several unrelated values into one object.

Since the "shape" of a tuple – its size, the types of its elements, and the ordering of those types – are part of its type signature, they must all be available at compile time and can only depend on other compile-time information. This means that many conditional operations on tuples – in particular, conditional prepend/append and filter – are only possible if the conditions can be evaluated at compile time. For example, given a std::tuple<int, double, int>, it is possible to filter on types – e.g. returning a std::tuple<int, int> – but not to filter on whether or not each element is positive (which would have a different type signature depending on runtime values of the tuple), unless all the elements were themselves constexpr.

As a workaround, one can work with tuples of [std::optional](/cpp/utility/optional/), but there is still no way to adjust the size based on runtime information.

Until [N4387](https://wg21.link/N4387) (applied as a defect report for C++11), a function could not return a tuple using copy-list-initialization:

### Feature-test macro
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_tuple_element_t` | `201402L` | C++14 | `tuple_element_t` alias |
| `__cpp_lib_tuples_by_type` | `201304L` | C++14 | type-based `get` for tuples |

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

## References
- C++11 standard (ISO/IEC 14882:2011): 20.4 Tuples `[tuple]`
- C++23 standard (ISO/IEC 14882:2024): 22.4 Tuples `[tuple]`

## See also
- [pair](/cpp/utility/pair/): fixed-size heterogeneous pair of two values
- [array](/cpp/container/array/): fixed-size homogeneous container
- [variant](/cpp/utility/variant/): value wrapper for one of several alternative types
- [structured binding](/cpp/language/structured_binding/): language support for destructuring tuple-like objects
