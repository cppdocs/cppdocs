---
title: "std::hash"
source_path: "cpp/utility/hash"
header: "<bitset>"
category: "utility"
since: "C++11"
---

The unordered associative containers [std::unordered_set](/cpp/container/unordered_set/), [std::unordered_multiset](/cpp/container/unordered_multiset/), [std::unordered_map](/cpp/container/unordered_map/), [std::unordered_multimap](/cpp/container/unordered_multimap/) use specializations of the template std::hash as the default hash function.

## Declarations
```cpp
template< class Key >
struct hash;
```
_(since C++11)_

## Notes
The actual hash functions are implementation-dependent and are not required to fulfill any other quality criteria except those specified above. Notably, some implementations use trivial (identity) hash functions which map an integer to itself. In other words, these hash functions are designed to work with unordered associative containers, but not as cryptographic hashes, for example.

Hash functions are only required to produce the same result for the same input within a single execution of a program; this allows salted hashes that prevent collision denial-of-service attacks.

There is no specialization for C strings. std::hash<const char*> produces a hash of the value of the pointer (the memory address), it does not examine the contents of any character array.

Additional specializations for [std::pair](/cpp/utility/pair/) and the standard container types, as well as utility functions to compose hashes are available in [boost::hash](https://www.boost.org/doc/libs/release/libs/container_hash/doc/html/hash.html#ref).

## Example
```cpp
#include <cstddef>
#include <functional>
#include <iomanip>
#include <iostream>
#include <string>
#include <unordered_set>
 
struct S
{
    std::string first_name;
    std::string last_name;
    bool operator==(const S&) const = default; // since C++20
};
 
// Before C++20.
// bool operator==(const S& lhs, const S& rhs)
// {
//     return lhs.first_name == rhs.first_name && lhs.last_name == rhs.last_name;
// }
 
// Custom hash can be a standalone function object.
struct MyHash
{
    std::size_t operator()(const S& s) const noexcept
    {
        std::size_t h1 = std::hash<std::string>{}(s.first_name);
        std::size_t h2 = std::hash<std::string>{}(s.last_name);
        return h1 ^ (h2 << 1); // or use boost::hash_combine
    }
};
 
// Custom specialization of std::hash can be injected in namespace std.
template<>
struct std::hash<S>
{
    std::size_t operator()(const S& s) const noexcept
    {
        std::size_t h1 = std::hash<std::string>{}(s.first_name);
        std::size_t h2 = std::hash<std::string>{}(s.last_name);
        return h1 ^ (h2 << 1); // or use boost::hash_combine
    }
};
 
int main()
{
    std::string str = "Meet the new boss...";
    std::size_t str_hash = std::hash<std::string>{}(str);
    std::cout << "hash(" << std::quoted(str) << ") =\t" << str_hash << '\n';
 
    S obj = {"Hubert", "Farnsworth"};
    // Using the standalone function object.
    std::cout << "hash(" << std::quoted(obj.first_name) << ", "
              << std::quoted(obj.last_name) << ") =\t"
              << MyHash{}(obj) << " (using MyHash) or\n\t\t\t\t"
              << std::hash<S>{}(obj) << " (using injected specialization)\n";
 
    // Custom hash makes it possible to use custom types in unordered containers.
    // The example will use the injected std::hash<S> specialization above,
    // to use MyHash instead, pass it as a second template argument.
    std::unordered_set<S> names = {obj, {"Bender", "Rodriguez"}, {"Turanga", "Leela"}};
    for (auto const& s: names)
        std::cout << std::quoted(s.first_name) << ' '
                  << std::quoted(s.last_name) << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2119 | C++11 | specializations for extended integer types were missing | provided |
| LWG 2148 | C++11 | specializations for enumerations were missing | provided |
| LWG 2543 | C++11 | std::hash might not be SFINAE-friendly | made SFINAE-friendly |
| LWG 2817 | C++11 | specialization for std::nullptr_t was missing | provided |
