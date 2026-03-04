---
title: "std::map"
source_path: "cpp/container/map"
header: "<map>"
---

`std::map` is a sorted associative container that stores key-value pairs with unique keys.

Ordering is defined by the comparison object `Compare`, not by insertion order. Search, insertion, and removal have logarithmic complexity. Most implementations use red-black trees.

## Declarations
```cpp
template<
class Key,
class T,
class Compare = std::less<Key>,
class Allocator = std::allocator<std::pair<const Key, T>>
> class map;
```

```cpp
namespace pmr {
template<
class Key,
class T,
class Compare = std::less<Key>
> using map = std::map<Key, T, Compare,
std::pmr::polymorphic_allocator<std::pair<const Key, T>>>;
}
```
_(since C++17)_

`std::pmr::map` is an alias that uses `std::pmr::polymorphic_allocator` for memory-resource-based allocation.

## Template parameters
- `Key`: key type used for ordering and lookup.
- `T`: mapped value type associated with each key.
- `Compare`: strict weak ordering used to sort keys and determine key equivalence.
- `Allocator`: allocator used to manage node storage for `std::pair<const Key, T>` values.

Two keys are considered equivalent when neither compares less than the other under `Compare`. That equivalence relation, rather than `operator==`, controls uniqueness inside the container.

## Example
```cpp
#include <iostream>
#include <map>
#include <string>
#include <string_view>
 
void print_map(std::string_view comment, const std::map<std::string, int>& m)
{
    std::cout << comment;
    for (const auto& [key, value] : m)
        std::cout << '[' << key << "] = " << value << "; ";
    std::cout << '\n';
}
 
int main()
{
    std::map<std::string, int> m{{"CPU", 10}, {"GPU", 15}, {"RAM", 20}};
 
    print_map("1) Initial map: ", m);
 
    m["CPU"] = 25;
    m["SSD"] = 30;
    print_map("2) Updated map: ", m);
 
    std::cout << "3) m[UPS] = " << m["UPS"] << '\n';
    print_map("4) Updated map: ", m);
 
    m.erase("GPU");
    print_map("5) After erase: ", m);
 
    std::erase_if(m, [](const auto& pair){ return pair.second > 25; });
    print_map("6) After erase: ", m);
    std::cout << "7) m.size() = " << m.size() << '\n';
 
    m.clear();
    std::cout << std::boolalpha << "8) Map is empty: " << m.empty() << '\n';
}
```

This is the common `map` pattern: ordered unique keys, logarithmic lookup and insertion, and iteration in key order rather than insertion order.

## Member types
| Member type | Definition |
| --- | --- |
| `key_type` | `Key` |
| `mapped_type` | `T` |
| `value_type` | `std::pair<const Key, T>` |
| `size_type` | Unsigned integer type, usually `std::size_t` |
| `difference_type` | Signed integer type, usually `std::ptrdiff_t` |
| `key_compare` | `Compare` |
| `allocator_type` | `Allocator` |
| `reference` | `value_type&` |
| `const_reference` | `const value_type&` |
| `pointer` | allocator-aware pointer type to `value_type` |
| `const_pointer` | allocator-aware pointer type to `const value_type` |
| `iterator` | Bidirectional iterator to `value_type` |
| `const_iterator` | Bidirectional iterator to `const value_type` |
| `reverse_iterator` | `std::reverse_iterator<iterator>` |
| `const_reverse_iterator` | `std::reverse_iterator<const_iterator>` |
| `node_type` | C++17 node handle type for extracted elements |
| `insert_return_type` | C++17 result type for node-handle insertion |

## Member classes
| Member class | Purpose |
| --- | --- |
| `value_compare` | Function object that compares `value_type` objects by key |

Iteration order follows the key ordering defined by `Compare`.

## Reference map
| Area | Key entries |
| --- | --- |
| Construction and lifetime | [map::map](/cpp/container/map/map/), [map::~map](/cpp/container/map/~map/), [map::operator=](/cpp/container/map/operator%3D/), [get_allocator](/cpp/container/map/get_allocator/) |
| Element access | [at](/cpp/container/map/at/), [operator[]](/cpp/container/map/operator_at/) |
| Iterators | [begin, cbegin](/cpp/container/map/begin/), [end, cend](/cpp/container/map/end/), [rbegin, crbegin](/cpp/container/map/rbegin/), [rend, crend](/cpp/container/map/rend/) |
| Capacity | [empty](/cpp/container/map/empty/), [size](/cpp/container/map/size/), [max_size](/cpp/container/map/max_size/) |
| Modifiers | [clear](/cpp/container/map/clear/), [insert](/cpp/container/map/insert/), [insert_range](/cpp/container/map/insert_range/), [insert_or_assign](/cpp/container/map/insert_or_assign/), [emplace](/cpp/container/map/emplace/), [emplace_hint](/cpp/container/map/emplace_hint/), [try_emplace](/cpp/container/map/try_emplace/), [erase](/cpp/container/map/erase/), [swap](/cpp/container/map/swap/), [extract](/cpp/container/map/extract/), [merge](/cpp/container/map/merge/) |
| Lookup and observers | [count](/cpp/container/map/count/), [find](/cpp/container/map/find/), [contains](/cpp/container/map/contains/), [equal_range](/cpp/container/map/equal_range/), [lower_bound](/cpp/container/map/lower_bound/), [upper_bound](/cpp/container/map/upper_bound/), [key_comp](/cpp/container/map/key_comp/), [value_comp](/cpp/container/map/value_comp/) |
| Non-member functions | [comparison operators](/cpp/container/map/operator_cmp/), [`std::swap(std::map)`](/cpp/container/map/swap2/), [erase_if](/cpp/container/map/erase_if/) |
| Related surface | [deduction guides](/cpp/container/map/deduction_guides/), [value_compare](/cpp/container/map/value_compare/) |

## Deduction guides
The class has [deduction guides](/cpp/container/map/deduction_guides/) so constructors can infer key, mapped, comparator, and allocator-related types from arguments where appropriate.

## Notes
Unlike sequence containers, node-based storage means elements are not contiguous in memory. Ordered lookup and range queries remain cheap because the container maintains key order.

Because `map` is node-based, inserting elements does not invalidate iterators or references to existing elements.

`operator[]` inserts a new element with a default-constructed mapped value if the key does not already exist.

`std::map` is the right fit when keys must stay sorted and unique while preserving logarithmic lookup and insertion complexity.

### Feature-test macros
| Macro | Value | Std | Feature |
| --- | --- | --- | --- |
| `__cpp_lib_containers_ranges` | `202202L` | C++23 | ranges construction and insertion for containers |

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 230 | C++98 | `Key` was not required to be `CopyConstructible` | `Key` is also required to be `CopyConstructible` |
| LWG 464 | C++98 | accessing a const `map` by key was inconvenient | `at()` provided |

## See also
- [multimap](/cpp/container/multimap/)
- [unordered_map](/cpp/container/unordered_map/)
- [flat_map](/cpp/container/flat_map/)
