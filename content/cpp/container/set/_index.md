---
title: "std::set"
source_path: "cpp/container/set"
header: "<set>"
---

std::set is an associative container that contains a sorted set of unique objects of type Key. Sorting is done using the key comparison function [Compare](/cpp/named_req/Compare/). Search, removal, and insertion operations have logarithmic complexity. Sets are usually implemented as [Red–black trees](https://en.wikipedia.org/wiki/Red%E2%80%93black_tree).

## Declarations
```cpp
template<
class Key,
class Compare = std::less<Key>,
class Allocator = std::allocator<Key>
> class set;
```

```cpp
namespace pmr {
template<
class Key,
class Compare = std::less<Key>
> using set = std::set<Key, Compare, std::pmr::polymorphic_allocator<Key>>;
}
```
_(since C++17)_

## Notes
The member types iterator and const_iterator may be aliases to the same type. This means defining a pair of function overloads using the two types as parameter types may violate the [One Definition Rule](/cpp/language/definition/#One_Definition_Rule). Since iterator is convertible to const_iterator, a single function with a const_iterator as parameter type will work instead.

## Example
```cpp
#include <algorithm>
#include <iomanip>
#include <iostream>
#include <iterator>
#include <set>
#include <string_view>
 
template<typename T>
std::ostream& operator<<(std::ostream& out, const std::set<T>& set)
{
    if (set.empty())
        return out << "{}";
    out << "{ " << *set.begin();
    std::for_each(std::next(set.begin()), set.end(), [&out](const T& element)
    {
        out << ", " << element;
    });
    return out << " }";
}
 
int main()
{
    std::set<int> set{1, 5, 3};
    std::cout << set << '\n';
 
    set.insert(2);
    std::cout << set << '\n';
 
    set.erase(1);
    std::cout << set << "\n\n";
 
    std::set<int> keys{3, 4};
    for (int key : keys)
    {
        if (set.contains(key))
            std::cout << set << " does contain " << key << '\n';
        else
            std::cout << set << " doesn't contain " << key << '\n';
    }
    std::cout << '\n';
 
    std::string_view word = "element";
    std::set<char> characters(word.begin(), word.end());
    std::cout << "There are " << characters.size() << " unique characters in "
              << std::quoted(word) << ":\n" << characters << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 103 | C++98 | iterator allows modification of keys | iterator made constant |
| LWG 230 | C++98 | Key was not required to be CopyConstructible(a key of type Key might not be able to be constructed) | Key is also required tobe CopyConstructible |

## See also
- [multiset](/cpp/container/multiset/)
- [unordered_set](/cpp/container/unordered_set/)
- [flat_set](/cpp/container/flat_set/)
