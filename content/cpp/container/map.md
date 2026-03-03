---
title: "std::map"
source_path: "cpp/container/map"
header: "<map>"
category: "container"
since: "C++17"
---

std::map is a sorted associative container that contains key-value pairs with unique keys. Keys are sorted by using the comparison function Compare. Search, removal, and insertion operations have logarithmic complexity. Maps are usually implemented as [Red–black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree).

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

## Notes
Feature-test macro
Value
Std
Feature
__cpp_lib_containers_ranges
202202L
(C++23)
Ranges construction and insertion for containers

## Example
```cpp
#include <iostream>
#include <map>
#include <string>
#include <string_view>
 
void print_map(std::string_view comment, const std::map<std::string, int>& m)
{
    std::cout << comment;
    // Iterate using C++17 facilities
    for (const auto& [key, value] : m)
        std::cout << '[' << key << "] = " << value << "; ";
 
// C++11 alternative:
//  for (const auto& n : m)
//      std::cout << n.first << " = " << n.second << "; ";
//
// C++98 alternative:
//  for (std::map<std::string, int>::const_iterator it = m.begin(); it != m.end(); ++it)
//      std::cout << it->first << " = " << it->second << "; ";
 
    std::cout << '\n';
}
 
int main()
{
    // Create a map of three (string, int) pairs
    std::map<std::string, int> m{{"CPU", 10}, {"GPU", 15}, {"RAM", 20}};
 
    print_map("1) Initial map: ", m);
 
    m["CPU"] = 25; // update an existing value
    m["SSD"] = 30; // insert a new value
    print_map("2) Updated map: ", m);
 
    // Using operator[] with non-existent key always performs an insert
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

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 230 | C++98 | Key was not required to be CopyConstructible(a key of type Key might not be able to be constructed) | Key is also required tobe CopyConstructible |
| LWG 464 | C++98 | accessing a const map by key was inconvenient | at function provided |

## See also
- [multimap](/cpp/container/multimap/)
- [unordered_map](/cpp/container/unordered_map/)
- [flat_map](/cpp/container/flat_map/)
