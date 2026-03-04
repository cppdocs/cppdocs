---
title: "std::tuple"
source_path: "cpp/utility/tuple"
header: "<tuple>"
---

Class template `std::tuple` is a fixed-size collection of heterogeneous values. It is a generalization of [std::pair](/cpp/utility/pair/).

## Declarations
```cpp
template< class... Types >
class tuple;
```
_(since C++11)_

## Template parameters
- `Types...`: the element types stored in the tuple. An empty parameter pack is allowed, so `std::tuple<>` is a valid type.

## Semantics
- A `tuple` stores each element directly as part of the tuple object itself.
- The number of elements, their types, and their order are all part of the tuple type.
- Access is tuple-like rather than name-based: elements are selected by index with [get](/cpp/utility/tuple/get/) or, when types are unique, by type.
- `tuple` is the general-purpose heterogeneous product type in the standard library; [std::pair](/cpp/utility/pair/) is the specialized two-element case.

## Member functions
| Member | Purpose |
| --- | --- |
| [tuple::tuple](/cpp/utility/tuple/tuple/) | Constructs a tuple and its contained elements |
| [tuple::operator=](/cpp/utility/tuple/operator=/) | Assigns from another tuple or tuple-like object |
| [tuple::swap](/cpp/utility/tuple/swap/) | Exchanges the contained element values with another tuple |

## Non-member functions
| Function | Purpose |
| --- | --- |
| [make_tuple](/cpp/utility/tuple/make_tuple/) | Creates a tuple while deducing element types |
| [tie](/cpp/utility/tuple/tie/) | Creates a tuple of lvalue references or unpacks a tuple into existing objects |
| [forward_as_tuple](/cpp/utility/tuple/forward_as_tuple/) | Creates a tuple of forwarding references |
| [tuple_cat](/cpp/utility/tuple/tuple_cat/) | Concatenates tuples into one tuple |
| [get](/cpp/utility/tuple/get/) | Accesses a tuple element by index or unique type |
| [comparison operators](/cpp/utility/tuple/operator_cmp/) | Compares tuples lexicographically |
| [`std::swap(std::tuple)`](/cpp/utility/tuple/swap2/) | Specialized swap overload for tuple |

## Helper concepts
| Concept | Purpose |
| --- | --- |
| `tuple-like` | Exposition-only concept for types that implement the tuple protocol |
| `pair-like` | Exposition-only concept for two-element tuple-like types |

## Helper classes
| Helper | Purpose |
| --- | --- |
| [tuple_size&lt;std::tuple&gt;](/cpp/utility/tuple/tuple_size/) | Obtains the number of tuple elements |
| [tuple_element&lt;std::tuple&gt;](/cpp/utility/tuple/tuple_element/) | Obtains the type of the element at a given index |
| [uses_allocator&lt;std::tuple&gt;](/cpp/utility/tuple/uses_allocator/) | Specializes allocator-awareness for tuple |
| [basic_common_reference&lt;tuple-like&gt;](/cpp/utility/tuple/basic_common_reference/) | Determines a common reference type for tuple-like objects |
| [common_type&lt;tuple-like&gt;](/cpp/utility/tuple/common_type/) | Determines a common type for tuple-like objects |
| [formatter&lt;std::tuple&gt;](/cpp/utility/format/tuple_formatter/) | Formatting support for tuple |
| [ignore](/cpp/utility/tuple/ignore/) | Placeholder object used when unpacking with `tie` |

## Helper specializations
- `enable_nonlocking_formatter_optimization<std::tuple<Ts...>>` is specialized in C++23 so tuple formatting can participate in optimized `std::print`/`std::println` implementations when every element type enables it.

## Deduction guides
The class has [deduction guides](/cpp/utility/tuple/deduction_guides/) so direct construction can infer the tuple element types from constructor arguments.

## Notes
Since the "shape" of a tuple – its size, the types of its elements, and the ordering of those types – are part of its type signature, they must all be available at compile time and can only depend on other compile-time information. This means that many conditional operations on tuples – in particular, conditional prepend/append and filter – are only possible if the conditions can be evaluated at compile time. For example, given a std::tuple<int, double, int>, it is possible to filter on types – e.g. returning a std::tuple<int, int> – but not to filter on whether or not each element is positive (which would have a different type signature depending on runtime values of the tuple), unless all the elements were themselves constexpr.

As a workaround, one can work with tuples of [std::optional](/cpp/utility/optional/), but there is still no way to adjust the size based on runtime information.

Until [N4387](https://wg21.link/N4387) (applied as a defect report for C++11), a function could not return a tuple using copy-list-initialization.

### Feature-test note
Tuple’s type-level API expands over time mainly through helper traits, formatting support, and tuple-like interoperability. The core product-type semantics are stable from C++11 onward.

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
| LWG 2796 | C++11 | triviality of the destructor of `std::tuple` was unspecified | specified |
| LWG 3990 | C++11 | a program could declare an explicit or partial specialization of `std::tuple` | the program is ill-formed in that case, with no diagnostic required |

## References
- C++23 standard (ISO/IEC 14882:2024): 22.4 Tuples `[tuple]`
- C++20 standard (ISO/IEC 14882:2020): 20.5 Tuples `[tuple]`
- C++17 standard (ISO/IEC 14882:2017): 23.5 Tuples `[tuple]`
- C++14 standard (ISO/IEC 14882:2014): 20.4 Tuples `[tuple]`
- C++11 standard (ISO/IEC 14882:2011): 20.4 Tuples `[tuple]`

## See also
- [std::pair](/cpp/utility/pair/)
- [std::tie](/cpp/utility/tuple/tie/)
